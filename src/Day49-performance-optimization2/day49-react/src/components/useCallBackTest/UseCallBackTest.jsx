import React, { useState } from 'react';
import { useCallback } from 'react';

// 자식 컴포넌트
/*
React.memo 감싸지 않으면 자식에게 데이터를 전달할 때 똑같은 값을 전달해도 계속 렌더링이 됨

*/
const Child = React.memo(({ onClick }) => {
  console.log('😈 Child 랜더링!');
  return <button onClick={onClick}>자식 버튼</button>;
});

export default function UseCallBackTest() {
  const [count, setCount] = useState(0);

  //useCalback으로 함수 메모이제이션을 했다
  const handleChildClick = useCallback(() => {
    console.log('자식 버튼 클릭');
  }, []);

  return (
    <div>
      <h3>useCallBack 사용할 때</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>부모 버튼(+)</button>
      <hr />
      <Child onClick={handleChildClick} />
    </div>
  );
}
/*
useCallback
- 리렌더링 될 때 마다 함수를 새로 만들지 말고 **이전에 만든 함수를 기억** 해서 성능을 최적화 해주는 리엑트 훅

- useCallback(fn,deps)
  fn : 기억하고 싶은 콜백함수
  deps : 이 값이 바뀔 때만 fn 새로 생성

왜 사용?
- 리엑트는 함수 컴포넌트가 렌더링 될 때 함수도 다시 만들어짐
- 이로 인해 리렌더링이 될 때마다 불필요하게 컴포넌트들이 생성
  - useEffect가 있다면 의도치 않게 반복 실행됨
  - 무한 루프에 빠질 수 있다

개발자들이 사용하는 스타일들
- 자식컴포넌트를 최적화 => React.memo + useCallBack
- 이벤트 핸들러 고정 => useCallBack

장점
- 성능 개선
- 리렌더링 줄임
- 함수 재생성 방지

단점
- 남용시 코드가 복잡해짐
- 불필요한 사용은 오히려 메모리 낭비



*/

function UseCallBackTest_nouse() {
  const [count, setCount] = useState(0);
  const handleChildClick = () => {
    console.log('자식 버튼 클릭');
  };
  return (
    <div>
      <h3>useCallBack 사용하지 않을 때</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>부모 버튼(+)</button>
      <hr />
      <Child onClick={handleChildClick} />
    </div>
  );
}
