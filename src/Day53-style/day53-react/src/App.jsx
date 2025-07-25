import ScssModuleTest1 from './components/ScssModuleTest1';
import ScssModuleTest2 from './components/ScssModuleTest2';
import ScssTest1 from './components/ScssTest1';
import ScssTest2 from './components/ScssTest2';
import ScssTest3 from './components/ScssTest3';
import ScssTest4 from './components/ScssTest4';

function App() {
  return (
    <>
      {/* <ScssTest1 />
      <ScssTest2 />
      <ScssTest3 />
      <ScssModuleTest1 />
      <ScssModuleTest2 /> */}
      <ScssTest4 />
    </>
  );
}

export default App;

/*

SCSS 란?
  - CSS의 확장문법
  - 기존 CSS 문법을 그대로 사용하면서, 변수, 중첩, 조건, 반복, 믹스인 같은 프로그래밍적 기능을 추가할 수 있다.
  - 확장자 : .scss 
  - 구조적이고 재사용성 높은 스타일을 작성할 수 있다. 

왜 사용하게 되었는지?
  - css는 대규모 프로젝트에서 반복적 코드가 많아져서 유지보수가 힘듦
  - SCSS는 변수도 사용, 중첩도 사용, 함수도 사용해서 더 깔끔하고 유지보수하기 쉬움


SCSS vs SASS
=> SASS가 먼저 나온 뒤, css문법에 익숙한 사람들을 위해 SCSS가 나옴

SASS
  - 확장자 : .sass
  - 들여쓰기 기반, 중괄호와 세미콜론 X

리엑트에서는 보통 SCSS를 선호(많이 사용)

외부라이브러리 포함
npm install -D sass
* sass 라이브러리 안에 scss 파일을 css 컴파일 도구가 있음



*/
