# [Day65] 25.08.18 배운내용 정리

---

## TypeScript

### TypeScript 란?

> 자바스크립트에서 확장된 언어로, **정적 타입 시스템**을 제공한다.
>
> 자바스크립트는 모든 타입을 허용하기 때문에 자유롭지만 그만큼 예상치 못한 오류가 발생할 수 있다.
>
> 반면, 타입스크립트는 실행 전에 타입을 고정적으로 검사하기 때문에 안정성을 높여준다.

---

### TypeScript를 사용하는 이유

#### 1. 버그 예방

자바스크립트는 유연한 문법을 가진 동적 언어라서 런타임 중 의도치 않은 형변환이 일어나 오류를 유발할 수 있다.

```javascript
// js 예시
let num = 10;
num = 'hello'; // 에러 없이 동작 → 예기치 못한 오류 발생 가능
```

타입스크립트에서는 위와 같은 경우를 컴파일 단계에서 미리 잡아낼 수 있다.

#### 2. 타입 시스템의 장점

타입스크립트는 **타입 시스템**을 통해 코드 실행 이전에 타입 오류를 잡아준다.
브라우저에서 실행하려면 컴파일 과정을 거쳐야 하지만, 그만큼 안정적인 코드를 작성할 수 있다.

---

## 타입 시스템

### 정적 타입 시스템 (Static Typing)

- **대표 언어:** Java, C, C++ 등
- 코드가 실행되기 이전(컴파일 단계)에 모든 변수의 타입을 고정적으로 결정한다.
- **장점:**
  - 런타임 오류를 줄일 수 있음
  - 메모리 관리 및 성능 최적화에 유리

### 동적 타입 시스템 (Dynamic Typing)

- **대표 언어:** Python, JavaScript, Ruby 등
- 코드 실행 시점에 변수의 타입이 결정된다.
- **장점:**
  - 빠른 프로토타이핑에 적합
  - 다양한 타입의 데이터를 유연하게 처리 가능

---

## 기본 타입 정리

### 1. number (숫자 타입)

```ts
let age: number = 22; // 정수
let height: number = 183.4; // 실수
let mins: number = -3; // 음수
const infinity: number = Infinity;
const notANumber: number = NaN;
```

### 2. string (문자열 타입)

```ts
let name: string = '홍길동';
let address: string = '대한민국';
```

### 3. boolean (논리 타입)

```ts
let isNumber: boolean = true;
let isLogin: boolean = false;
```

---

## 네이밍 컨벤션

### `is` 접두사

- `isNum`, `isLogin` 처럼 **is로 시작하는 변수/함수**는 **boolean 타입**을 나타내는 경우가 많다.
- 함수의 경우 특정 조건을 만족하면 `true` / `false`를 반환하는 의미로 사용된다.

```ts
let isActive: boolean = true;

function isEven(num: number): boolean {
  return num % 2 === 0;
}
```

---

## 배열 (Array)

여러 개의 데이터를 담고 싶을 때 배열을 사용한다.
타입스크립트에서는 배열에 담을 원소의 타입을 `타입[]` 형식으로 지정한다.

```ts
let fruits: string[] = ['🍎', '🍉', '🥭'];
let numbers: number[] = [1, 2, 3, 4, 5];
```

- `string[]` : 문자열만 담을 수 있는 배열
- `number[]` : 숫자만 담을 수 있는 배열

---

## 객체 (Object)

객체는 데이터를 구조화해서 관리하고 여러 값을 하나의 단위로 묶어 사용하기에 적합하다.

### 객체 타입 선언 방법

```ts
// 직접 타입을 지정하는 방법
const user: { id: number; name: string } = {
  id: 1,
  name: 'Jone Doe',
};
```

### 타입 별칭 (alias)

반복되는 타입 선언을 줄이기 위해 `type` 키워드를 사용한다.

```ts
type Person = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
};

type Student = {
  id: number;
  name: string;
  grade: number;
  class_: number;
};
```

타입 별칭을 활용하면 여러 객체를 효율적으로 선언할 수 있다.

```ts
const user1: Person = { id: 1, name: 'Jone Doe' };
const user2: Person = { id: 2, name: 'Jane Doe' };

const item1: Product = { id: 101, title: '키보드', price: 123000 };

const student1: Student = { id: 1, name: '에리나', grade: 1, class_: 3 };
const student2: Student = { id: 2, name: '페이지', grade: 2, class_: 2 };
const student3: Student = { id: 3, name: '그레이스', grade: 3, class_: 3 };
```

---

## 배열 + 객체 활용 (Total)

배열과 객체를 함께 사용하면 여러 개의 구조화된 데이터를 다룰 수 있다.
예를 들어 **게시글 목록**을 타입으로 정의해 관리할 수 있다.

```ts
export type Board = {
  id: number; // 고유 번호
  title: string; // 제목
  content: string; // 내용
  readcount: number; // 조회수
};

const board1: Board = { id: 1, title: '1등이다', content: '출석인데?', readcount: 0 };
const board2: Board = { id: 2, title: '2등이다', content: '2출석인데?', readcount: 0 };
const board3: Board = { id: 3, title: '3등이다', content: '3출석인데?', readcount: 0 };

const boardList: Board[] = [board1, board2, board3];
```

이렇게 정의한 뒤 배열을 순회하며 원하는 형태로 출력할 수 있다.

```tsx
{
  boardList.map((item) => (
    <div key={item.id}>
      <h4>글 제목: {item.title}</h4>
      <p>내용: {item.content}</p>
      <p>조회수: {item.readcount}</p>
    </div>
  ));
}
```

---

## 튜플 (Tuple)

### 개념

- 배열과 비슷하지만, **길이와 각 요소의 타입이 고정된 자료형**
- 배열은 동일한 타입의 데이터만 여러 개 담을 수 있는 반면,  
  튜플은 **요소마다 서로 다른 타입을 순서대로 지정**할 수 있다.

### 선언 방법

```ts
// [문자열, 숫자, 숫자] 형식으로 고정
const student: [string, number, number] = ['eryna', 1, 3];

// 좌표 (위도, 경도)
const position: [number, number] = [37.5, 127.0];

// 응답 상태 (boolean, string)
type Response = [boolean, string];
const success: Response = [true, '성공'];
const error: Response = [false, '에러발생'];
```

### 활용 예시

- 좌표: [위도, 경도]
- 색상: [빨강, 초록, 파랑]
- eact useState : [값, set함수]

---

## 이넘 (Enum)

### 개념

- **열거형 타입**
- 관련된 값들을 하나의 이름으로 그룹화하여 관리할 수 있다

### 수자형 Enum

기본적으로 0부터 시작해 1씩 증가한다.

```ts
enum Role {
  User, // 0
  Admin = 10, // 10
}
```

### 문자열 Enum

값을 직접 문자열로 지정할 수 있다.

```ts
enum OrderStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
}

예시;
enum Avengers {
  Capt,
  IronMan,
  Thor,
}

console.log(Avengers.Capt); // 0
console.log(Avengers[0]); // "Capt"
```

### 왜 Enum을 쓸까?

문자열로 상태를 관리하면 오타가 나더라도 오류가 잡히지 않는다.

```ts
// string 변수로 상태 관리
let status: string = '배송중';
status = '배성중'; // 오타 → 오류에 안 잡힘
```

이럴 때 Enum을 사용하면 미리 정의된 값만 사용할 수 있기 때문에 안전하다.

```ts
enum DeliveryStatus {
  Ready = 'READY',
  Shipping = 'SHIPPING',
  Delivered = 'DELIVERED',
}

let status: DeliveryStatus = DeliveryStatus.Shipping;
// status = "배성중"; // ❌ 오류 발생
```
