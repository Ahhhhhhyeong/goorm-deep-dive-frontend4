import React from 'react';

// 데이터만 불러오는 js 코드
export async function FetchTodos() {
  //API 통신
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

  if (!response.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  const data = await response.json();
  return data;
}
