//console.log('animateEx1 Connected!');
/*
html파일과 css를 모두 읽고나서 제이쿼리가 실행할 수 있도록
시작하는 함수 사용
*/

//original
$(document).ready(function () {
  console.log('jquery connected');
});
//short
$(function () {
  console.log('jquery connected2');
});
//에러발생을 최소화 한 문법!

/* 애니메이션을 사용하기 위해서는 제이쿼리에서 제공하는 함수
$(selector).animate({params},speed,callback);
  = params: 변경할 속성값(ex. left:20px 등)
  = speed: ms(숫자), slow, fast 등.. 
  = callback: 애니메이션이 완료 후 실행할 함수
-----
animate?
  - 천천히 바뀌는 함수
*/
/** 버튼을 클릭했을 때, 박스를 움직이기 !!
 기본적으로 div, p, input등의 태그들이 움직이려고하면,
 시작하는 위치를 알아야 한다.
 position설정하는 이유는 기본적으로 static으로 되어있어 움직이지 못하게 막는다.
*/
$('#btnMove').click(function () {
  console.log('버튼클릭'); // 클릭이벤트는 잘 작동함!!!!
  //$('#box1').animate({ left: '200' }, 1000); //??이부분 동작을 하지 않음!!!!!!
  //$('#box1').slideToggle(2000); //슬라이드 효과는 잘 됨!
  $('#box1').animate(
    {
      left: '200',
    },
    2000
  );
  console.log('animation load!');
});

/* 버튼을 클릭했을 때, 박스2를 확대하기 */
$('#btnGrow').click(() => {
  $('#box2').animate({ width: '200px', height: '200px' }, 2000);
});

// 버튼을 클릭했을 때, 박스3이 투명하게
$('#btnFade').click(function () {
  $('#box3').animate({ opacity: 0.2 }, 1000);
});

/* 무한 반복을 하기 위해서 함수 설정

animate({opacity:0.2},500,loop)
- loop = 함수명
  => 내가 작성한 함수명을 써줌.
  => 동작 
    - 텍스트가 계속 깜빡깜빡!
      1. 시작: 보이고 
      2. 중간: 점점점 희미해지다가 
      3. 종료: 다시 보이기
      4. 다시 1번으로 돌아간다(내가 만든 함수를 또 호출)
    */
function loop() {
  $('#loopText')
    .animate({ opacity: 0.2 }, 500) /*0.5초*/
    .animate({ opacity: 1 }, 500, loop);
}

loop();

/* 진행 바 이벤트!
버튼을 눌렀을 때, 진행바를 채워넣는다!
(주로 학습진도율 등에 사용됨)
*/
$('#fillBtn').click(function () {
  $('#bar').animate({ width: '85%' }, 5000);
});

/*
  진행바 진행 시,
  1. 퍼센트(글자)가 가운데로 정렬
  2. 글자 => 퍼센트 숫자 계속 늘어나기
  2. 바 길이 => 80% 늘어나기
*/
$('#fillBtn').click(() => {
  const $bar = $('#bar');
  $bar.width('0%').text('0%');
  $bar.animate(
    {
      width: '80%',
    },
    {
      duration: 2000, //2초동안 진행!
      step: function (per) {
        //진행하는 단계 => 숫자로
        $bar.text(Math.floor(per) + '%');
      },
      complete: function () {
        $bar.text('80%');
        console.log('끝!!!');
      },
    }
  );
});
