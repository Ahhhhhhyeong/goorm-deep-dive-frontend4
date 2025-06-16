# [Day26] 25.06.16 배운내용 정리

---

### 🔗 프로젝트 설명

- [day26-react](./day26-react/)

  - React Router : Navigate 페이지 이동, 중첩 라우터 실습
  - API 호출
    - Promise
    - async / await

- [movie-api-practices](./movie-api-practices/)
  - 영화진흥원 api 호출하여 데이터 표출 실습

---

# 📍 React Router 핵심 정리

## 🚀 페이지 이동 (Navigate)

- useNavigate()는 프로그래밍 방식으로 페이지를 이동시킬 수 있는 React Router Hook입니다.
- 컴포넌트 함수 최상단에서만 호출해야 정상 작동합니다. (React Hook 규칙)
- 사용 예시:

```jsx
const navigate = useNavigate();
navigate('/home');
```

- 사용 시점:
  - 로그인 후 자동 리다이렉트
  - 버튼 클릭 시 조건부 이동
  - 관리자 페이지, 대시보드, 복잡한 앱에서 동적 라우팅 등

### ✅ Link vs Navigate vs Route

| 항목       | 설명                                              |
| ---------- | ------------------------------------------------- |
| `Link`     | 사용자가 클릭해야 이동됨                          |
| `Navigate` | **코드로 자동 이동** (예: 로그인 성공 시 이동 등) |
| `Route`    | 해당 경로에 맞는 컴포넌트를 렌더링함              |
| 항목       | 설명                                              |
| ---------- | --------------------------------                  |
| `Link`     | 사용자가 클릭해야 이동됨                          |
| `Navigate` | **코드로 자동 이동** (예: 로그인 성공 시 이동 등) |
| `Route`    | 해당 경로에 맞는 컴포넌트를 렌더링함              |

---

## 🔙 히스토리 조작 (뒤로가기, 앞으로가기, 새로고침)

- `navigate(-1)` → 브라우저 뒤로가기 (window.history.back()과 동일)
- `navigate(1)` → 앞으로 가기
- `navigate(0)` → 현재 페이지 새로고침 (location.reload()와 유사)

---

## 🧩 중첩 라우팅 (Nested Routes)

- 부모 레이아웃 안에서 자식 라우트를 **일부만 교체하는 구조**
- 컴포넌트 구조가 중첩되며, 하나의 Route 안에 또 다른 Route를 포함 가능
- **중첩 라우트의 path는 상대 경로**로 지정해야 함 (절대경로 `/`로 시작하면 부모 무시됨)

```jsx
<Routes>
  <Route path='/mypage' element={<Mypage />}>
    <Route path='profile' element={<Profile />} />
    <Route path='settings' element={<Settings />} />
  </Route>
</Routes>
```

### ❗주의할 점

- `Mypage` 컴포넌트 내부에 반드시 `<Outlet />`이 있어야 자식 컴포넌트가 렌더링됩니다.
- 중첩 경로 결과:
  - `/mypage/profile`
  - `/mypage/settings`

---

# 🌐 API (Application Programming Interface)

- 프로그램 간 **데이터 교환을 위한 인터페이스**
- 프론트엔드 → 서버 API 요청 → 응답 수신
- 보통 JSON 포맷으로 데이터를 받음

### ✅ HTTP 응답 코드

| 코드  | 의미                          |
| ----- | ----------------------------- |
| `200` | 요청 성공                     |
| `400` | 잘못된 요청 (클라이언트 문제) |
| `404` | 경로 오류                     |
| `500` | 서버 내부 오류                |

### Rest 방식

- `HTTP`기반의 가장 널리 사용되는 방식
- URI를 통해 자원을 식별하고, HTTP 메서드 (GET, POST, PUT, DELETE 등)를 사용하여 자원에 대한 작업을 수행
- `JSON` 형태로 데이터를 파싱

```js
{
  "id": 123,
  "name": "홍길동",
  "email": "hong@example.com"
}
```

---

## ⏳ 비동기 처리와 Promise / async-await

### 📦 Promise 기본 사용법 예시

```jsx
function getDataPromise() {
  /** resolve: 성공 시
   *  reject: 실패 시
   */
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('데이터 도착');
    }, 1000);
  });
}

useEffect(() => {
  getDataPromise().then((result) => {
    console.log('result:', result); // 1초 후 출력됨
  });
}, []);
```

#### 📌 실행 흐름 요약:

1. `useEffect()` 실행됨
2. `getDataPromise()` 호출 → 1초 대기
3. 1초 후 `resolve('데이터 도착')` 실행
4. `.then()`으로 전달되어 콘솔에 출력

---

### 📘 async / await 개념

- `async`: 함수에 붙이면 무조건 Promise를 반환
- `await`: Promise가 처리될 때까지 기다렸다가 다음 코드 실행
  - → `async` 함수 안에서만 사용 가능

```jsx
async function goStore() {
  console.log('문 열고 들어감');
  await wait(2000);
  console.log('계산하고 나온다');
}

function wait(ms) {
  console.log('물건 고르는 중');
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

- 위 코드는 다음과 같은 흐름을 가짐:

1. goStore() 호출
2. "문 열고 들어감" 출력
3. 2초 대기 (물건 고르는 중)
4. "계산하고 나온다" 출력

#### 📘 `useEffect` 안에서 async 함수 사용하기

```jsx
useEffect(() => {
  goStore(); // async 함수 실행
}, []);
```
