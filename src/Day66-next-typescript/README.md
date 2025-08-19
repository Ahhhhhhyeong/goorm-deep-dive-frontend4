# [Day66] 25.08.19 배운내용 정리

---

# 📘 배열과 제네릭 (TypeScript)

## 1. 배열 선언 방법

TypeScript에서는 배열을 두 가지 방식으로 선언할 수 있다.

```ts
let numArr: number[] = [1, 2, 3]; // number 배열
let strArr: string[] = ['a', 'b', 'c']; // string 배열

let numArr2: Array<number> = [1, 2, 3]; // 제네릭을 사용한 number 배열
let strArr2: Array<string> = ['hello', 'world']; // 제네릭을 사용한 string 배열
```

- `number[]` 또는 `string[]` : 일반적인 배열 선언 방식
- `Array<number>` : 제네릭을 활용한 배열 선언 방식

> ⚡ 실제 개발자들은 **일반 배열 선언**(`number[]`)을 더 자주 사용하지만,
> **함수에서 배열을 다룰 때**는 제네릭(`Array<T>`)을 활용하는 경우가 많다.

---

## 2. 제네릭 활용 예시

제네릭을 사용하면 다양한 타입을 받아서 **유연한 함수**를 만들 수 있다.

```ts
// T 타입을 받아서 배열로 감싸 반환하는 함수
function wrapArray<T>(value: T): Array<T> {
  return [value];
}

wrapArray(10); // number[] => [10]
wrapArray('hi'); // string[] => ["hi"]
```

---

## 3. 여러 타입을 허용하는 배열 (Union Type)

```ts
let multiArr: (number | string)[] = [1, 'a'];
```

- `number | string` 타입을 허용하는 배열
- 숫자와 문자열을 동시에 담을 수 있음

---

## 4. 2차원 배열

```ts
let doubleArr: number[][] = [
  [1, 2, 3],
  [1, 2],
];

console.log(doubleArr[1][1]); // 출력: 2
```

- 2차원 배열은 **엑셀 표**처럼 행과 열을 기반으로 데이터를 저장
- 인덱스 `[행][열]` 방식으로 접근 가능

---

## 5. 예시: 보드판 만들기

```ts
type Cell = 'ㅁ' | 'ㅅ' | 'O';

let board: Cell[][] = Array(8) // 8행 생성
  .fill(null)
  .map(() => Array(8).fill(' ')); // 각 행에 8개의 빈칸 채우기
```

- `Cell` 타입을 정의하여 특정 문자열만 허용
- `Array(8).fill(null).map(...)` 패턴을 활용해 2차원 배열 초기화

---

# 📘 객체 타입 (Object & 객체 리터럴 타입)

## 1. 타입 별칭으로 객체 정의하기

```ts
type Student = {
  name: string;
  gender: string;
};

let s1: Student = { name: 'seohee', gender: '여성' };
```

- `type` 키워드를 사용해 **객체 타입**을 정의할 수 있다.
- `Student` 타입을 지정하면 `name`, `gender` **모두 반드시 포함**해야 한다.

---

## 2. 선택적 속성 (Optional Property)

```ts
type Person = {
  name: string;
  age?: number; // ? → 있어도 되고 없어도 됨
};

let p1: Person = { name: 'seohee' }; // age 속성은 없어도 OK
```

- `?`를 붙이면 **선택적 속성**이 된다.
- `age`는 `number | undefined` 타입을 가진다.

📌 **장점**

- 유연성이 높아짐 → API 응답, 데이터 모델링에 적합

📌 **단점**

- 실제 사용 시 `undefined` 체크 필요

---

## 3. `object` 타입

```ts
let stud: object = { name: 'Tom', grade: 4 };
console.log(stud);

// 속성 접근 불가 → 에러 발생
// console.log(stud.name);
```

- `object` 타입은 단순히 “객체”라는 정보만 제공
- 내부 속성(`name`, `grade`)에 접근할 수 없음

---

## 4. `object`의 한계

```ts
let obj: object;

obj = () => console.log('함수도 담을 수 있다? 진짜 다 담네;;;');
```

- `object`는 **너무 포괄적**이라 함수도 담을 수 있음
- 구조를 명확히 보장하지 못함

---

## 5. 객체 리터럴 타입의 장점

- `object` 타입은 모호해서 실무에서 잘 쓰이지 않음
- 대신 **객체 리터럴 타입**을 사용해 속성을 명확히 지정하는 것이 좋음

```ts
type Person = {
  name: string;
  age?: number;
};
```

---

# 📘 any와 unknown 타입

## 1. `any` 타입

```ts
let value: any;

value = 123; // number
value = 'hello'; // string
value = true; // boolean
value = [1, 2, 3]; // array
value = { foo: 'bar' }; // object
```

- **특징**

  - TypeScript에서 **자바스크립트처럼 자유롭게 동작**하도록 해주는 타입
  - "타입 검사 포기" → 컴파일러가 체크하지 않음
  - 런타임 오류 가능성이 높아진다.

- **실무 사용 사례**

  - 외부 라이브러리(특히 오래된 JS 라이브러리)에 타입 정의가 없을 때
  - 급하게 코드를 작성할 때 임시 방편
  - JS → TS로 마이그레이션 중일 때

> ⚠️ 가급적 `any` 대신 **`unknown`** 또는 **구체적인 타입**을 사용하는 것이 권장됨

---

## 2. `unknown` 타입

```ts
let value2: unknown;

value2 = 123;
console.log(value2);

value2 = 'hello';
console.log(value2);

// 직접 사용 불가 → 에러 발생
// console.log(value2.toUpperCase());

// 타입 체크 후 사용 가능
if (typeof value2 === 'string') {
  console.log(value2.toUpperCase());
}
```

- **특징**

  - `any`처럼 모든 타입을 받을 수 있음
  - 하지만 바로 사용할 수 없고, **타입 검사 후 사용해야 함**
  - 안전성이 `any`보다 높음

---

## 3. 객체와 `unknown`

```ts
let val: unknown = { id: 1, name: 'eryna' };

// 안전하게 검사 후 속성 사용
if (typeof val === 'object' && val !== null && 'name' in val) {
  console.log('object 맞다!');
}

// 타입 단언(as)을 활용한 접근
if ('name' in (val as object)) {
  console.log((val as { name: string }).name);
}
```

- `typeof` : 타입을 검사 (`typeof 변수명`)
- `in` 연산자 : 특정 속성이 객체에 존재하는지 확인
- `as` : 타입 단언(Type Assertion) → 강제로 타입을 지정

---

## 4. `keyof` 연산자

```ts
type User = { id: number; name: string };

// 객체의 key 값만 추출 → 유니온 타입으로 생성
type UserKeys = keyof User;
// 결과: "id" | "name"
```

- `keyof` : 객체 타입의 키들을 문자열 리터럴 유니온 타입으로 추출
- 활용 예시:

  - 폼 데이터 검증 (사용자가 입력한 key가 올바른지 체크)
  - 안전한 타입 기반의 접근 가능

---

## 4️⃣ 함수

### 기본 함수

```ts
function add(a: number, b: number): number {
  return a + b;
}

function greet(name?: string): string {
  return `Hello! ${name ?? 'Guest'}`;
}

const result = add(10, 5);
const helloResult = greet('Shami');
```

- `:number` → 반환 타입 명시
- `name?: string` → 선택적 매개변수 (없으면 `undefined`)
- `??` 연산자 : null 병합 연산자 → `null` 또는 `undefined`일 때 대체값 사용

---

### 이벤트 핸들러 함수

```tsx
function clickBtn() {
  alert('클릭했따');
}

<button onClick={clickBtn}>이벤트 실행~</button>;
```

- React에서 함수는 **이벤트 핸들러**로도 자주 활용
- JSX에서 `onClick={함수명}` 형태로 연결

---

### 상태와 함수

```tsx
const [msg, setMsg] = useState<string>('아직 클릭되지 않음');
const [num, setNum] = useState<number>(0);

function increment(): void {
  setMsg('버튼이 클릭됨!');
  setNum(num + 1);
}
```

- 함수는 **상태(state) 변경** 로직으로 많이 쓰임
- `useState`와 함께 사용해 **UI와 데이터 동기화**

---
