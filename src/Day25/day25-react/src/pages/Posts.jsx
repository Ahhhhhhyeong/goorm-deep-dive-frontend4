import React, { useEffect, useState } from 'react';

export default function Posts() {
  /*
    1.게시글을 jsonplaceholder에서 가져오기
    2. 페이지 보여질 때 처음 한 번 게시글을 다 가져오기
    3. useEffect를 사용
    4. 가져온 데이터를 화면에 가져오기 위해 저장 => useState
  */
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //처음 실행 시 게시글 가져오기
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.slice(0, 10));
        console.log('json: ', json.slice(0, 10));
      });
  }, []);
  return (
    <div>
      <h1>전체 게시판</h1>
      <ul>
        {posts.map((value) => (
          <li key={value.id}> {value.title} </li>
        ))}
      </ul>
    </div>
  );
}
