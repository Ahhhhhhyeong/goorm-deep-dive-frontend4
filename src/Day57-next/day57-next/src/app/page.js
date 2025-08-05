import { getAllBlogs } from '@/blogs/lib/blog';
import matter from 'gray-matter';

export default async function Home() {
  // 그 비동기처리를 호출하는 함수도 같이 기다려줘야된다.
  // 비동처리하는 await이 파일을 다 읽어서 작업이 끝날때까지는 같이 기다려줘야된다.
  // await은 async라는 함수 안에서만 쓸 수있다!
  // 만약 async없으면 에러가 발생한다.
  const { title, date, content } = await getAllBlogs();

  return (
    <main>
      <h1>gray-matter?</h1>
      <p>{title}</p>
      <p>{date}</p>
      <p>{content}</p>
    </main>
  );
}
/*
gray-matter : 파싱
*/

/*
export default function Home() {
  const fileText = `---
title:"내 글"
date:"2025-08-05"
---
여기는 본문입니다.`;

  const { data, content } = matter(fileText);

  // 위에는 메타에서 제공하는 기본적인 변수명이다.
  // 그래서 변경을 하고 싶을 경우에는 콜론을 이용해서 변수이름을 변경할 수 있다.
  const { data: meta, content: body } = matter(fileText);

  console.log(data);
  console.log(content);

  console.log('meta:', meta);
  console.log('body:', body);

  return (
    <main>
      <h1>gray-matter?</h1>
      <p>{data}</p>
      <p>{content}</p>
    </main>
  );
}
*/
