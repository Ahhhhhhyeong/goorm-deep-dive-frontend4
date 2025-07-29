import CommentList from './features/comments/CommentList';
import PostList from './features/posts/PostList';
import PostsForm from './features/posts/PostsForm';

function App() {
  return (
    <>
      {/* <PostList /> */}
      {/* <CommentList /> */}
      <PostsForm />
    </>
  );
}

export default App;

/*
RTK Query
> Redux Tool Kit (RTK)에 포함된 API 서버와 통신을 위한 강력한 도구
- REST API 또는 GraphQL 서버와 통신할 때 데이터를 가져오고 상태를 관리하는 작업을 자동으로 처리한다

왜 사용하게 되었는지?
  - 데이터를 가져오기 위해 axios로 요청
  - 응답 데이터를 저장할 useState
  - API 요청을 언제? => 한마디로 요청 시기를 결정하는 useEffect가 필요
  - 로딩 중 상태, 에러 상태를 직접 구현해야함 
  - 전역상태 관리
=> 이 코드들을 계속 써야함
=> 반복코드가 너무 많고 유지보수가 힘듦
- RTK Query 이용해서 자동화한다.

서버와 통신을 하려고 할 때, fetch, Axios, RTK Query
작은 프로젝트 = Axios + useSTate, useEffect
규모가 있는 프로젝트 : RTK Query(Redux 연동으로 글로벌 상태 + 서버 상태 통합)

RTK Query 다운로드
npm install @reduxjs/toolkit react-redux

호출 할 부분
https://jsonplaceholder.typicode.com/posts
*/
