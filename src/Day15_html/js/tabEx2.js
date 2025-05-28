// 반복문 실습

let fruits = ["🥭", "🍋", "🍎", "🍌"];

// for 문으로 나열
for (let start = 0; start <= 3; start = start + 1) {
  console.log(fruits[start]);
}

// for...in 문으로 나열
//일반 배열인 경우
for (let i in fruits) {
  console.log(i); // 공간의 번호 index 만 출력
  console.log(fruits[i]);
}

let bag = {
  책: "수학책",
  연필: 28,
  공책: "노트",
};
// 객체타입의 경우 key만 뽑아온다.
for (let pro in bag) {
  console.log("key:", pro);
  console.log(`value: ${bag[pro]}`);
}

let foods = {
  breakfast: "🥣",
  lunch: "🍲",
  dinner: "🍛",
};

// for...of 문
// 반복이 가능한 타입이 따로 있음
//- 배열, 문자열, set/map
//foods(=object객체)는 for...of에서 사용할 수 없음.
//에러!! Uncaught TypeError: foods is not iterable
// for (let tbl of foods) {
//   console.log(tbl);
// }
// Object.values => 객체의 모든 속성값을 꺼내서 배열로 만들어줌
for (let tbl of Object.values(foods)) {
  console.log(tbl);
}
// 일반 배열인 fruits는 가능하다!!
for (let fruit of fruits) {
  console.log(fruit);
}

//forEach 문
// 긴 반복문을 간단하게 줄여주는 화살표 함수(Arrow Function)
// - 코드를 더 짧게 쓰고, 간결한 콜백 처리를 가능하게 한다.
// - (값) => 처리
console.log("------------------------");
fruits.forEach((fruit) => {
  console.log(fruit);
});
