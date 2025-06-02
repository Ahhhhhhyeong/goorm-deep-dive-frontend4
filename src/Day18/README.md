# [Day18] 25.06.02 수업내용 정리

---

### 🔗 실습 파일 소개

- 동기 / 비동기 비교(`setTimeout()` 사용)
  - [js](./js/syncEx1.js) / [html](./html/syncEx1.html)
- `setInterval()`, `clearInterval()` 사용
  - [js](./js/syncEx2.js) / [html](./html/syncEx2.html)
- `localstorage`
  - [js](./js/localstroage1.js) / [html](./html/localstorage1.html)
- `localstorage` 객체 비교
  - [js](./js/localstorage2.js) / [html](./html/localstorage2.html)

---

# 동기 / 비동기

---

## 동기식 처리

> 순차적으로 하나 씩 처리

```js
console.log('1. 시작'); //1번
alert('2. 이 알림을 닫아야 다음 코드가 실행된다!'); //2번
console.log('3. 완료!'); //3번
```

**작동 순서(동기식)**

1. 콘솔에 1번이 찍힌다.
2. `alert`창이 뜬다.
3. `alert`창을 닫으면 3번이 시작된다.

---

## 비동기

- 시간이 오래 걸리는 작업을 따로 처리한 뒤 결과가 준비 되면 나중에 다시 이어서 처리하는 방식
- 동시에 여러 작업을 수행할 수 있게 한다.
- 사용 예: 파일읽기,네트워크 요청,타이머 등

---

### setTimeout()

> callback 함수

- 나중에 동작을 한다.

#### 구문

```js
setTimeout(funtion(){ 실행할 코드 }, 기다릴 시간);
```

- 기다리는 시간은 ms 단위로 적용된다.
  - 1초 -> 1000ms
  - 0.5초 -> 500ms

#### setTimeout() 사용 예제

```js
console.log('1. 🍔 주문'); //1번
//3초 후 음식을 준다!
setTimeout(() => {
  console.log('🍔 나왔습니다~~~'); //2번
}, 3000);

console.log('3. 다른 사람 주문 받기!'); //3번
```

**작동 순서**

1. 1번이 콘솔에 출력된다.
2. 3번이 콘솔에 출력된다.
3. 3초 후에 2번이 콘솔에 출력된다.

---

### setInterval()

#### 구문

```js
setInterval(function(){실행할 코드~~}, 기다릴 시간);
```

- 지정시간마다 반복 실행
- 타이머 아이디를 생성
- 콜백함수를 반복적으로 실행하도록 예약함

#### setInterval() 사용 예제

```js
const timer = setInterval(() => {
  console.log('🔄');
}, 1000);

console.log('timer:', timer);
```

**작동 순서**

1. 콘솔에서 `timer`를 부름
2. `timer`의 `setInterval`를 **1초**마다 진행

### clearInterval()

> 반복을 멈추는 함수

```js
setTimeout(() => {
  clearInterval(timer);
  console.log('❌50초 지났다! 멈추기!');
}, 50000);
```

**작동 순서**

1. 50초가 지난 뒤에 `setTimeout()`실행
2. 앞서 설정한 `timer`가 1초마다 진행되는 것을 멈춤

---

# Date()

> js에서 현재 날짜와 시간을 제공해주는 객체 (내장 객체)
>
> 내장 객체들은 기본적으로 첫 글자는 대문자로 작성되어있다!

### 추출 가능 값

- 연도 : now.getFullYear()
- 월 : now.getMonth()
  - 0~11 로 출력.
  - 내부적으로 달을 배열로 관리함.
  - +1을 해주어야함
- 일 : now.getDate()
- 시 : now.getHours()
- 분 : now.getMinutes()
- 초 : now.getSeconds()
- 문자 변환 => toLocaleTimeString();
  - 기본값은 브라우저 설정에 따라 자동으로 결정되며, 옵션을 설정하면 24시간제 등을 조정할 수 있다.

#### 날짜와 관련된 라이브러리

> dayjs, date-fns, moment.js 등

#### 사용 예제

> 실시간으로 시간 출력

```js
const clock = document.querySelector('#clock');
setInterval(() => {
  const now = new Date();
  let newTime =
    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  clock.textContent = newTime;
}, 1000);
```

---

# 로컬 스토리지(localStorage)

> 사용자의 브라우저 안에 데이터를 영구적으로 저장할 수 있는 공간
>
> key - value 구조로 데이터 저장
>
> 브라우저를 꺼도 유지되며, 동기적 처리를 한다.

단점!!

- 저장용량이 작다..
- `string`타입으로만 저장된다.

특이사항!

- 로컬 스토리지에서 key는 중복되면 안된다.

#### 구문

```js
localStorage.setItem(key, value);
```

### 사용 예제

#### 1. 숫자 저장

```js
function intEx() {
  //1
  localStorage.setItem('integer', 1);
}

function intLoad() {
  //2
  const intLoad = localStorage.getItem('integer');
  console.log(`정수: ${intLoad}`);
  console.log(`타입: ${typeof intLoad}`);
}
```

1. `integer`이란 키를 만들어서 1을 저장한다.
2. 로컬스토리지안에 `integer` 키의 값을 호출하여 값과 타입을 출력한다.

- 값은 `1` 이라 뜨고, 타입은 `string`으로 뜬다.

#### 2. 배열 저장

```js
function arrayEx() {
  // 1
  localStorage.setItem('arrayEx', "['🍎', '🍇', '🍊']");
}

function arrayLoad() {
  // 2
  const arrLoad = localStorage.getItem('arrayEx');
  console.log(`배열: ${arrLoad}`);
  console.log(`타입: ${typeof arrLoad}`);
}
```

1. `arrayEx`라는 키를 만들어서 내부에 과일 이모지 배열을 넣는다.
2. `arrayEx`를 호출하여 값과 타입을 출력한다.

- 값은 `"['🍎', '🍇', '🍊']"` / 타입은 `string` 이라 뜬다.

> string 형이 아닌 입력값(배열)로 출력을 원할때?

---

# JSON(JavaScript Object Notation) 개념

- 문자열로 저장된 JSON데이터를 다시 js객체로 변환하는 함수
- js obejct형식을 문자열로 변경
- python, Java, C# 통신이 가능하다.
- API 요청/응답, DB 저장 등에 사용한다.
- `Key:Value` 이용해서 데이터를 저장하는 구조!
- 문자열 형태로 구조화 하여 저장하거나 전송한다.

### 사용 예제

#### 1. `arrayEx`을 배열로 호출

```js
function arrayEx() {
  //1
  localStorage.setItem('arrayEx', JSON.stringify("['🍎', '🍇', '🍊']"));
}

function arrayLoad() {
  //2
  const arrLoad = localStorage.getItem('arrayEx');
  const getFruits = Array(JSON.parse(arrLoad));
  console.log(`변경된 타입: ${typeof Array(getFruits)}`);
  console.log('배열형태로: ', getFruits[0]);
}
```

1. 배열을 저장할 때, `JSON`타입으로 저장을 하기 위해 `JSON.stringify()`를 사용한다.
2. `arrayEx`를 호출 후, 타입을 JSON으로 변경해주어야 한다.
   2-1. `JSON.parse(arrLoad)` 로 JSON 형으로 수정
   2-2. 배열 타입으로 명시하기위해 `Array(JSON.parse(arrLoad))`

- 값은 `['🍎', '🍇', '🍊']` / 타입은 `object` 이라 뜬다.
