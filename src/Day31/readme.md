# \[Day31] 2025.06.23 – React Context & Naver Login API

---

## 🧠 `useContext()`란?

* 컴포넌트 간에 props 없이 데이터를 전달할 수 있도록 해주는 Hook
* 중첩된 컴포넌트 구조에서 **props drilling** 문제를 해결할 수 있다.

---

## 🔄 Context란?

* 여러 컴포넌트에서 **공유해야 하는 데이터**를 전역처럼 관리할 수 있게 해줌
* 예: 사용자 정보, 테마 설정, 언어 설정 등

---

## ❌ Context 없이 props로만 데이터 전달할 경우

```jsx
// App.jsx
<ContextTest user={"영휘"} />
```

```jsx
// ContextTest.jsx
export default function ContextTest({ user }) {
  return <Parent user={user} />;
}
```

```jsx
// Parent.jsx
export default function Parent({ user }) {
  return <Child user={user} />;
}
```

```jsx
// Child.jsx
export default function Child({ user }) {
  return <h4>user: {user}</h4>;
}
```

### 📉 단점

* 중간 컴포넌트들은 필요하지 않은 `user` 값을 계속 전달해야 함
* 컴포넌트가 많아질수록 관리 및 유지보수가 어려워짐

---

## ✅ Context 사용 예시

```jsx
// App.jsx
<UserContext.Provider value={user}>
  <GrandChild />
</UserContext.Provider>
```

```jsx
// UserContext.js
import { createContext } from 'react';
const UserContext = createContext();
export default UserContext;
```

### 관련 메서드 및 개념

* `createContext()` : Context 생성
* `useContext()` : Context 값 접근

> 실무에서는 Context들을 기능별로 나누어 폴더 구조화함
>
> 예:
>
> * contexts/AuthContext.jsx
> * contexts/ThemeContext.jsx
> * contexts/LangContext.jsx
> * contexts/CartContext.jsx

### ⚠️ 단점 및 보완

* Context에 너무 많은 상태를 넣으면 전체 리렌더링 발생
* 상태 분리 및 최적화 필요 (`useMemo` 활용)
* 대안: Redux, Recoil 등 상태관리 라이브러리 사용

---

## 📦 여러 Context를 통합하는 패턴

```jsx
// contexts/AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState('차수');
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('ko');

  const value = {
    user, setUser,
    isDark, setIsDark,
    lang, setLang
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
```

### ✅ 장점

* 여러 상태를 한 곳에서 관리
* Provider 중첩을 줄여 가독성 향상 및 유지보수 용이

---

## 🚀 네이버 로그인 API 적용하기

### 1. 라이브러리 로드 (`index.html`)

```html
<script
  src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
  type="text/javascript"
  charset="utf-8">
</script>
```

### 2. 네이버 객체 확인

```jsx
useEffect(() => {
  console.log(window.naver);
}, []);
```

### 3. 로그인 버튼 생성 및 초기화

```jsx
useEffect(() => {
  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: 'YOUR_CLIENT_ID',
    callbackUrl: 'http://localhost:5173/callback',
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: 40 }
  });

  naverLogin.init();
}, []);

return <div id="naverIdLogin" />;
```

| 옵션            | 설명                          |
| ------------- | --------------------------- |
| `clientId`    | 애플리케이션 등록 시 발급받은 클라이언트 ID   |
| `callbackUrl` | 로그인 후 리디렉션할 URL             |
| `isPopup`     | 팝업 여부 (false: 새창, true: 팝업) |
| `loginButton` | 버튼 디자인 옵션                   |

### 4. 로그인 후 access\_token 확인

```jsx
if (window.location.href.includes('access_token')) {
  naverLogin.getLoginStatus((status) => {
    if (status) {
      const user = naverLogin.user;
      console.log('로그인 성공!');
      console.log(`이름: ${user.name}`);
      console.log(`생일: ${user.birthday}`);
    } else {
      console.error('로그인 실패!');
    }
  });
}
```

### 📌 토큰 정보는 콜백 URL에 포함됨

```
http://localhost:5173/callback#access_token=...&token_type=bearer&...
```

* 로그인 성공 시 이 URL로 이동하면서 토큰 정보가 함께 전달됨
* 이후 유저 정보를 추출하여 사용할 수 있음

