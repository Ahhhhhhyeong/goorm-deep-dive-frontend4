//실시간 시간 감소
//오후 12시 ~ 다음날 12시까지 카운트 다운?
const countDown = setInterval(() => {
  const timer = document.querySelector('#time');
  //타이머를 들고왔는지 유무 체크
  if (timer) {
    timer.textContent = '';
  }

  const now = new Date();
  //그 다음날 12시 설정하기
  const endDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    12,
    0,
    0
  );

  //끝나는 시간 - 지금 시간 차이 구하기
  const diff = endDay.getTime() - now.getTime(); //ms

  //종료하는 부분 추가? 얘는 필요할까?
  if (diff < 0) {
    clearInterval(countDown);
    timer.textContent('끝!');
    return;
  }

  //diff => 시:분:초 로 만들기
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 3600);

  //숫자->문자->문자열의 길이가 2가아닐때,
  //길이를 2로 만들고 앞에 0을 추가하는 메서드
  const secondString = String(seconds).padStart(2, '0');
  const hourString = String(hours).padStart(2, '0');
  const minutesString = String(minutes).padStart(2, '0');

  const timerText = hourString + ':' + minutesString + ':' + secondString;
  timer.textContent = timerText;
}, 1000);
