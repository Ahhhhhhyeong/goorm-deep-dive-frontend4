# [Day18] 25.06.02 수업내용 정리

---

### 🔗 실습 파일 소개

- 동기 / 비동기 수업 코드 1
  - [js](./js/syncEx1.js) / [html](./html/syncEx1.html)
- 동기 / 비동기 수업 코드 2
  - [js](./js/syncEx2.js) / [html](./html/syncEx2.html)

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
