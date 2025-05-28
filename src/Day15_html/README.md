# [Day15] 25.05.28 배운 내용 정리

---

### 🔗 실습 파일 설명

- [css 선택자를 사용하여 탭 컨트롤](./js/tabEx1.js)
- [js 반복문 실습](./js/tabEx2.js)
- [js 반복문 문제](./js/loopEx1.js)

- [1번 실습에서 반복문을 사용하여 탭 컨트롤](./js/tabEx3.js)
  - js반복문 실습 이후 css 선택자를 사용하여 반복문 적용!!

---

# css 선택자(querySelector, querySelectorAll)

## querySelector()

> css 선택자 문법을 이용해서 HTML문서 내 첫번째 요소를 반환한다.  
> 일치하는 요소가 없으면 `null`을 반환한다.

### 예제

```js
// 클래스를 만족하는 첫 번째 요소 검색
var el = document.querySelector(".myclass");
// 좀 더 복잡한 선택자
/* 클래스가 "user-panel main"인 <div>(<div class="user-panel main">) 안의, 
이름이 "login"인 <input> 중 첫 번째 요소 */
var el = document.querySelector("div.user-panel.main input[name=login]");
```

## querySelectorAll

> css 선택자처럼 HTML요소를 한 번에 여러개 선택할 수 있는 기능이다.  
> 선택된 요소들은 배열처럼 생긴 [NodeList](https://developer.mozilla.org/ko/docs/Web/API/NodeList)라는 형태로 반환된다.

### 예제

```js
// 모든 p 엘리먼트 요소들 호출
var matches = document.querySelectorAll("p");
// class 값으로 모든 엘리먼트 요소들 호출
var matches = document.querySelectorAll(".highlighted");
```

---

# 🔄 반복문

> 반복문은 한 동작을 여러 번 반복하는 기능이다.

> ### ❓왜 사용을 하는가?
>
> > 대량의 데이터를 처리하거나, 동일한 작업을 반복할 때 유용하다.  
> > 예를 들어, 배열의 각 요소를 출력하거나, 특정 조건이 만족될 때까지 작업을 반복한다.

## 반복문의 종류

- 반복문 예제 코드에 쓰이는 변수들 소개

```js
let fruits = ["🥭", "🍋", "🍎", "🍌"]; //일반 배열

// Ojbect 객체
let foods = {
  breakfast: "🥣",
  lunch: "🍲",
  dinner: "🍛",
};
```

### for 문

> for 반복문은 어떤 특정한 조건이 거짓으로 판별될 때까지 반복한다.
>
> JavaScript의 반복문은 다른 언어들의 반복문과 비슷하다

- 기본 `for`문 사용

```js
for ([초기값]; [조건문]; [증감]) {}
```

### for...in 문

> 객체의 열거 속성을 통해 지정된 변수를 반복한다.
> 인덱스만 출력한다.

```js
for (let number in fruits) {
  console.log(number); //공간에 번호만 가져온다.
  console.log(fruits[number]);
}
```

### for...of 문

> `for...of`는 **반복 가능한(iterable)** 객체에만 사용할 수 있다.
>
> 일반 객체(`object`)에는 직접 사용할 수 없지만, `Object.values()`를 사용하면 반복 가능하게 변환할 수 있다.

```js
// 오류 발생: foods는 iterable이 아님
for (let tbl of foods) {
  console.log(tbl);
}

// Object.values()로 값을 배열로 변환
for (let tbl of Object.values(foods)) {
  console.log(tbl);
}
```

> fruits처럼 배열이면 바로 for...of 사용 가능

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### forEach 문

> forEach()는 배열의 각 요소에 대해 콜백 함수를 실행하는 반복문이다.
>
> Arrow Function(화살표 함수)와 함께 자주 사용되며, 반복 코드를 간결하게 만든다.

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

---

## 📚 jQuery (제이쿼리)

> JavaScript를 **더 간단하고 간결하게 사용할 수 있도록 도와주는 라이브러리**

### 사용 전 준비

- jQuery는 외부에서 라이브러리 파일을 **다운로드(CDN 등)** 받아야 사용 가능
- CDN: 가까운 서버에서 파일을 가져오는 방식

```html
<!-- jQuery CDN 링크 -->
<script
  src="https://code.jquery.com/jquery-3.7.1.min.js"
  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
  crossorigin="anonymous"
></script>
```

### jQuery 기본 사용법

```html
<h1>제이쿼리 환영합니다!😍</h1>
<p id="first">첫번째 p태그!</p>

<section class="box">
  <p>색션 태그!</p>
  <input type="text" id="box__input" placeholder="아무거나입력하세요!" />
</section>
```

```js
// jQuery의 특징
// - 시작할 때 무조건 $ 사용
// - CSS 선택자 사용 가능

// h1 태그 찾기
console.log($("h1"));

// id 선택자
// JS 방식
document.getElementById("first");

// jQuery 방식
let findId = $("#first");
console.log(`아이디값: ${findId}`);

// class 선택자
// JS 방식
document.getElementsByClassName("box");

// jQuery 방식
let findClass = $(".box");
console.log(`class: ${findClass}`);
```

### Input 값 다루기

```js
// input의 현재 값 가져오기
let value = $("#box__input").val();
console.log(`입력값 가져오기 : ${value}`);

// input에 새로운 값 넣기
$("#box__input").val("안뇽");
```
