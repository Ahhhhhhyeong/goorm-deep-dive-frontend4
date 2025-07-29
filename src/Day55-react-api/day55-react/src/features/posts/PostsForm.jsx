import React from 'react';
import { useCreatePostMutation } from './postApi';

export default function PostsForm() {
  // hook 호출
  /**
   * 실제 API 요청과 요청 상태 2가지 값이 배열로 들어온다.
   * - [triggerFunc, resultObj] = use~~Mutation()
   * triggerFunc : 실제 요청을 보내는 함수, 요청 상태(loading, error)를 알 수 있음
   *
   */
  const [createPost, { isSuccess, isLoading, isError }] = useCreatePostMutation();
  // 비동기 통신
  const handleCreate = async () => {
    // 추가하는 동안 잠깐 대기
    await createPost({
      title: 'New Posts',
      body: 'New Posts Contents',
      userId: 1,
    });
    if (isSuccess) {
      console.log('성공햇는지? ', isSuccess);
    }
    alert('게시글이 추가되었습니다.');
  };

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러 발생!!</p>;

  return (
    <div>
      <h2>게시글 작성(추가)</h2>
      {/* 버튼을 클릭하면 생성 */}
      <button onClick={handleCreate}>게시글 추가</button>
    </div>
  );
}
