import { useState } from 'react';
import './App.css';
import UseStateEx from './components/UseStateEx';
import UseReducerEx from './components/UseReducerEx';
import Counter from './components/Counter';
import ToggleEx from './components/ToggleEx';
import Cart from './components/Cart';
import PageEx from './pagenation/PageEx';

function App() {
  return (
    <>
      {/* <h1>useState를 사용했을 때 불편함</h1>
      <UseStateEx />

      <h1>useReducer 기본 실습</h1>
      <UseReducerEx />

      <h1>Counter</h1>
      <Counter />

      <h1>Toggle</h1> 
      <ToggleEx />
      <Cart />
      */}
      <PageEx />
    </>
  );
}

export default App;
