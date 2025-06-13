import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
      });
  }, []);
  return (
    <div>
      <h1>상세 게시판</h1>
      <h2>이 글의 id는 {id}번 입니다.</h2>
    </div>
  );
}
