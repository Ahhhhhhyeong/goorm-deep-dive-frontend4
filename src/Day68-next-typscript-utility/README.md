# [Day68] 25.08.21 배운 내용 정리

---

# TypeScript 유틸리티 타입 정리

## 📌 예제 코드

```tsx
export default function Home() {
  const todo: TodoPreview = {
    title: '집에 가고싶다',
    completed: false,
  };

  return (
    <div>
      <h1>유틸리티 예제</h1>

      <TodoPreviewCard item={todo} />

      <UserCard id={1} name={'eryna'} />
      <UserCard id={2} name={'Bob'} />
      {/* <UserCard id={3} name={"grace"} email={"test@gmail.com"} /> */}
    </div>
  );
}
```

---

## 🛠️ 유틸리티 타입이란?

- **이미 정의된 타입을 변환할 때 유용하게 쓰이는 타입 문법**
- 꼭 사용하지 않아도 인터페이스나 제네릭(`<T, K, V, E>`)으로 구현 가능하지만,
  유틸리티 타입을 사용하면 **훨씬 간결하게 타입 정의**가 가능하다.

---

# 🔥 자주 사용되는 유틸리티 타입

## 1. `Pick<T, K>`

- 특정 타입 `T`에서 원하는 속성(`K`)만 뽑아 **새로운 타입**을 만든다.
- TypeScript 기본 제공 (추가 설치 필요 없음).
- **사용 예시**
  - API 응답 모델 `User`에서 UI 컴포넌트에 필요한 속성만 props로 넘기고 싶을 때.
  - 불필요한 데이터 제외 → **안전성 확보 & 유지보수 용이**.

### 🎯 `Pick<T, K>` 예제

```ts
export type User = {
  id: number;
  name: string;
  email: string;
  // 주소, 생일, 결혼기념일, 취미, 특기, 비밀번호 등

  images: string; // 프로필 이미지
  // 예: 프로필 이미지만 변경하는 경우, 비밀번호와 무관하게 프로필 사진만 업데이트 가능
};
// User 타입에서 id, name 속성만 뽑아온 새로운 타입
export type UserCardProps = Pick<User, 'id' | 'name'>;
```

#### ✅ 활용 포인트

- `User` 타입 전체를 가져오기에는 불필요한 데이터가 많을 때,
  **일부 속성만 추출해 새로운 타입**으로 재사용 가능하다.
- 예시:

  - `UserCard` 컴포넌트는 `id`, `name`만 필요하므로 전체 `User`를 props로 넘길 필요가 없음.
  - 가볍게 **`Pick<User, 'id' | 'name'>`** 으로 타입을 정의할 수 있다.

---

### 📝 인터페이스 기반 예시 (참고)

```ts
interface User {
  id: string;
  name: string;
  email?: string; // 선택적 속성
}

// Pick을 활용한 확장
export interface UserPreview extends Pick<User, 'id' | 'name'> {}
```

✅ `interface`에서도 동일하게 `Pick`을 활용할 수 있으며,
특정 속성만 선택해 `UserPreview` 같은 경량 타입을 만들 수 있다.

---

## 2. `Omit<T, K>`

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// description 속성을 제외한 새로운 타입
export type TodoPreview = Omit<Todo, 'description'>;
```

✅ 특징

- 특정 타입에서 **일부 속성을 제외**한 새로운 타입 생성.
- `Pick`과 반대되는 개념.

✅ 활용 예시

- 보안상 노출하면 안 되는 정보(`password`, `token`)를 제거할 때
- UI에 꼭 필요하지 않은 속성을 제외하고 props로 넘길 때

---

### 3. `Partial<T>`

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}

const person1: Person = {
  name: 'shami',
  age: 22,
  address: '부산시 북구',
};

// Partial 적용 → 모든 속성이 선택적(Optional)으로 바뀐다
const person2: Partial<Person> = { name: 'Bob' };
const person3: Partial<Person> = { address: '경기도 화성시 동탄' };
const person4: Partial<Person> = {}; // 모두 생략 가능
```

✅ 특징

- 객체 타입의 \*\*모든 속성을 선택적(Optional)\*\*으로 변경한다.
- 원래는 필수 값이어도 `?`가 붙은 것처럼 다 생략 가능하다.

✅ 실무 활용 (함수 예시)

```ts
// DB에 있는 기존 사용자 정보와 업데이트 내용을 병합
function updatePerson(id: number, updates: Partial<Person>) {
  const ex = { id, name: 'seohee', address: '서울시 종로구' };
  const updatedPerson = { ...ex, ...updates };
  return updatedPerson;
}

const person5 = updatePerson(1, { address: '서울시 강남구 삼성동' });
// ✅ address만 업데이트하고 나머지는 기존 값 유지
```

→ 특정 필드만 업데이트할 수 있도록 유연하게 설계할 때 매우 유용하다.

---

### 4. `Required<T>`

```ts
interface UserData {
  id?: number;
  name?: string;
}

// 원래는 선택 속성이라 일부만 넣어도 된다
const u1: UserData = {};
const u2: UserData = { id: 2 };
const u3: UserData = { name: 'minsu' };

// Required 적용 → 모든 속성이 필수로 변경
type FullUserData = Required<UserData>;
```

✅ 특징

- `Partial`과 반대 개념.
- 선택적(`?`) 속성이더라도 모두 **필수**로 만들어준다.

✅ 활용 예시

- 서버에서 데이터를 가져온 뒤에는 모든 필드가 반드시 채워져 있어야 하는 경우
- API 응답을 다 받았다는 보장이 필요할 때

---

### 5. `Record<K, T>`

- 객체 타입을 **Key-Value 형태**로 정의할 때 사용.
- (지난 수업에서 다룸)

---
