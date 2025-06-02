/** 로컬 스토리지
 * 사용자의 브라우저 안에 데이터를 영구적으로 저장할 수 있는 공간
 * key - value 구조로 데이터 저장
 * 브라우저를 꺼도 유지되며, 동기적 처리를 한다.
 *
 * 단점
 * 저장용량이 작다
 *
 * 로컬 스토리지 - 브라우저 속에 메모장이라 생각하면 편함

// 로컬 스토리지에서 key는 중복되면 안된다.
// setItem(key,value);

// localStorage.setItem("이름","홍길동");
// localStorage.setItem("이름","이서희");

// 저장된 데이터 꺼내기 
const name1 = localStorage.getItem('이름');
console.log('스토리지 이름: ', name1);
 */

function save() {
  localStorage.setItem('id', 'ahyeong');
}

function load() {
  //1. storage에서 꺼내기
  const id1 = localStorage.getItem('id');
  //2. alert창에 값 보이기
  alert(id1);
}

function pwSave() {
  const pwd = document.querySelector('#pwInput');
  console.log(pwd);
  localStorage.setItem('pw', pwd.value);
  pwd.value = '';
}

function pwLoad() {
  const pwd2 = localStorage.getItem('pw');
  const result = document.querySelector('#result');
  result.textContent = pwd2;
}

function saveEmail() {
  const email = document.querySelector('#email');
  console.log(email.value);
  setTimeout(() => {
    console.log(email.value);
    localStorage.setItem('email', email.value);
    alert('email 저장됨!!' + localStorage.getItem('email'));

    //초기화는 실행 끝난 후에 진행하기!
    email.value = '';
  }, 3000);

  /* 비동기를 사용중인데, 3초 기다리지 않고, 
  value값이 ''로 바뀌어져 값이 없어진다. 
  실행 순서가 매우 중요하다~~!!
  */
  //email.value = '';
}

// 현재 시간을 실시간으로 표시!
/** Date()
 * js에서 현재 날짜와 시간을 제공해주는 객체 (내장 객체)
 * 내장 객체들은 기본적으로 첫 글자는 대문자로 작성되어있다!
 * const now = new Date();
 * 추출 가능 값
 * 연도 : now.getFullYear()
 * 월 : now.getMonth()
 *  - 0~11 로 출력.
 *  - 내부적으로 달을 배열로 관리함.
 *  - +1을 해주어야함
 * 일 : now.getDate()
 * 시 : now.getHours()
 * 분 : now.getMinutes()
 * 초 : now.getSeconds()
 * 문자 변환 => toLocaleTimeString();
 *    - 기본값은 브라우저 설정에 따라 자동으로 결정되며, 옵션을 설정하면 24시간제 등을 조정할 수 있다.
 * 날짜와 관련된 라이브러리 : dayjs, date-fns, moment.js 등
----
const testNow = new Date();
console.log(`현재 연도: ${testNow.getFullYear()}`);
console.log(`현재 달: ${testNow.getMonth() + 1}`);
console.log(`현재 일: ${testNow.getDate()}`);
console.log(testNow.toLocaleString());
 */

const clock = document.querySelector('#clock');
setInterval(() => {
  const now = new Date();
  let newTime =
    now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  clock.textContent = newTime;
}, 1000);
