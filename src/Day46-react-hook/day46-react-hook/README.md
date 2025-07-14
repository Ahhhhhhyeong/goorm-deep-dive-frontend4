# [Day46] 25.07.14 배운 내용 정리

---

## 폼 관리 개념

### `UnControlled Components`

- React가 값을 직접 관리하지 않고 DOM이 값을 자체적으로 관리하는 방식
- 필요할 때만 `ref`통해서 값을 가져오는 방식
- 브라우저에게 맡기고 나중에 필요할 때만 가져다 쓰는 방식
- 코드가 간단하고 리랜더링이 줄어들어 성능상 유리함

---

### `Controlled Components`

- React에서 `input`, `textarea`, `select` 등의 값을 `state`로 직접 관리하는 방식
- 사용자가 값을 입력할 때마다 `onChange()`이벤트로 상태를 업데이트 하고 그 상태가 컴포넌트에 반영
- 상태관리, 유효성 검사, 동기화가 쉽고 일관됨

---

## React Hook Form

> 폼 상태 관리와 유효성 검사를 간단하게 처리 할 수 있도록 도와주는 라이브러리
>
> 불필요한 리렌더링을 줄이고 최소한의 코드로 폼을 구현할 수 있도록 설계됨

- 라이브러리 다운로드

```bash
npm install react-hook-form
```

---

### React Hook Form & React Form

| 구분        | React Hook Form                                    | React Forms                                 |
| ----------- | -------------------------------------------------- | ------------------------------------------- |
| 상태 관리   | Uncontrolled Components 기반: ref를 통한 DOM 접근  | Controlled Components: state를 통한 값 관리 |
| 리렌더링    | 최소한의 리렌더링 (입력 시 컴포넌트 리렌더링 안됨) | 입력할 때마다 리렌더링 발생                 |
| 성능        | 높음 (리렌더링 최소화)                             | 상대적으로 낮음                             |
| 코드량      | 적음 (내장 기능 많음)                              | 많음 (수동 구현 필요)                       |
| 유효성 검사 | 내장 validation 기능 제공                          | 직접 구현 필요                              |
| 에러 처리   | 자동 에러 상태 관리                                | 수동 에러 상태 관리                         |
| 설정        | 라이브러리 설치 필요                               | React 기본 기능만 사용                      |

---

#### 언제 어떤것을 사용?

**React Hook Form 추천:**

- 복잡한 폼 (많은 필드, 복잡한 유효성 검사)
- 성능이 중요한 경우
- 빠른 개발이 필요한 경우

**React Forms (기본 방식) 추천:**

- 간단한 폼
- 외부 라이브러리 사용을 피하고 싶은 경우
- 세밀한 제어가 필요한 특수한 경우

---

#### `useState`를 사용한 `Form` 상태관리를 진행하면?

- state가 너무 많아진다.
  - 여러가지 필드를 더 입력 받을 경우 더 많은 상태(state)가 나온다
- 예외처리를 각각 따로 작성을 해야한다
- 재사용이 어렵다
- 컴포넌트 리렌더링이 많아져서 성능이 떨어짐
- 유효성 검사를 직접 구현하면 코드가 장황해지고 유지보수도 어렵다
- 복잡한 구조에서는 버그 발생 확률이 커진다

[코드로 보기 click>](./src/components/first-study/useStateEx.jsx)

---

### useForm 훅에서 제공하는 주요 기능들

```js
const {
  register, // input을 폼에 등록
  handleSubmit, // 제출 핸들러
  watch, // 입력값 실시간 감지
  reset, // 폼 리셋
  setValue, // 특정 필드 값 설정
  getValues, // 현재 모든 값 가져오기
  trigger, // 수동으로 유효성 검사 실행
  setError, // 에러 수동 설정
  clearErrors, // 에러 제거
  formState: {
    errors, // 에러 객체
    isDirty, // 값이 변경되었는지 여부
    isValid, // 전체 유효성 통과 여부
    isSubmitting, // 제출 중 여부
    touchedFields, // 포커스 후 터치된 필드
    dirtyFields, // 변경된 필드
  },
  control, // Controller를 위한 객체 (Controlled input용)
} = useForm();
```

---

#### 검증하는 속성들 (Validation Rules)

- `required` - 필수 입력 여부

```js
// 방법 1: boolean
register('username', { required: true });

// 방법 2: 커스텀 에러 메시지
register('username', { required: '이름은 필수입니다' });
```

- `minLength` / `maxLength` - 최소/최대 길이 제한

```js
register('password', {
  minLength: { value: 8, message: '8자 이상 입력하세요' },
  maxLength: { value: 20, message: '20자 이하로 입력하세요' },
});
```

- `min` / `max` - 숫자형 필드의 최소/최대값

```js
register('password', {
  minLength: { value: 8, message: '8자 이상 입력하세요' },
  maxLength: { value: 20, message: '20자 이하로 입력하세요' },
});
```

- `pattern` - 정규표현식 패턴 매칭

```js
register('email', {
  pattern: {
    value: /^\S+@\S+$/i,
    message: '유효한 이메일을 입력하세요',
  },
});
```

- `setValueAs` - 값을 등록하기 전에 특정 형태로 변환하는 콜백

```js
{
  setValueAs: (v) => v.trim();
}
```

- `disabled` - 해당 필드를 비 활성화 `{disabled : true}`

```js
register('username', { disabled: true });
```

- `validate` - 커스텀 검증 함수

---

#### `useForm()` 동작 순서

```
🧠 useForm() 호출
│
├─🔧 내부 상태 공간 생성
│   ├─ values         → 각 input 값 저장
│   ├─ errors         → 유효성 검사 실패 정보
│   ├─ touchedFields  → 사용자가 건드린 필드 추적
│   └─ isValid, isDirty 등 폼 상태 추적
│
├─📌 register("name", 옵션)
│   └─ input 요소와 연결 (name, onChange, onBlur, ref 자동 세팅)
│
├─🖊 사용자 입력
│   └─ onChange 발생 → values 자동 업데이트
│
├─🚨 유효성 검사
│   ├─ onBlur 시 자동 실행
│   ├─ 또는 onSubmit 시 실행
│   └─ 실패하면 → errors[name]에 메시지 저장
│
├─📨 handleSubmit(onSubmit)
│   ├─ 유효성 검사 통과 → onSubmit(data) 실행
│   └─ 실패 → errors 상태로 유지
│
└─📦 formState.errors
    └─ 컴포넌트에 에러 메시지로 표시
```

#### UI 흐름

1. useForm() 호출
   ↓
2. `register("email")`
   ↓
3. `<input {...register("email")} />` ← 연결 완료
   ↓
4. 사용자 입력 (이메일 타이핑)
   ↓
5. 값 자동 추적 (`values.email = "입력된 값"`)
   ↓
6. `blur` 또는 `submit` 발생
   ↓
7. 유효성 검사
   - 실패 → `errors.email = { message: "이메일은 필수입니다" }`
   - 성공 → `onSubmit(data)` 실행

---

#### 사용 예시

```jsx
export default function TestUseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h3>예외 처리</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 아이디 입력 */}
        <lable>
          <span>아이디입력:</span>
          <input
            type='text'
            {...register('username', {
              required: '아이디를 입력하세요.',
              minLength: { value: 4, message: '최소 4글자' },
              maxLength: { value: 12, message: '최대 12글자' },
              pattern: { value: /^[a-zA-Z0-9]+$/, message: '영문/숫자만' },
            })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </lable>
      </form>
    </div>
  );
}
```

---
