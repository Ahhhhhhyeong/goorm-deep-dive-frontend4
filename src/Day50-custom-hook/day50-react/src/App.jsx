import './App.css';
import SideEffectTest from './pages/SideEffectTest';
import CustomHookTest from './pages/CustomHookTest';
import HookTestPage from './pages/HookTestPage';

function App() {
  return (
    <>
      {/* <SideEffectTest /> */}
      {/* <CustomHookTest /> */}
      <HookTestPage />
    </>
  );
}

export default App;

/**
 커스텀 훅(Custom Hook)
 > 컴포넌트 간에 상태 로직이나 사이드 이펙트 로직을 재사용할 때가 많다.   
 > 어떤 데이터를 불러오는 로직, 폼 입력을 처리하는 로직, 특정 이벤트 리스터를 추가하는 로직등이 여러 컴포넌트에서 비슷하게 사용 될 수 있다.

 - use로 시작
 - 내가 직접 상태관리를 만든다.

리팩토링 (Refactoring)
- 기능을 그대로 유지하면서 코드를 더 읽기 쉽고, 재사용 가능하게 정리하는 것
- 기능은 동일하지만 코드는 더 짧고 읽기 쉽고, 유지보수도 쉬움

사이드 이펙트 (Side Effect)
- 컴포넌트가 렌더링 외에 다른 상태를 변경하는 행위
- 부수적인 일(화면을 그리는일 제외)
- 사이드 이펙트는 무조건 UseEffect 안에서 처리

커스텀 훅을 나누는 기준
- 중복된 로직 반복 : 여러 컴포넌트가 같은 (useState, useEffect, fetch) 쓰고 있다면 분리 대상
- 하나의 책임을 가지는 상태 묶음
- 사이드 이펙트 관리(외부 API호출, 이벤트 리스너 등록 ): 분리대상
- 계산, 변환, 필터링 조직을 외부로 재사용을 확보
- react-query, swiper, form 등의 훅을 래핑해서 커스텀 제어

*/
