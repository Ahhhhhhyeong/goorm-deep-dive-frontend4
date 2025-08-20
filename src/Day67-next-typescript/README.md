# [Day67] 25.08.20 배운 내용 정리

---

# 유니온 타입 (Union Type)

TypeScript에서 **유니온 타입**은 값이 여러 타입 중 하나를 가질 수 있도록 정의하는 방법입니다.
`|` 파이프 연산자를 사용하여 작성합니다.

---

## 특징

- `|` 파이프 연산자로 여러 타입을 결합
- 서로 다른 두 개 이상의 타입을 묶어서 선택지를 제공
- 주로 **API 응답**, **함수 매개변수** 등 다양한 타입을 받을 수 있는 상황에서 활용

---

## 기본 예제

```ts
let value: string | number;

value = 'hello'; // ✅ 문자열 가능
value = 1234; // ✅ 숫자도 가능
```

---

## 리터럴 타입과 함께 사용하기

유니온 타입은 **리터럴 타입**과 함께 쓰이면 특정 값만 허용할 수 있습니다.

```ts
type Status = 'idle' | 'loading' | 'success' | 'error';

function statusBadge({ status }: { status: Status }) {
  if (status === 'loading') return <p>로딩중...</p>;
}
```

이 경우, `status`는 `'idle'`, `'loading'`, `'success'`, `'error'` 중 하나만 가질 수 있습니다.

---

# 인터페이스 (Interface)

**인터페이스**는 객체의 **구조(Shape)** 를 정의하는 문법입니다.
어떤 속성과 타입을 가져야 하는지를 강제하여 코드의 안정성과 가독성을 높여줍니다.

---

## 기본 문법

```ts
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // 선택적 프로퍼티
}

const user1: User = {
  id: 1,
  name: 'Alice',
};

const user2: User = {
  id: 2,
  name: 'Bob',
  isAdmin: true,
};
```

- `isAdmin?` → **선택적(optional) 프로퍼티**
- 인터페이스를 적용한 객체는 정의된 속성과 타입을 반드시 만족해야 함

---

## 함수 타입 정의

인터페이스는 함수의 **매개변수와 반환 타입**도 정의할 수 있습니다.

```ts
interface Login {
  (username: string, password: string): boolean;
}

const login: Login = (id, pw) => {
  return id === 'admin' && pw === '1234';
};
```

---

## 클래스와 인터페이스

클래스에서 인터페이스를 `implements` 키워드로 구현할 수 있습니다.

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('멍멍!');
  }
}
```

---

## 확장 (Extends)

인터페이스는 다른 인터페이스를 **상속(extends)** 할 수 있습니다.

```ts
interface Person {
  name: string;
}

interface Developer extends Person {
  skills: string[];
}

const dev: Developer = {
  name: 'Kim',
  skills: ['TypeScript', 'React'],
};
```

---

## 주요 특징 요약

- 객체, 함수, 클래스의 **구조 정의** 가능
- `?`를 통해 **선택적 프로퍼티** 정의
- 여러 개의 인터페이스를 **상속(extends)** 가능
- 클래스에서 **implements**로 인터페이스 강제 구현
