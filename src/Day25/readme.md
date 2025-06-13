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

### 🧱 React Router의 구성요소

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

## ✅ React Router 핵심 요약

| 개념              | 설명                                                     |
| ----------------- | -------------------------------------------------------- |
| **BrowserRouter** | 앱 전체를 감싸는 라우터 설정. 페이지 이동을 감지하게 함. |
| **Routes**        | 여러 `Route`들을 감싸는 컨테이너                         |
| **Route**         | URL 경로(path)와 해당 컴포넌트(element)를 연결           |
| **Link**          | 페이지 이동 버튼. 새로고침 없이 URL만 바뀜               |
| **useParams**     | URL 경로에서 동적 변수(\:id 등)를 꺼내오는 훅            |

---

## 🧪 동적 파라미터 : `useParams`

- `useParams()`는 URL 경로에 있는 변수 값을 꺼내는 React Router의 훅
- `Route path="/posts/:id"` → 여기서 `:id`는 동적으로 바뀌는 부분!
- `const { id } = useParams()` → 현재 URL의 id 값을 가져옴

```

```

```

```
