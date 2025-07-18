import React, { useEffect, useState } from 'react';
import useInput from '../hook/useInput';
import useSelect from '../hook/useSelect';
import { usePostStroe } from '../app/postStore';
import { useQuery } from '@tanstack/react-query';
import { usePostQuery } from '../hook/useFetchBlog';

export default function Search() {
  const { searchPostTitle, searchPostBody, addPost } = usePostStroe();
  const searchInput = useInput();
  const selected = useSelect();

  // 검색 실행을 위한 상태
  const [currentSearch, setCurrentSearch] = useState({
    type: '',
    term: '',
  });

  const { data, isFetching, isError } = usePostQuery(currentSearch.type, currentSearch.term);

  // data가 생길 때!
  useEffect(() => {
    // console.log('data있음?', data);
    if (data) addPost(data);
  }, [data]);

  // 검색 실행 함수
  const handleSearch = () => {
    console.log('검색함?', selected.value);
    if (selected.value === 'title') {
      console.log(searchInput.value);
      searchPostTitle(searchInput.value);
    } else {
      searchPostBody(searchInput.value);
    }
  };

  return (
    <div className='flex items-center gap-2 p-4 bg-white  max-w-lg mx-auto'>
      <select
        {...selected}
        className='px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200 text-sm min-w-[80px]'>
        <option value='title'>제목</option>
        <option value='body'>내용</option>
      </select>
      <input
        type='text'
        {...searchInput}
        placeholder='검색어를 입력하세요'
        className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200'
      />
      <button
        onClick={handleSearch}
        disabled={isFetching}
        className='px-4 py-2 bg-rose-400 text-white rounded-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 transition-colors duration-200'>
        검색
      </button>
    </div>
  );
}
