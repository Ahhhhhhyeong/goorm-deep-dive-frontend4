import { useState } from 'react';

import './App.css';
import Counter from './components/RTL/Counter';
import InputBox from './components/RTL/InputBox';
import UserForm from './components/user/UserForm';
import UserDisplay from './components/user/UserDisplay';

function App() {
  return (
    <>
      {/* <Counter />
      <InputBox /> */}
      <UserForm />
      <UserDisplay />
    </>
  );
}

export default App;

/*
React 테스트란?
 - 개발한 리엑트 컴포넌트나 기능들이 제대로 동작하는지 자동으로 확인
 - 사용자가 버튼을 클릭했을 때, 화면이 바뀌거나 데이터가 저장되는 등의 동작이 원하는대로 작동하는지 확인해주는 과정


왜 테스트를 하게되었나?
 - 사람이 직접 브라우저에서 모든 기능을 하나하나 눌러보기에는 시간이 오래걸림 + 실수가 잦음
 - 팀 프로젝트나 유지보수가 많은 경우, 누군가 코드를 바꾸면 어디가 잘 못되었는지 모르고 배포될 수 있음
  
실제 테스트를 도와주는 라이브러리
 - RTL (React Testing Library) :
    - 리엑트에서 가장 많이 사용되는 테스트 도구 (표준 테스트 도구)
 - Jest  
 - MSW (Mock Service Worker) 
    - API 응답을 가짜로 만들어 테스팅 해주는 도구

유닛(Unit) 테스트 
  - 가장 작은 단위의 로직(함수, 컴포넌트 등 독립적으로 테스트)
  - 유닛은 빠르고 명확한 로직 검증용
  - ex) 버튼 클릭시 1증가
통합(Integration) 테스트 
  - 여러 유닛이 함께 작동하는 흐름을 테스트(컴포넌트, 상태관리, API 등 )
  - 여러 기능이 함께 작동할 때 연결이 잘 되는지 확인
  - ex) 로그인 시 토큰 저장 / 화면 이동
엔드투엔드(end-to-end, ete) 테스트



리엑트 유닛 테스트를 위한 필수 라이브러리 목록 
```
npm install --save-dev 
              jest 
              @testing-library/react 
              @testing-library/jest-dom
```
 jest  테스트를 실행하는 기본 도구
  @testing-library/react 리액트 컴포넌트를 테스트할 수 있는 도구
  @testing-library/jest-dom DOM요소에 직관적으로 matcher 추가해주는
                             유틸리티 라이브러리 
                  유저 관점에서 요소의 상태,내용,속성, 클래스,포커스여부등을
                  테스트 하고 싶을 때
                  expect() 

번들러 중에서 vite 프로젝트로 테스트 할 때 : vitest

테스터를 사용하기 위해서는 추가적으로 vite.config.js 수정을 해주어야함.

*/
