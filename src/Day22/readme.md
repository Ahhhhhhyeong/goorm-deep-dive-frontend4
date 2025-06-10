# [Day22] 25.06.10 배운내용 정리

---

### 🔗 프로젝트 소개

- [day22-react](./day22-react/)
  - 한 페이지에서 컴포넌트 여러개로 분리하는 실습

---

# 🧩 리액트 기본 구조

### ✅ App.jsx

> 여러 컴포넌트를 묶어주는 메인 화면 역할

### ✅ main.jsx

> App에서 만든 태그를 HTML의 root 요소에 끼워 넣는 파일

---

## 📘 JSX 코드 설명 정리

### 📦 import 구문

```js
import Profile from './components/Profile';
import './App.css';
```

- `Profile` 컴포넌트를 import
- 전체 애플리케이션에서 공통된 스타일이 필요할 경우, `App.css`에서 **전역 스타일**을 관리하는 것이 좋음

### 🧩 App 컴포넌트 정의

```js
function App() {
  return (
    <>
      <Profile
        image=''
        name='James Kim'
        title='프론트엔드 개발자'
        isNew={true}
      />
    </>
  );
}
```

- `App`은 리액트 애플리케이션의 **메인 컴포넌트**
- `Profile` 컴포넌트에 **props**를 전달하여 사용자 정보를 표시함

### 🧠 Props 전달 시 주의사항

```js
<Profile image='' name='James Kim' title='프론트엔드 개발자' isNew={true} />
```

- 문자열 `props` (`name`, `title`) 는 그냥 문자열로 전달 가능
  ```js
  name = 'James Kim';
  ```
- `boolean`, `number`, `object` 등 문자열이 아닌 타입은 반드시 중괄호 {} 로 감싸야 함
  ```js
  isNew={true}
  ```
  > ⚠️ isNew='true' 이렇게 문자열로 전달하면 "true"라는 문자열이 되어서 실제 boolean true와는 완전히 다른 의미가 될 수 있음!

---

# 🌐 리액트의 렌더링 방식

### 🔄 클라이언트 렌더링

- 리액트는 브라우저(클라이언트) 에서 웹 페이지를 만들어서 보여줌
- 서버에서는 처음에 index.html 파일만 다운로드
- 이후 화면 구성은 리액트 코드가 처리

### 🖼️ 렌더링 vs 리렌더링

- 렌더링: 웹페이지를 화면에 처음 보여주는 것
- 리렌더링: 상태(state) 변화 등으로 인해 다시 화면을 그리는 것

---

# 🧠 리액트의 핵심: 가상 DOM (Virtual DOM)

### ✅ 동작 방식

- 전체 화면을 바꾸지 않음 (새로고침 ❌)
- 실제 DOM의 복사본(Virtual DOM) 을 메모리에 보관
- 변경 전후의 가상 DOM을 비교
- 변경 전후의 가상 DOM을 비교
- 변경된 부분만 실제 DOM에 반영
- Reconciliation 알고리즘으로 변경을 최적화
  - → 특정 key 값을 이용하여 DOM 요소 추적

---

# 🧱 컴포넌트 만들기

1. 함수형 컴포넌트 (Functional Component)

- 단순한 함수 형태로 UI 정의
- useState, useEffect 등 Hooks 사용 가능
- 데이터는 props로 전달받음

2. 클래스 컴포넌트 (Class Component)

- ES6 클래스 문법 사용
- 상태는 this.state 로 관리
- 데이터는 constructor(props)로 전달
  - → 전달하지 않으면 에러 발생할 수 있음
- 요즘은 잘 사용하지 않음
  - → this 바인딩 이슈, 복잡한 구조 등 이유
- 🔎 클래스 컴포넌트는 주로 옛날 코드나 일부 라이브러리에서 볼 수 있다!

### 🧐 왜 컴포넌트를 나누나요?

- 재사용을 위해 따로 컴포넌트 제작
- UI가 변경이 되더라도 부분만 수정이 가능함 (확장성 good!)
- 예시: 아바타 이미지는 여러곳에서 사용될 수 있다!

---

## ✅ 요약 정리

- 가상 DOM 덕분에 전체 화면을 다시 그리지 않고 변경된 부분만 빠르게 수정!
- 함수형 컴포넌트가 더 간단하고 트렌디하다!
  - → 그래서 현재는 함수형 컴포넌트를 더 많이 사용함.

---

### 🌍 참고: 인터넷의 작동 방식

> - 인터넷은 IP 주소 기반으로 구성됨
> - 하지만 IP는 외우기 어려워서 → 도메인 이름 사용
>
> > - 과거: 서버에서 저장된 정적인 HTML 문서를 받아오는 방식
> >
> > - 현재: React 등을 사용해 동적으로 화면 구성
