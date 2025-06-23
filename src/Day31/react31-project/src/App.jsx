import { useState } from 'react'
import './App.css'
import Dashboard from './Dashboard';
import { AppProvider, useAppcontext } from './contextEx2/AppProvider';
import NaverLogin from './naver/NaverLogin';

function App() {
  return (
    <>
      <h2>Naver.login</h2>
      <NaverLogin />

      <AppProvider >
        <Dashboard />
      </AppProvider>
    </>
  )
}

export default App
    // <UserContext.Provider value={user}>
    //   <h1>useState 지옥ㅠ</h1>
    //   {/* <ContextTest user={user} /> */}

    //   <h1>Context</h1>
    //   <GrandChild />
    // </UserContext.Provider>

    /**
        <>
      <h1>useContext 지옥</h1>
      <UserContext2.Provider value={user}>
        <ThemeContext.Provider value={isDark}>
          <LangContext.Provider value={lang}>
              <Dashboard />
          </LangContext.Provider>
        </ThemeContext.Provider>
      </UserContext2.Provider>
    </>
     */


    /**
         <AppProvider >
      <Dashboard />
    </AppProvider>
     */