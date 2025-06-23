import React, { useContext } from 'react'

import { AppProvider, useAppcontext } from './contextEx2/AppProvider';

export default function Dashboard() {
  //3개의 context 값을 각각 꺼내서 출력하기
  const {user, isDark, lang} = useAppcontext();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Context 값들 꺼내기</h3>
      <h4>user: {user}</h4>    
      <h4>isDark: {isDark ? 'dark' : 'light'}</h4>    
      <h4>lang: {lang}</h4>    
    </div>
  )
}
