import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import { bestBakeryList, menu } from './assets/itemsList.js';
function App() {
  return (
    <>
      {/* 만들어야할거 
  1. 헤더 2. 헤더메뉴 => 하나로?
  3. 중간 메뉴?컨텐츠?
  4. 추천상품
   */}
      <Header menu={menu} />
      <Contents items={bestBakeryList} />
    </>
  );
}

export default App;
