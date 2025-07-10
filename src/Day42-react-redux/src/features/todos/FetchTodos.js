import React from 'react';

// 데이터만 불러오는 js 코드
export async function FetchTodos() {
  //API 통신
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

  // console.log('API 통신 실행 됨!');
  if (!response.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  const data = await response.json();
  // console.log(data);
  return data;
}

/* 
Thunk
	- 나중에 실행 될 함수
	- 어떤 계산이나 작업을 바로 실행하지 말고 그것을 함수로 감싸서 나중에 실행할 수 있도록 만들어 놓는 것
	- 리덕스에서는 주로 비동기 작업(API요청, 타이머, 파일읽기)을 처리

createAsyncThunk 
	: API 호출을 쉽게 처리하도록 도와주는 함수
		- 비동기 API요청을 리덕스에서 쉽게 처리하는거!

createAsyncThunk 용도
	- 원래 리덕스는 순수 동기 작업만 처리를 하지만, 서버에서 API 요청을 보내고 응답 받을 때는 비동기 처리가 필요해진다.
	- 이때 createAsyncThunk 가 비동기 함수를 작성할 수 있게 해주고, 자동으로 pending, fulfilled, rejected 상태를 만들어준다.

데이터를 읽는 것을 FetchTodos.js에서 
그럼 데이터 비동기 처리는 어디? => todoSlice.js 

*/
