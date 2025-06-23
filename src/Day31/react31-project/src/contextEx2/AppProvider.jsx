import React, { createContext, useState, useContext } from 'react'

//전체적으로 공유하는 공간
const AppContext = createContext();

function AppProvider({children}) {
  const [user,setUser] = useState('철수');
  const [isDark, setisDark] = useState(true);
  const [lang, setLang] = useState('ko');

  //공유할 값 구성
  const value = {
    user, setUser, 
    isDark, setisDark, 
    lang, setLang
  }

  //공유 값 전달할 Provider 
  return (
    <AppContext.Provider value={value}>
      {children}  {/* 자식 컴포넌트들이 context값에 접근할 수있도록 작성 */}
    </AppContext.Provider>
  )
}


function useAppcontext() {
  return useContext(AppContext);
}


/** Could not Fast Refresh error 발생
 * 함수형 컴포넌트와 훅이 한 파일에 있으면 Last Refresh가 동작을 멈춤
 * 해결방법!
 * 두 갤를 하나의 객체로 export 하거나 default export 없이 모두
named export로 변경하는 방법

두개를 같이 내보내기(통일) 할 때 가장 안전하다!
*/
export {AppProvider, useAppcontext};