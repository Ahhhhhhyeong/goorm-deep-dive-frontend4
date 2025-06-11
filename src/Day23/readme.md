# [Day23] 25.06.11 배운 내용 정리

---

### 🗂️ 프로젝트 소개

- [day23-react](./day23-react/)
  - 이벤트 실습 프로젝트
  - 약간의 정규식 + 유효성 검사
  - 리액트 부트스트랩 설치 및 사용

---

## 🔄 이벤트(Event) 처리

### ✅ 이벤트 버블링 (Event Bubbling)

- **설명**: 이벤트가 발생한 요소에서 시작해 **부모 요소 → 조상 요소**로 전파됨
- **리액트에서도 동일하게 동작**
- 아래 예시에서 버튼 클릭 시 `alert('버튼 클릭')` 후, 부모의 `alert('부모')`도 실행됨

```jsx
<div onClick={handleParentClick}>
  <button onClick={handleButtonClick}>클릭해보세용</button>
</div>
```

**버블링 방지 방법:**

```js
const handleButtonClick = (e) => {
  e.stopPropagation(); // 부모 이벤트 방지
  alert('버튼 클릭');
};
```

---

### ✅ 이벤트 캡처링 (Event Capturing)

- **전파 순서**: **조상 → 부모 → 자식**
- **용도**: 로그 수집, 경고, 특정 이벤트 차단 등에 사용

```jsx
<div onClickCapture={() => alert('div')}>
  <section onClickCapture={() => alert('section')}>
    <button onClickCapture={() => alert('button')}>click</button>
  </section>
</div>
```

---

### ✅ 기본 동작 방지

```js
e.preventDefault();
```

- `<a>`, `<form>` 등의 **기본 동작 차단**에 사용 (링크 이동, 폼 제출 등)

---

### ✅ 이벤트 위임 (Event Delegation)

- **부모 요소에 이벤트 한 번만 걸어 자식 요소들의 이벤트 처리**
- 동적 요소 처리에 유리, **성능 개선 + 유지보수 용이**

```js
e.target; // 실제 이벤트 발생한 대상 확인
```

---

## 🔍 정규표현식 (RegExp)

### 개념

- 문자열 내 **특정 패턴 검사**
- `/패턴/.test('문자열')` 또는 `match()` 사용

### 자주 쓰는 예시

```js
/^[0-9]+$/              // 숫자만
/^[가-힣]+$/             // 한글만
/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/  // 영문+숫자, 8자 이상
```

---

## 🧩 React Hook Form

- **폼 상태 관리 + 유효성 검사** 라이브러리
- 다운로드:
  ```bash
  npm install react-hook-form
  ```

### 장점

- 최소 리렌더링으로 **성능 향상**
- 중/대형 프로젝트에서 **거의 필수 사용**

```js
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

---

## ⚙️ useEffect 개념

### 리액트 생명주기 (LifeCycle)

- 컴포넌트가 **Mount / Update / Unmount**되는 시점
  - Mount: 생성 시
  - Update: 상태/props 변경 시
  - Unmount: 제거 시

### useEffect 특징

- **함수형 컴포넌트 전용**
- **렌더링 이후 특정 작업 수행**
- 외부 API 호출, 값 변화 감지 등에 사용

### 비교

| 훅          | 역할                              |
| ----------- | --------------------------------- |
| `useState`  | 컴포넌트 상태 관리                |
| `useEffect` | 부수 효과 처리 (생명주기 제어 등) |
