import { useRef, useState } from 'react';
import './App.css';
import FocusInput from './components/FocusInput';
import AutoScrollChat from './components/AutoScrollChat';
import BlogSearch from './API/BlogSearch';
import TestAutoScroll from './components/TestAutoScroll';

function App() {
  return (
    <>
      {/* <h1>useRef</h1> */}
      {/* <FocusInput /> */}
      {/* <AutoScrollChat /> */}
      {/* <BlogSearch /> */}
      <TestAutoScroll />
    </>
  );
}

export default App;

/*
  let ref = useRef(0);

  //current : 처음 전달한 값
  function handleClick() {
    ref.current = ref.current + 1;
    alert('click: ' + ref.current + 'times');
  }

  return (
    <>
      <h1>useRef</h1>
      <button onClick={handleClick}>Click </button>
    </>
  );
*/
