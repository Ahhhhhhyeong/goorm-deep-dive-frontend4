# [Day24] 25.06.12 배운 내용 정리

---

### 🗂️ 프로젝트 소개

- [day24-react]
  - 오전 수업 실습 내용

---

# ✅ `useEffect` 개념 및 활용 예시

> React에서 useEffect는 **컴포넌트의 생명주기(lifecycle)**와 관련된 부수 효과(side effect)를 처리할 때 사용합니다.

### 🔹 `useEffect` 란?

- HTML(뷰)이 먼저 렌더링되고 나서, 이후에 실행되는 비동기 로직이나 외부 요청을 넣는 곳.
- 대표적인 예시:
  - 서버에서 장바구니 데이터 불러오기
  - 컴포넌트가 보여진 후 2초 뒤 알림 띄우기
  - 주식/코인 차트 불러오기 (화면 먼저 렌더링, 데이터는 나중에)

```jsx
useEffect(() => {
  console.log('first loading');
}, []);
```

> 빈 배열 []을 두 번째 인자로 넣으면 **처음 한 번만 실행**됨 (Mount 시점)

### 🔁 `useEffect`의 실행 순서

1. 컴포넌트가 처음 렌더링됨
2. 화면이 **그려진 후(`paint`)** → `useEffect()` 실행됨
3. 상태(state)나 props가 **변경**되면 다시 렌더링
4. **다시 실행되기 전**에 `cleanup 함수`가 먼저 실행됨
5. 컴포넌트가 **사라질 때**(Unmount)도 `cleanup 함수` 실행

---

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    alert('2초 뒤 실행');
  }, 2000);

  return () => {
    clearTimeout(timer); // cleanup: 이전 효과 정리
  };
}, []);
```

---

# 📡 Ajax (Asynchronous JavaScript and XML)

### 🔹 Ajax란?

- **전체 페이지 새로고침 없이**도 서버와 데이터 통신을 가능하게 해주는 기술.
- 사용자와 서버가 **백그라운드에서 몰래 대화**한다.

### 🧭 기본 개념

| 용어           | 설명                                        |
| -------------- | ------------------------------------------- |
| **서버**       | 데이터를 제공하는 컴퓨터 (ex. 유튜브, 구글) |
| **클라이언트** | 데이터를 요청하는 쪽 (나)                   |
| **Request**    | 요청 (서버에 데이터 달라고 함)              |
| **Response**   | 응답 (서버가 데이터를 보내줌)               |

---

## 🧾 XML (과거에 사용)

```xml
<customer>
  <name>홍길동</name>
  <age>20</age>
  <address>경기도 성남시</address>
</customer>
```

- **장점:** 문서 구조화 표현에 좋고, 보안 문서, 오래된 시스템과 호환성 좋음.
- **단점:** 태그가 많아져서 **무거움**, **용량 큼**, **IOT 기기와의 호환성 낮음**

---

## 🌐 JSON (현재 표준)

```js
const user = {
  name: '홍길동',
  age: 20,
};
```

- 자바스크립트 객체 문법 기반의 데이터 포맷.
- **가볍고 간단,** HTML을 모르는 사람도 이해하기 쉬움.
- 현대 웹 개발의 **표준 포맷**으로 사용됨.

### 📦 Ajax 요청 방법

- `XMLHttpRequest` (이전 방식)
- `fetch()` → 현대 웹 개발에서 많이 사용

---

# 추가

### 🎨 React에서의 CSS 관리

#### 🔹 전역 스타일(Global Style)

- 전체적인 디자인 구성 요소 (레이아웃, 컬러 변수 등)
- 예: App.css, variables.css

#### 🔹 모듈 스타일(CSS Module)

- 파일명: 컴포넌트명.module.css
- 컴포넌트 단위로 스타일을 분리해서 충돌 방지
- 사용 예시:

  ```jsx
  import styles from './Button.module.css';
  <button className={styles.primary}>Click</button>;
  ```

---

### ⚙️ `StrictMode`란?

- React 개발 중 잠재적인 문제를 찾아주는 모드.
- 렌더링과 관련된 일부 함수가 의도적으로 두 번 실행됨
  - → 사이드 이펙트를 더 확실하게 테스트 가능.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

> _🚨 배포 시에는 영향을 주지 않으며, 개발 모드에서만 작동합니다._
