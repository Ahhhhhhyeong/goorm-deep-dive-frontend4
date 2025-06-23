import React, { createContext } from 'react'

// 전체 영역에서 사용할 수 있는 컴포넌트를 하나 만듦
/**
  const value = useContext();
  Context 자체는 정보를 담고 있지 않으며, 
  컴포넌트를 제공하거나 읽을 수 있는 정보의 종류를 나타낸다.
  
  createContext()
  - 값을 전역처럼 공유하기 위해서 사용

  실무에서는 여러 Context를 파일로 분리하고 폴더를 구성한다
  ex)
  constexts/AuthContext.jsx
           /ThemeContext.jsx
           /LangContext.jsx
           /CartContext.jsx

  너무 많은 것을 Context에 넣으면 전체가 재렌더링 한다
  - 값 분리 + 최적화(userMemo) => 중복되서 많이 들어가게 된다. 
  - Redux, Recoil 등으로 대체
 */
const UserContext = createContext();
export default UserContext;
// import React from 'react'

// export default function UserContext() {
//   return (
//     <div>UserContext</div>
//   )
// }
