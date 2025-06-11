// 5초 뒤에 div 사라지게!
// setTimeout(() => {
//   const alertDiv = document.querySelector('.alert');
//   alertDiv.style.display = 'none';
// }, 5000);

/** 호이스팅 이슈로
 * 항상 실행문이 나오기 전에 함수를 먼저 작성
//  */
// function hello() {
//   console.log('8초 뒤에 안녕하는 함수');
// }
// setTimeout(hello, 8000);

/**Interval
 * 1초 마다 콘솔에 이모지 출력
 

setInterval(function(){실행할 코드~~}, 기다릴 시간);
=> 지정시간마다 반복 실행
=> 타이머 아이디를 생성
=> 콜백함수를 반복적으로 실행하도록 예약함
const timer = setInterval(() => {
 console.log('🔄');
}, 1000);

const timer2 = setInterval(() => {
 console.log('월요병😴');
}, 2000);

console.log('timer:', timer);
console.log('timer:', timer2);

 * clearInterval()
- 반복을 멈추는 함수

setTimeout(() => {
 clearInterval(timer);
 console.log('❌50초 지났다! 멈춰~~~');
}, 50000);
*/
