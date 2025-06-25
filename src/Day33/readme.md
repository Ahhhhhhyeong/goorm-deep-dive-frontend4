# [Day33] 25.06.25 배운 내용 정리

---

## 🔹 useReducer

### 💡 개념

- 상태(state) 업데이트 로직이 **복잡하거나** 상태값이 **많고 서로 연관**이 있을 때 사용하는 리액트 훅
- `useState`보다 구조화된 상태 관리에 적합

### 📌 주로 사용하는 상황

- 로그인, 회원가입 폼 등 **여러 필드 입력값** 관리
- **장바구니**, **할 일 목록**, **게임 로직** 등 복합적인 상태 변화

---

## 🔹 useState vs useReducer

### ✅ useState 예제

```jsx
import React, { useState } from 'react';

export default function UseStateEx() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input type='text' placeholder='이름을 입력해주세요' onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder='이메일을 입력해주세요' onChange={(e) => setEmail(e.target.value)} />
      <input type='text' placeholder='나이를 입력해주세요' onChange={(e) => setAge(e.target.value)} />
    </div>
  );
}
```

- 각 필드마다 useState와 onChange 필요
- 필드 수가 많아질수록 복잡도 증가

---

### ✅ useReducer 예제

```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.filed]: action.value,
  };
}

export default function UseReducerEx() {
  const initState = {
    name: '',
    age: '',
    email: '',
  };

  const [form, dispatch] = useReducer(reducer, initState);

  const handleChange = (e) => {
    dispatch({
      filed: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <input type='text' name='name' placeholder='이름을 입력해주세요' onChange={handleChange} />
      <input type='text' name='email' placeholder='이메일을 입력해주세요' onChange={handleChange} />
      <input type='text' name='age' placeholder='나이를 입력해주세요' onChange={handleChange} />
    </div>
  );
}
```

| 항목          | 설명                                        |
| ------------- | ------------------------------------------- |
| **reducer**   | 상태 업데이트 로직을 담는 **순수 함수**     |
| **initState** | 초기 상태값 설정                            |
| **dispatch**  | 상태 업데이트를 **요청**하는 함수           |
| **...state**  | 기존 상태 복사, 안 하면 값이 **덮어쓰기됨** |

---

#### 🔸 언제 사용하면 좋을까?

- `useState`: 단순한 상태 (ex. `true/false`, 숫자 카운터 등)
- `useReducer`: 복잡한 상태나 여러 필드, 상태 간 연관이 있는 경우

---

## 🔹 useReducer 실습 예제

1. [카운터 예제 (+, -, 초기화)](./react33-project/src/components/Counter.jsx)
2. [토글 예제](./react33-project/src/components/ToggleEx.jsx)

   - 주로 모달 열기/닫기, 다크모드, 사이드바 토글 등에 사용됨
   - 단순 반전만 시키는 `boolean`타입 데이터라 따로 액션 객체가 없어도 사용 가능

   ```jsx
   const toggleInit = false;
   function toggleReducer(state) {
     return !state;
   }
   export default function ToggleEx() {
     const [on, dispatch] = useReducer(toggleReducer, toggleInit);
     return <button onClick={dispatch}>{on ? '켜짐' : '꺼짐'}</button>;
   }
   ```

3. [장바구니 아이템 추가/삭제](./react33-project/src/components/Cart.jsx)

   - `dispatch`를 사용할 때, action 구조를 추가할 수 있음(`type`,`item`)

   ```jsx
   function cartReducer(state, action) {
     switch (action.type) {
       case 'ADD':
         return [...state, action.item];
       case 'REMOVE':
         return state.filter((_, index) => index !== action.index);
     }
   }
   //생략
   <button
     onClick={() =>
       dispatch({
         type: 'ADD',
         item: '안경',
       })
     }>
     안경추가
   </button>;
   //생략
   ```

---

## 🔹 Pagination (페이지네이션)

### 💡 개념

- 데이터를 페이지로 나누어 성능과 사용자 경험 향상
- 현재 페이지, 총 페이지 수, 페이지 번호, 이전/다음 버튼 등 제공

---

### 📌 필요한 요소

- 총 페이지 수
  → 전체 데이터 수 / 한 페이지에 보여줄 개수
- 현재 페이지 번호
- 현재 페이지의 데이터 인덱스 범위
  → startIndex, endIndex

---

### 📌 구현 방법 2가지

1. API 호출 방식

   - startIndex와 endIndex를 API에 전달
   - 데이터가 많을 때 효과적 (로딩 최적화)
   - 실무에서 주로 사용

2. 로컬 slice 방식
   - 전체 데이터를 받아온 뒤 slice로 분할
   - 데이터가 적거나 이미 로컬에 있는 경우 유용

---
