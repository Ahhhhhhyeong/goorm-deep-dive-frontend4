//제이쿼리 시작 = $()
//- $(css selector).동작함수()
// $() => jquery 객체가 반환됨

// 바디의 배경색 핑크로
$("body").css("background", "pink");
// css에서 사용하던 모든 명령어?들을 다 사용가능

//버튼들을 모두 찾아서 배경색 변경
//$(".btn").css("background-color", "white").css("font-size", "25px"); //이렇게 연결을 하는건 제이쿼리 체이닝이라 함
//css() 계속 쓰기 불편할 때가 있다.
// css() 안에 객체(Object)형태를 넣어 사용할 수 있다.
$(".btn").css({
  background: "green",
  color: "white",
  border: "1px solid gray",
});

//p태그가져오기
let p = $("p").html();
console.log(p);
// innerHTML과 같음
// p 태그 안의 내용을 덮어쓰기를 함
// $("p").html("<div class='wrap'>나 제이쿼리!</div>");

//선택 된 요소 중에 첫번째 요소의 텍스트만 가져옴
//textContent 랑 유사
let p2 = $("p").text("888");
// console.log(p2);

$("img").width(180);
$("img").height(180);

// 셀렉트 태그에서 option 선택
// 옵션의 과일을 하나 가져오기
console.log("----------------select 옵션 값 출력----------------");
let select = $("select option");
// console.log(select.first().text()); //첫번째 요소 값을 가져옴

//안에 요소를 순서대로 가져올 때
// eq(순서): jQuery 객체로 반환. 체이닝이 가능함
// get(순서) : js로 가져온다. = getElementById()
console.log(select.eq(0).text());
console.log(select.eq(1).text());
console.log(select.eq(2).text());
console.log(select.eq(3).text());
console.log("현재 셀렉트: ", $("select option:selected").text());

//textContent, innerText, innerHTML의 차이확인

//-----------------------------------------------//
/* 필터링 메서드
- 특정 조건에 맞는 것만 골라내는 기능!

has(), is(), slice() 찾아보기
*/
console.log("---------------필터링 메서드-----------------");
console.log($("li").first().text());
console.log($("li").last().text());

console.log("홀수값만: ", $("li").filter(":odd").text()); //홀수만
console.log("짝수값만: ", $("li").not(":odd").text()); //홀수가 아닌것
