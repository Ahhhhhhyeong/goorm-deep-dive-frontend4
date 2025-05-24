let alertbox = document.getElementsByClassName("alert-box");
console.log(alertbox);
console.log(alertbox[0]);
console.log(alertbox[1]);

// div안에 텍스트 내용을 가져오고 싶을 때
console.log(alertbox[0].innerHTML);
console.log(alertbox[1].innerHTML);

// 5초 기다리고 알림창 끄기
// -> setTimeout(동작 작성); : n초 기다리는 함수
// 딱 한 번 실행 됨
/* 동작을 여러줄을 써야할 때 => 함수를 작성 */
function alertBox() {
  alertbox[0].style.display='none';
}
//setTimeout()기능은 초단위가 아니라 밀리초 단위로 들어감
// 5000ms=> 5초 (1초 = 1000ms)
setTimeout(alertBox, 5000);

// 닫기 버튼을 눌렀을 때
// 에러창! 을 안보이게 함(공간은 존재)
function btnVisi() {
  //alertbox[1].hidden = true; //공간도 사라짐
  alertbox[1].style.visibility = 'hidden';
}

// 특정코드를 일정 시간마다 반복 실행
// setInterval(동작함수, 반복주기);
// 반복하면서 실행 됨