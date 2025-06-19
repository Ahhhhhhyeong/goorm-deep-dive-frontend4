import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

// loader에서 defer 사용(최신버전에서는 defer를 안써도 defer가 자동생성)
export async function commentLoader() {
  const commentsPromise = fetch(
    'https://jsonplaceholder.typicode.com/comments'
  ).then((res) => res.json());
  return {
    commentData: commentsPromise,
  };
}

export default function Comments() {
  //commentLoader의 리턴 값이 Promise 객체로 변환됨
  const { commentData } = useLoaderData();
  console.log(commentData);
  return (
    <div>
      <h2>댓글 리스트</h2>
      {/* Suspense : 페이지를 로드할 때 기다리는 태그
          fallback : 페이지 로드 되기 전 보여주는 구간
       */}
      <Suspense fallback={<p>댓글을 불러오는 중입니다!..</p>}>
        {/* Await: 기다리는 라우터 태그
        resolve : 가지고오는 객체(값)
      */}
        <Await resolve={commentData}>
          {(loadedComments) => (
            <ul>
              {
                //slice(start, end).map()
                loadedComments.slice(0, 10).map((c) => (
                  <li key={c.id}>
                    <strong>{c.body}</strong>
                  </li>
                ))
              }
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
