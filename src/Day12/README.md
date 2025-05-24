# [Day12] 25.05.23 수업내용 정리

---

### 실습 내용
- [js 변수 활용 html](./javascriptEx1.html)
  - [js 변수 활용 css](./js/javascriptEx1.js)
- [js setTimeout() 활용 html](./alertBox.html)
  - [js setTimeout() 활용 js](./js/alertBox.js)
- [클론코딩 메인페이지](./test.html)
![클론코딩 메인페이지](./images/클론코딩1.png)
- [클론코딩 로그인페이지](./loginTest.html)
![클론코딩 로그인페이지](./images/클론코딩2.png)
---
# JavaScript 기초 

## 호이스팅(Hoisting)
> JS에서 코드를 실행하기 전에 변수, 함수 등을 스코프 최상단으로 끌어올리는 현상   

```javascript
console.log("num: ", num); // 변수 선언을 먼저 하지 않았는데도 결과를 출력함
var num = 1;
console.log("num: ", num); // num의 결과값이 나옴
```

자바스크립트는 **인터프리터(코드를 한 줄 씩 읽어내려가며 실행하는 프로그램) 언어**이기 때문에 코드를 항상 위에서 아래로 읽음.   
그래서 `var num`을 호출하기 전에 콘솔을 찍은 곳에서 에러를 출력해야 할 것 같지만 실제로는 `undefined`를 출력함.

### 호이스팅 동작은 무엇인가?
1. 변수가 선언된 줄 이전에 해당 범위에서 변수 값을 사용할 수 있는 경우 → **값 호이스팅**
2. 변수가 선언된 줄 이전에 해당 범위의 변수를 참조할 수 있지만 `ReferenceError`를 던지지 않고 값이 항상 `undefined`인 경우 → **선언 호이스팅**
3. 변수를 선언하면 변수가 선언된 줄 앞의 범위에서 동작이 변경됨
4. 선언의 부작용은 선언이 포함된 나머지 코드를 평가하기 전에 발생함

> 이런 경우가 발생할 때 "호이스팅"이라고 말한다.  
> 따라서 변수를 작성할 때는 최상단에 먼저 선언하고 실행하는 문장은 아래에 작성하는 것이 좋다.

---

## var 변수는 왜 문제가 되는가?
> `var`는 초기 자바스크립트 변수 선언 방식이며, ES6 이후에는 `let`, `const`가 도입되어 잘 쓰이지 않게 됨.

### 1. `var`는 한 번 선언된 변수를 다시 선언할 수 있다!
```js
var name = 'Doe John';
console.log(name); // 'Doe John'
var name = 'Doe Jane'; // 동일한 변수 재선언에도 에러 발생 안 함!
console.log(name); // 'Doe Jane'
```
> 변수는 한 파일당 한 번만 선언되어야 안전함!

### 2. 호이스팅
> 메모리에 변수를 미리 선언하여 `undefined`로 초기화해두기 때문에 선언 전에도 호출이 가능함

---

## var의 문제점을 보완한 변수 - `let`, `const`

> 변수를 선언하기 전에 호출할 시 에러가 발생

### 🧐 왜 에러가 나는가?
> **TDZ(Temporal Dead Zone)**, 즉 "일시적 사각지대" 때문이다.  
> 선언과 초기화 사이에 일시적으로 변수를 참조할 수 없는 구간이 생김.

### let과 const 비교

| 구분 | let | const |
| ---- | --- | ----- |
| 재할당 | 가능 | 불가능 |
| 재선언 | 불가능 | 불가능 |
| 초기화 필요 여부 | 선언 후 초기화 가능 | 반드시 선언 시 초기화 필요 |
| 블록 스코프 | O | O |

---

## 변수 이름 작성 규칙
- 문자, 숫자, `$`, `_` 사용 가능 (숫자로 시작할 수 없음)
- 대소문자 구분
- 예약어 사용 불가 (ex: `var`, `class`, `function` 등)
- 가독성을 위해 camelCase 사용 권장 (`userName`, `totalPrice` 등)

---

## 데이터 형태

### 숫자형(Number Type)
- 정수, 실수 모두 포함 (`1`, `3.14`, `-10` 등)

### 문자형(String Type)
- 따옴표로 감싼 문자 데이터 (`'hello'`, `"world"`)

### 논리형(Boolean Type)
- 참과 거짓만 표현 (`true`, `false`)

### undefined
- 변수는 선언했지만 값이 할당되지 않은 상태

### null
- 명시적으로 "값이 없음"을 표현

### 객체(Object)
- 키-값 쌍으로 이루어진 복합 데이터 타입
```js
let user = { name: 'John', age: 30 };
```

### 심볼(Symbol)
- 유일무이한 값을 생성할 때 사용

---

## typeof 연산자
> 변수의 데이터 타입을 확인할 수 있음

```js
let age = 30;
console.log(typeof age); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
```

> JS는 동적 타입 언어이기 때문에 `-`, `/` 같은 연산을 할 때 타입을 자동으로 변환함

---

## 비교 연산자
> 값을 비교하는 연산자, 결과는 항상 Boolean 타입

- `==` : 값이 같을 때 `true` (느슨한 비교)
- `===` : 값과 타입이 모두 같을 때 `true` (엄격한 비교)
- `!=`, `!==` : 같지 않을 때
- `>`, `<`, `>=`, `<=` : 대소 비교

```js
let num1 = 10;
let num2 = 20;
console.log("같은값?: ", num1 == num2); // false
```

---

## class name으로 요소 불러오기

`getElementsByClassName(클래스 명)`
- 동일한 클래스 이름을 가진 요소들을 모두 찾음
- 반환값은 `HTMLCollection` (유사 배열 객체)

```js
let items = document.getElementsByClassName("item");
console.log(items[0]); // 첫 번째 item 요소 출력
```

---

# CSS

## `visibility: hidden` 과 `display: none` 의 차이

| 속성 | `visibility: hidden` | `display: none` |
| ---- | -------------------- | ---------------- |
| 요소 존재 | 있음 | 없음 |
| 공간 존재 | 있음 | 없음 |
| 사용 예 | 일시적으로 숨기되 자리를 유지하고 싶을 때 | 완전히 제거하고 싶을 때 |

---
