import React, { useEffect } from 'react';

export default function MovieApi() {
  function getData() {
    setTimeout(() => {
      return '데이터 도착';
    }, 1000);
  }
  function getDataPromise() {
    /** 암묵적인 파라미터명 룰:
     * resolve : 성공시
     * reject : 실패시
     */
    return new Promise((resolve) => {
      //1초 후에 데이터 도착 확인 메시지 리턴
      setTimeout(() => {
        resolve('데이터 도착');
      }, 1000);
    });
  }
  /*
  // 처음 한 번 실행
  영화진흥원에서 결과를 받을 때 까지 기다려야 한다.
    -> useEffect와 setTimeout을 함께 실행 => 비동기 처릴르 해버리기 때문에 결과를 받기 전에 먼저 콘솔 실행이 일어남
    -> 문제가 발생하기 때문에 Promise 는 이용해서 해결한다.
      Promise => 시간이 걸리는 작업이 끝난 후 코드 실행하게 하는 도구!
   */
  useEffect(() => {
    // const result = getData();
    // console.log('result:  ', result);
    getDataPromise().then((result) => {
      //프로미스에서 데이터가 잘 넘어왔을 때 실행
      console.log('result: ', result);
    });
  }, []);

  /*실행순서
    1. useEffect() 실행
    2. useEffect()안에 getDataPromise() 실행
    3. getDataPromise() 내부의 setTimeout() 함수 실행
    4. setTimeout()에서 설정한 시간값(1000) 후에 resolve 값 전달
    5. .then(result) 에서 result를 받으면 내부의 이벤트 진행
  */

  return (
    <div>
      <h2>1초뒤 콘솔 확인!</h2>
    </div>
  );
}
