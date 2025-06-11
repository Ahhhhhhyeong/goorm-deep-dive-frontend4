// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let post = '울 동네 맛집';

  // 색상 변수
  let data = 'red';

  return (
    // html에서는 `class = 클래스`
    // jsx에서는 `className=클래스명`
    <div className='App'>
      <h1>안녕</h1>
      <div>
        <h4>This is Blog</h4>
      </div>
      {/* 주석~ */}
      <p>{post}</p>
      {/* 클래스 이름을 변수로 사용가능(href, id, src 등 가능) */}
      <p className={data}>Hello!!</p>
      {/* inline 요소 가능? => style={{css 요소 입력}} */}
      <p style={{ color: 'blue', fontSize: '3rem' }}>글씨</p>
    </div>
  );
}

export default App;
