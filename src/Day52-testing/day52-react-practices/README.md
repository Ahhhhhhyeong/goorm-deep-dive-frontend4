# React 커스텀 훅 실습 과제

- [ x ] 기본문제
- [ ] 보너스 문제

---

## ✅ 기본 문제: 입력값 관리 훅 만들기 (useInput)

### 📌 문제 설명

사용자가 `<input>` 태그에 값을 입력할 때, 그 값을 `useState`로 관리하는 경우가 많습니다.
하지만 매번 `value`, `onChange`, `reset`을 반복해서 쓰는 건 귀찮겠죠?

그래서! 이 반복되는 로직을 하나의 커스텀 훅으로 만들어 재사용할 수 있도록 합니다.

### 🧠 요구 기능 정리

- 초기값을 받아야 함 (예: `useInput('기본값')`)
- `value` 상태를 유지함
- 사용자가 입력할 때 `onChange`로 반응
- 입력값을 지울 수 있는 `reset()` 함수 제공

### 📋 예시 시나리오

1. 사용자가 이름을 입력한다 (`value` 상태가 바뀜)
2. 글자를 지우고 싶다 → `reset()` 버튼 클릭
3. 이 로직을 여러 input에 반복해서 재사용할 수 있어야 한다

### 💡 기대하는 형태

```jsx
const nameInput = useInput('')

<input value={nameInput.value} onChange={nameInput.onChange} />
<button onClick={nameInput.reset}>초기화</button>
```

이렇게 사용할 수 있게 만드는 게 목표예요!

---

## ⭐ 보너스 문제: useToggle 훅 만들기

### 📌 문제 설명

`true ↔ false` 값을 번갈아가며 전환하는 상태가 자주 필요합니다.

예를 들어:

- 버튼을 눌러 모달 열기/닫기
- 체크박스 상태 변경
- 다크모드 On/Off

이걸 위해 매번 `useState(true)` 하고 `setFlag(prev => !prev)` 하는 게 귀찮죠?

### 🧠 요구 기능 정리

- 초기값을 받아야 함 (기본값은 `false`)
- 상태를 `true / false`로 전환하는 `toggle()` 함수 제공
- 필요 시 강제로 `true` 또는 `false`로 만드는 함수도 제공 (`setTrue`, `setFalse`)

### 📋 예시 시나리오

1. 사용자가 버튼을 누를 때마다 상태가 `true → false → true ...`로 바뀜
2. 특정 조건에서는 강제로 `true`로 설정해야 함
3. 어떤 상황에서는 강제로 닫을 수 있어야 함

### 💡 기대하는 형태

```jsx
const [isOpen, { toggle, setTrue, setFalse }] = useToggle(false)

<button onClick={toggle}>열기/닫기</button>
<button onClick={setTrue}>강제로 열기</button>
<button onClick={setFalse}>강제로 닫기</button>
```

---

## 🎯 실습 가이드

| 항목            | 설명                                              |
| --------------- | ------------------------------------------------- |
| **실습 대상**   | React Hooks (`useState`, `useCallback`) 사용 연습 |
| **목적**        | 반복되는 상태 관리 코드를 추상화하는 연습         |
| **보너스 목표** | 상태와 함께 로직을 함께 패키징하는 감각 키우기    |

---

## 💻 구현 힌트

### useInput 힌트

```js
export function useInput(initialValue) {
  // 1. useState로 value 상태 관리
  // 2. onChange 핸들러 함수 작성
  // 3. reset 함수 작성
  // 4. 필요한 값들을 객체로 반환
}
```

### useToggle 힌트

```js
export function useToggle(initialValue = false) {
  // 1. useState로 boolean 상태 관리
  // 2. toggle, setTrue, setFalse 함수 작성
  // 3. 배열 형태로 [상태, 액션들] 반환
}
```
