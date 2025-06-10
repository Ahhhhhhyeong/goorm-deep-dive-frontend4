//블로그 내용을 나타내는 부분
import React from 'react';

export default function ArticleList() {
  const articls = [
    {
      id: 1,
      avaterImg: '',
      profile: '우유헛간',
      time: '1시간 전',
      title: '블로그 제목이여',
      content: '',
      image: '',
      likes: 14,
      commnets: 0,
    },
  ];
  return (
    <div className='article-list'>
      {/* 
      {...articls[0]} ... :스프레드, 안에 내용을 펼쳐서 복사하거나 전달해주는 연산자
      <ArticleCard key={articls[0].id} {...articls[0]} />
       */}
    </div>
  );
}
