# [Day25] 25.06.13 배운 내용 정리

---

### 🗂️ 프로젝트 소개

- [day25-react](./day25-react/)
  - 리엑트 라우터 기본 개념 실습
- [day25-react-2](/day25-react-2/)
  - 리엑트 라우터를 활용한 실습

---

# 📦 React Router

- 리액트에서 다양한 URL 경로에 따라 화면(컴포넌트)을 변경할 수 있도록 해주는 라이브러리
- SPA(_Single Page Application_)이기 때문에 일반적인 HTML처럼 페이지를 새로고침하지 않고 컴포넌트만 교체함
- react-router-dom 패키지를 설치하여 사용함

```bash
npm install react-router-dom
```

## 🧱 React Router의 구성요소

1. `<BrowserRouter>`

   - 앱 전체를 감싸는 라우터
   - HTML5의 `history API`를 사용하여 주소를 조작함
   - 이걸 꼭 가장 바깥에 둘러줘야 `Link`, `Route`, `useParams` 등이 작동함

   ```jsx
   import { BrowserRouter } from 'react-router-dom';
   <BrowserRouter>
     <App />
   </BrowserRouter>;
   ```

2. `<Routes>`와 `<Route>`

   - `<Routes>`: 여러 개의 `<Route>`를 감싸는 컨테이너
   - `<Route path="..." element={<컴포넌트 />} />`: 특정 경로에 들어왔을 때 보여줄 컴포넌트를 설정

   ```jsx
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
   </Routes>
   ```

3. `<Link to="...">`

   - `<a href>`처럼 보이지만, 페이지 새로고침 없이 내부 라우팅을 처리함
   - 클릭하면 URL만 바뀌고 해당 경로의 컴포넌트가 뜸

   ```jsx
   <Link to="/">Home</Link>
   <Link to="/about">About</Link>
   ```

---

## 🔀 동적 라우팅 (Dynamic Routing)

- 경로를 동적으로 생성
- 예시 : /posts/12

```jsx
<Route path='/posts/:id' element={<PostDetail />} />
```

- 여기서 `:id`는 **동적 파라미터**
- 실제 URL이 `/posts/12`이면 `id`는 12

> 이 값을 가져오기 위해 `useParams()` 훅을 사용함

### 🧪 동적 파라미터 : `useParams`

```jsx
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>상세 게시판</h1>
      <h2>이 글의 id는 {id}번 입니다.</h2>
    </div>
  );
}
```

- `useParams()`는 URL 경로에 있는 변수 값을 꺼내는 React Router의 훅
- `const { id } = useParams()` → 현재 URL의 id 값을 가져옴

---

### ✅ React Router 핵심 요약

| 개념              | 설명                                                     |
| ----------------- | -------------------------------------------------------- |
| **BrowserRouter** | 앱 전체를 감싸는 라우터 설정. 페이지 이동을 감지하게 함. |
| **Routes**        | 여러 `Route`들을 감싸는 컨테이너                         |
| **Route**         | URL 경로(`path`)와 해당 컴포넌트(`element`)를 연결       |
| **Link**          | 페이지 이동 버튼. 새로고침 없이 URL만 바뀜               |
| **useParams**     | URL 경로에서 동적 변수(`\:id` 등)를 꺼내오는 훅          |

### 📌 라우터 사용 흐름 요약

1. `BrowserRouter`로 앱 전체 감싸기 (주로 `main.jsx`)
1. `Routes` 안에 각 페이지에 맞는 `Route` 설정
1. 페이지 이동에는 `Link to="..."` 사용
1. 동적 주소가 필요하면 `:id`처럼 설정하고, `useParams`로 읽어오기

---
