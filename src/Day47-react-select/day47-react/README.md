# [Day47] 25.07.15 배운내용 정리

---

## react-select 라이브러리

- 리액트에서 사용하는 고급 드롭다운 셀렉트 박스 라이브러리
- 기본 html select 태그보다는 훨씬 더 많은 기능을 가지고 있다
- 외부 라이브러리 다운
  `npm install react-select`

---

## react-select 라이브러리랑 react-hook-form 같이 사용

### react-hook-form

> 라이브러리는 기본적으로 select 태그는 html 폼과 연결해서 useForm()관리할 수있다
>
> 단! 외부 라이브러리로 받아온 UI들은 register가 연결을 못한다

- register()는 브라우저 기본 `<input>`,`<select>` 에서는 잘 동작함
- 직접 ref와 value를 제어를 못한다 그래서 register()로 연결이 불가능하다
- 외부 라이브러리들은 Controller라는 것을 이용해서 연결해야된다.

---

### useForm(control,controller)

#### 1. control 객체

- **역할**: 폼 상태를 추적하는 기계 (외부 컴포넌트를 연결할 준비)
- **사용법**: `const { control } = useForm()`

#### 2. Controller 컴포넌트

- **역할**: 외부 UI를 붙여주는 연결자 (어떤 UI를 보여줄지 설정)
- **핵심 props**:
  - `name`: 폼 데이터에서 사용할 필드명
  - `control`: useForm에서 가져온 control 객체
  - `render`: UI를 어떻게 그릴지 정하는 함수

#### 3. field 객체 (...field)

- **포함 내용**: `value`, `onChange`, `ref` 등을 한꺼번에 전달
- **역할**: 연결된 정보가 실제로 작동하게 만드는 사용자 인터페이스

#### 연결 흐름

```
useForm() -> control -> Controller -> {...field} -> 외부 UI 컴포넌트
```

---

### useFormContext 과 useForm(control,controller) 차이

| 구분               | useForm                         | useFormContext                               |
| ------------------ | ------------------------------- | -------------------------------------------- |
| **사용 범위**      | 단일 컴포넌트 내부              | 여러 컴포넌트 간 공유                        |
| **설정 방법**      | `const { control } = useForm()` | `<FormProvider>`로 감싸고 `useFormContext()` |
| **데이터 전달**    | props로 직접 전달               | Context API 통해 자동 공유                   |
| **컴포넌트 구조**  | 평면적 (한 곳에 집중)           | 계층적 (여러 컴포넌트로 분산)                |
| **Props Drilling** | 발생 가능                       | 해결됨                                       |
| **재사용성**       | 낮음 (해당 컴포넌트만)          | 높음 (하위 모든 컴포넌트)                    |
| **복잡도**         | 간단                            | 상대적으로 복잡                              |
| **성능**           | 가벼움                          | Context 리렌더링 고려 필요                   |

---

## react(), watch(), useWatch()

> react-hook-form에서 감시 함수들

### watch()

```jsx
const { watch } = useForm();
const watchedValue = watch('username'); // 특정 필드 감시
const allValues = watch(); // 모든 필드 감시
```

- **역할**: 폼 필드 값의 **실시간 변화를 감시**
- **특징**: 컴포넌트 전체가 리렌더링됨
- **사용**: 조건부 렌더링, 실시간 유효성 검사

---

### useWatch()

```jsx
import { useWatch } from 'react-hook-form';

const watchedValue = useWatch({
  control,
  name: 'username',
});
```

- **역할**: watch()와 동일하지만 **성능 최적화된 버전**
- **특징**: 해당 필드만 리렌더링 (부분 리렌더링)
- **사용**: 큰 폼에서 특정 필드만 감시할 때

---

## 비교표

| 함수           | 리렌더링      | 성능   | 사용 상황              |
| -------------- | ------------- | ------ | ---------------------- |
| **watch()**    | 전체 컴포넌트 | 무거움 | 간단한 폼, 전체 감시   |
| **useWatch()** | 부분적        | 가벼움 | 복잡한 폼, 특정 필드만 |

---

## 실제 사용 예시

```jsx
function MyForm() {
  const { control, watch, getValues } = useForm();

  // 실시간 감시 (무거움)
  const password = watch('password');

  // 성능 최적화 감시 (가벼움)
  const email = useWatch({ control, name: 'email' });

  return (
    <form>
      {/* 비밀번호 입력 시 실시간으로 강도 표시 */}
      {password && <PasswordStrength password={password} />}

      {/* 이메일 변경 시에만 도메인 체크 */}
      {email?.includes('@gmail.com') && <div>Gmail 사용자네요!</div>}
    </form>
  );
}
```
