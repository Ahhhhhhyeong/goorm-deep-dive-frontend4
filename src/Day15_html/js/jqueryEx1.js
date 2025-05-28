//jqeury 시작할 때 특이점
//jquery는 시작할 때 무조건 $를 앞에 붙여아함 => js와 구별하기 위해서
//제이쿼리는 $(css셀렉터사용가능)
console.log($("h1"));

//id를 가진 p태그 찾기
//js 문법
document.getElementById("first");

//jquery
let findId = $("#first");
console.log(`아이디값: ${findId}`);

//class 찾기
//js 문법
document.getElementsByClassName("box");

//jquery
let findClass = $(".box");
console.log(`class: ${findClass}`);

// input 값 꺼내기
let value = $("#box__input").val();
console.log(`입력값 가져오기 : ${value}`);

$("#box__input").val("안뇽");
