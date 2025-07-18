import React, { useEffect, useState } from 'react';
import { usePostStroe } from '../../app/postStore';
// import { usePostQuery } from '../../hook/useFetchBlog';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const { posts, searchPost } = usePostStroe();
  // const { data, isFetching, isError } = usePostQuery('', '');

  //검색 결과가 있으면 searchPost 없으면 posts사용
  const displayPosts = searchPost.length > 0 ? searchPost : posts;

  return (
    <div className='overflow-hidden grid grid-cols-4 gap-4'>
      {/* <table className='min-w-full bg-white'>
        <thead className='bg-rose-50'>
          <tr>
            <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Title</th>
            <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Author</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {displayPosts &&
            displayPosts.map((post) => (
              <tr key={post.id} className='hover:bg-gray-50'>
                <td className='px-4 py-3 text-sm text-gray-900'>
                  <Link to={`/detail/${post.id}`}>{post.title}</Link>
                </td>
                <td className='px-4 py-3 text-sm text-gray-600'>{post.userId}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
      {displayPosts &&
        displayPosts.map((post) => (
          <div key={post.id} className='w-min-mb border rounded p-3 '>
            <Link to={`/detail/${post.id}`}>
              <h4 className='text-lg/6 font-bold text-zinc-600  '>{post.title}</h4>
              <p className='inline-flex items-center px-2.5 py-0.5 my-2 rounded-md bg-rose-100 text-rose-800 font-xs text-sm'>
                작성자: {post.userId}
              </p>
              <p className='truncate pr-5 text-sm font-xs text-gray-600'>{post.body}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}
