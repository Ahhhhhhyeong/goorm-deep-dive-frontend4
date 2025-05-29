// jqueryEx2.js

$('img').width('250').height('300');

/*
애니메이션을 자동으로 만들어준 함수들
제이쿼리에서 다른 값들은 문자 타입으로 들어간다
but 이벤트를 하는 함수들은 숫자로 주어야 한다(시간단위!!!)

fadeOut =  ms단위로 사라짐 / fadeIn = 다시 나타남
img.fadeOut(2000).fadeIn(2000);
toggle = img를 사라지게 했다가 다시 나타나게 함
img.toggle(2000).toggle(2000);
=> fadeOut,fadeIn 과 toggle의 차이!!
  => 토글은 작아지며 사라지는데, fadeIn, Out은 크기는 그대로!
slideUp = 위로 사라짐 / slideDown = 아래로 슬라이딩하며 나타남
img.slideUp(800).slideDown(2000);
*/

/*
on() 함수(기능)
-> addEventLisner 하나의 요소에 여러가지 이벤트를 설정할 수 있다.
-> 여러개를 동시에 넣을 수 있다

시작 버튼에 이벤트 작성하기!
여러 이벤트를 넣을 때 공백(white space)를 넣어주어야 한다.
$("button").on("click", function () {
  alert("버튼 눌렸따!");
});
*/
/*
off() 메서드
- 이벤트 연결 제거
$("button").off("click", function () {
  alert("버튼 눌렸따!");
});
*/

/*
여러가지 이벤트 중에 동작하는것도 각각 다르게 동작하고 싶은 경우!
$("button").on({
  click: function () {
    $("#text").append("버튼 클릭했음");
  },
  mouseenter: function () {
    $("#text").append("마우스 버튼위로 올림");
  },
});
*/

//------------------------------------------//

//1 이미지 숨기기/보이기
$('#btnFade').on('click', function () {
  console.log('fade 버튼 클릭!!');
  $('#fadeInOut').fadeOut(2000).fadeIn(2000);
});

//2 이벤트 확인 => 텍스트 출력
$('#btnText').on('click', function () {
  console.log('텍스트 출력 버튼 클릭!!');
  $('#evnetText').append('<p>🖱️이걸루 버튼 클릭!</p>');
});

//3 이미지 슬라이드
$('#btnSlide').on('click', function () {
  console.log('이미지슬라이드 버튼 클릭!!!');
  $('#imgSlide').slideUp(2000).slideDown(2000);
});

//4 버튼 배경색 바꾸기!
let colorList = ['red', 'orange', 'yellow', 'green'];
$('.color-btn').each(function (index, element) {
  //여기서나오는 element는 jquery DOM객체가 아님!!!
  //일반 DOM객체이기 때문에 javascript 코드로 작성해야함!
  element.style.backgroundColor = colorList[i];
});
