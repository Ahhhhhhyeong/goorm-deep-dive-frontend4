import DebonceAn from './components/DebonceAn';
import DebounceTest from './components/DebounceTest';
import LodashTest1 from './components/lodashTest/LodashTest';
import LodashTest2 from './components/lodashTest/LodashTest2';
import LodashTest3 from './components/lodashTest/LodashTest3';
import ThorttlingTest1 from './components/ThrottlingTest/ThorttlingTest1';
import ThorttlingTest2 from './components/ThrottlingTest/ThorttlingTest2';
import UseCallBackTest from './components/useCallBackTest/UseCallBackTest';
import UesMemoTest from './components/useMemoTest/UesMemoTest';
import './App.css';
function App() {
  return (
    <>
      <div className='box'>
        <h2>Debounce 없는 예제</h2>
        <DebonceAn />
        <hr />
        <DebounceTest />
      </div>

      <div className='box'>
        <h2>lodash 사용하는 예제</h2>
        <LodashTest1 />
        <LodashTest2 />
        <LodashTest3 />
      </div>

      <div className='box'>
        <h2>Thorttling 사용 예제</h2>
        {/* <ThorttlingTest1 /> */}
        <ThorttlingTest2 />
      </div>

      <div className='box'>
        <h2>useCallBack 사용 예제</h2>
        <UseCallBackTest />
      </div>

      <div className='box'>
        <h2>useMemo 사용 예제</h2>
        <UesMemoTest />
      </div>
    </>
  );
}

export default App;

/*
****  성능을 최적화 할 때 많이 사용한다 ****

Debounce란?
 - 사용자가 입력을 멈춘 후 일정 시간 뒤에만 함수를 실행하는 기법
 - 이벤트가 여러번 발생해도 마지막 이벤트만 유효하게 처리한다
 - 많이 사용하는 대표적으로 검색창 자동완성, 입력값 유효성 검사등에서 사용
 - onChange, onKeyUp , onInput 등의 이벤트에서 사용자가 입력을 
   마치고 조금 기다렸다가 처리하고 싶을 때

Throttle란?
 - 사용자가 어던 행동을 연속적으로 해도, 일정 시간 간격으로만 함수 실행이 
   일어나도록 제한하는 기법  
 - 이벤트가 자주 발생하더라도 주기적으로 1회만 처리한다


 왜 사용하게 되었는지?
 브라우저에서 발생하는 이벤트가 매우 빈번하다
  - 사용자가 검색창에 글자를 입력할 때 -> input
  - 스크롤할 때 -> scroll
  - 창 크기를 바꿀 때 -> resize
  - API요청,렌더링 계속 붙어서 성능저하,UX저하가 발생한다
*/
