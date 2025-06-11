import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Greeting from './components/Greeting';
import MyButton from './components/MyButton';
import Users from './components/Users';

function App() {
  //배열도 js기반이라 사용하는 방법이 js와 같음
  let names = ['전준우', '김동혁', '감보아'];

  let userData = {
    name: '전준우',
    age: '39',
  };

  return (
    <>
      {/* 1. 바로 html태그를 사용 + 이름배열 사용가능!
      <h1>안녕하세요! {names[0]}님!</h1> 
      <h1>안녕하세요! {names[1]}님!</h1> 
      */}
      {/* Greeting을 부를 때 names도 넘겨주어야함! */}
      {/* 2. names의 아이템 하나씩 전달  */}
      {/* <Greeting name={names[0]} />
      <Greeting name={names[1]} />
      <Greeting name={names[2]} /> */}
      {/* 3. Greeting 태그 중복 해결 
        map() 함수 활용!
      */}

      {
        //위의 중복되는 태그를 없애기 위해서 map함수나 배열을 직접 사용해야될 때는 {} 사용
        // 세미콜론(;)을 안써도 된다!
        // Errors : Each child in a list should have a unique "key" prop.
        //=> 리액트에서 배열(map, 반복문 등)이용해서 여러 컴포넌트를 화면에 그려야 될 때가 있다.
        //=> 리액트는 리렌더링(다시화면을 그리는)을 할 때 성능 문제가 생길 수 있다.
        //=> 각 컴포넌트마다 key를 작성해야 한다! (식별할 수 있는 키 필요!)
        names.map((name, index) => (
          <Greeting name={name} key={index} />
        ))
      }

      {/* 버튼 예제 */}
      {/* <button>로그인</button>
      <button>회원가입</button> */}
      <MyButton label='로그인' />
      <MyButton label='회원가입' />

      {/* const let userData 변수 생성
          props는 객체 자체를 한꺼번에 받을 수 있다. 
          복잡한 구조의 데이터도 props로 쉽게 받을 수 있다.*/}
      <Users user={userData} addr={'부산시'} />
    </>
  );
}

export default App;
/*
<Header />
      <h1>App 메인화면</h1>
      <Footer />
*/
