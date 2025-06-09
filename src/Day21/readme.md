# [Day21] 25.06.09 배운 내용 정리

---

## 📌 React 설치 및 프로젝트 생성

### ✅ Node.js 설치

> [Node.js 홈페이지](https://nodejs.org/ko/download)
>
> > - **LTS 버전**으로 다운로드

### ✅ 프로젝트 생성

1. 터미널 오픈
2. 생성하려는 디렉토리로 이동  
   `cd [이동을 원하는 경로]`
3. Node.js와 Vite를 사용하여 React 프로젝트 생성
   ```bash
   npm create vite@latest [프로젝트이름] -- --template react
   ```
   - `npm create vite@latest` : 최신 vite 실행
   - `[프로젝트이름]` : 새 프로젝트 이름
   - `-- --template react` : React 템플릿 적용
4. 생성된 프로젝트로 이동  
   `cd [프로젝트이름]`
5. 의존성 설치  
   `npm install`
6. 개발 서버 실행  
   `npm run dev`

---

## 🔍 React란?

- **SPA (Single Page Application)** 방식

### 📄 SPA란?

> Single Page Application 의 약자

- 하나의 HTML 페이지와 애플리케이션 실행에 필요한 JS와 CSS같은 모든 자산을 로드하는 애플리케이션
- 페이지 또는 후속 페이지의 상호작용은 서버로부터 새로운 페이지를 불러오지 않으므로 페이지가 다시 로드되지 않는다.

### 🔸 UI란?

- 사용자와 컴퓨터 간의 **상호작용을 위한 화면 요소**
- 예: 버튼, 입력창, 메뉴 등

---

## 🧱 JSX & 컴포넌트

### ✅ JSX (JavaScript XML)

- 자바스크립트 안에서 HTML처럼 사용하는 **확장 문법**
- React DOM은 `HTML 어트리뷰트(attribute)` 이름 대신 `캐멀케이스(camelCase)`를 네이밍 컨벤션으로 사용
  - 예 : `class` -> `className`

### ✅ 컴포넌트

- UI의 독립적인 블럭
- **작고 재사용 가능한 단위**
- 컴포넌트는 기능별로 나눌 수 있으며 다른 컴포넌트 안에서 사용 가능

#### ✅ props

- 컴포넌트의 입력값
- 부모 컴포넌트로부터 자식 컴포넌트로 전달된 데이터
- `props`는 **읽기 전용!!** 어떤 방식으로든 수정해서는 안됨

### ✅ Fragment (`<></>`)

- 여러 컴포넌트를 하나로 묶을 때 사용
- **추가적인 DOM 노드를 생성하지 않음**

---

## 🗂️ React 프로젝트 구조

```
📁 project/
├── index.html        # SPA 진입점
├── vite.config.js    # Vite 설정
├── package.json      # 프로젝트 정보 및 의존성
├── node_modules/     # 설치된 라이브러리
└── src/              # 실제 작업 영역
    ├── main.jsx      # React 진입점
    └── App.jsx       # 메인 화면 컴포넌트
```

### 📌 실행 순서

1. `index.html` 로딩
2. `<div id="root">` → React가 렌더링할 위치
3. `main.jsx` → `createRoot()` 실행
4. `App.jsx` → 실제 화면 구성

📌 **주의사항**

- 컴포넌트 이름은 **반드시 대문자**로 시작해야 함

---

## 💡 예제 코드

### 📘 AppEx 컴포넌트

```jsx
import Blog from './components/Blog';

function AppEx() {
  return (
    <div className='AppEx'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}

export default AppEx;
```

### 📘 기본 함수형 컴포넌트

```jsx
import React from 'react';

export default function Header() {
  return <div>Header</div>;
}
```

---

## 🧪 실습: second-project

### 📘 App.jsx

```jsx
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Greeting from './components/Greeting';
import MyButton from './components/MyButton';
import Users from './components/Users';

function App() {
  let names = ['전준우', '김동혁', '감보아'];

  let userData = {
    name: '전준우',
    age: '39',
  };

  return (
    <>
      {names.map((name, index) => (
        <Greeting name={name} key={index} />
      ))}

      <MyButton label='로그인' />
      <MyButton label='회원가입' />

      <Users user={userData} addr='부산시' />
    </>
  );
}

export default App;
```

### 📘 Greeting.jsx

```jsx
import React from 'react';

export default function Greeting({ name }) {
  return (
    <>
      <h1>안녕하세요! {name}님!</h1>
    </>
  );
}
```

### 📘 Users.jsx

```jsx
import React from 'react';

export default function Users({ user, addr }) {
  return (
    <div>
      <h2>이름 : {user.name}</h2>
      <p>나이 : {user.age}</p>
      <p>주소 : {addr}</p>
    </div>
  );
}
```

---

#### 정리할 때 참고한 사이트

[React 공식 홈페이지](https://ko.legacy.reactjs.org/docs/glossary.html)
