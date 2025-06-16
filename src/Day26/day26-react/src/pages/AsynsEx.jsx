import React, { useEffect } from 'react';

export default function AsynsEx() {
  /** asyns & await
   * asyns
   * - asyns 단어를 쓰면 항상 Promise를 반환한다
   * - 내부에서 await를 사용해서 비동기 흐름을 잠시 순서대로(동기처럼) 처리할 수 있다
   *
   * await
   * - Promise가 완료될 때 까지 기다리는 키워드
   * - async 안에서만 사용 가능
   */

  async function goStore() {
    console.log('문 열고 들어감');
    await wait(2000);
    console.log('계산하고 나온다');
  }
  function wait(ms) {
    console.log('물건 고르는 중');
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    goStore();
  });
  return <div>AsynsEx 콘솔 확인~</div>;
}
