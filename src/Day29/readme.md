# [Day29] 25.06.19 배운 내용 정리

---

# 최신 React Router 철학 및 실습 정리

## 📌 데이터 중심 라우팅 (React Router 6.4 이후)

- **데이터 라우터 API** 도입
- 컴포넌트 방식이 아닌 **라우트 객체 기반** 선언 방식
- 더 **컴팩트하고 유지 보수가 쉬움**

---

## 🔧 주요 API 및 개념

### `createBrowserRouter()`

- 브라우저 히스토리 기반 라우터 생성
- 새로고침 없이 렌더링 가능
- 로딩 페이지, 제어 등 기능 제공

### `RouterProvider`

- `createBrowserRouter`로 생성한 라우터를 React에서 사용할 수 있게 함
- 라우터 수준에서 **데이터 로딩 및 제어** 담당

### `loader`

- 라우트 진입 **전에 데이터를 미리 불러오기**
- SSR 방식과 유사한 데이터 접근 방식

### `action`

- **폼 전송 핸들링** 담당
- `onSubmit` 방식보다 간단하고 fetch와 이벤트 제어가 불필요

### `defer`

- 일부 데이터 **지연 로딩**
- 첫 화면을 빠르게 렌더링 가능
- `loader()` 내부에서 사용
- ✅ **React Router 7부터는 자동으로 defer 적용**

### `useLoaderData()` Hook

- `loader()` 함수로 가져온 데이터를 컴포넌트에서 사용 가능

---

## 🗂 중앙 집중식 라우팅 관리

- `main.jsx`에서 라우팅을 한곳에서 정의
- 유지보수에 유리

### ✅ 예제 코드

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

---

## 📤 `react-router-dom`의 `Form` 컴포넌트

- 서버로 보낼 데이터를 담기 위해 name 속성 설정 필요

```jsx
<input type='text' name='username' placeholder='이름을 입력하세요' />
```

---

# 🔐 Kakao 로그인 API

## ✅ 준비 사항

- `JavaScript Key` 필요
- [카카오 개발자 도구](https://developers.kakao.com/)

## 🌐 OAuth 2.0 개념

- 외부 서비스(카카오, 구글, 네이버 등) 인증을 내 서비스에 적용
- 중재자 역할: 외부 계정 인증 → 토큰 발급 → 서비스 접근 허용

## 🚀 간편 로그인 요청

```jsx
Kakao.Auth.authorize({
  redirectUri: '${REDIRECT_URI}',
});
```

## ⚙️ 카카오 객체 초기화

```jsx
if (!window.Kakao.isInitialized()) {
  window.Kakao.init(kakaoLoginKey);
  console.log('카카오 객체가 만들어짐!');
}
```

- `window.Kakao`는 브라우저에 로드된 카카오 전역 객체
- 앱 키로 객체 초기화 (`init`)
- `isInitialized()`로 중복 초기화 방지
