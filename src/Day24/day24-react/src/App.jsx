import { useState } from 'react';
import './App.css';
//컴포넌트를 소문자로 쓰면 컴포넌트라고 인식을 못 할 때가 있다!
import UseEffectEx from './components/useEffectEx';
import UseEffectExEx2 from './components/UseEffectExEx2';
import ObjectPaser from './components/ObjectPaser';

function App() {
  return (
    <>
      {/* <UseEffectEx /> */}
      {/* <UseEffectExEx2 /> */}
      <ObjectPaser />
    </>
  );
}

export default App;
