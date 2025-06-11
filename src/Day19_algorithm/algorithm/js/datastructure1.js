/** Stack
 * 스택은 쌓아올리는 구조
 * 나중에 넣은 것 부터 먼저 꺼내는 구조
 * 실행취소, 페이지 이동, 히스토리, 브라우저 뒤로가기 등에서 많이 사용
 */

//* JS 배열을 이용하여 실행취소 구현
let history = [];

// js 입력창을 띄워서 입력 받기
function addHandler() {
  const value = prompt('추가할 값을 입력: ');
  // 값이 있는지 확인 (예외처리)
  // - 비정상적인 값이 들어갔을 때 프로그램이 멈추는 현상을 제거하기 위해 예외처리를 한다.
  // - 비정상적으로 프로그램이 멈추지 않도록 처리하는 방식

  //1 값이 있을 경우 실행
  if (value) {
    add(value); //2 값을 저장하는 함수 실행
  }
}

//3 값을 받아서 배열에 저장
function add(value) {
  history.push(value);
  renderStack();
}

function undo() {
  if (history.length === 0) {
    alert('되돌릴 작업이 없습니다!');
    return;
  }
  const removed = history.pop(); //원본 배열에서 삭제
  renderStack(); // 다시 그리기
  alert(`삭제한 데이터: ${removed}`);
}

//* 위에서 추가한 내용을 html에 스택 쌓는 명령을 구현하는 함수
function renderStack() {
  //1. historyBox 찾기
  const stackView = document.getElementById('historyBox');
  stackView.innerHTML = '';
  // createElement() -> className -> textContent 순으로
  // [...배열] = 스프레드 연산자. / 배열을 복사하거나 펼칠 때 사용
  // reverse() = 배열의 순서를 역순으로 뒤집는 메서드
  [...history].reverse().forEach((item) => {
    const div = document.createElement('div');
    div.className = 'stack-item';
    div.textContent = item;
    stackView.appendChild(div);
  });
}

//-------------------------------------//
//queue 시각화
/** 큐(Queue)
 * 먼저 들어간 데이터가 먼저 나오는 방식
 * First in First Out (FIFO)
 * 줄서기
 *
 * 넣기 / 빼기
 * push() / shift()
 */
let queue = [];

function addQueueHandler() {
  //prompt로 입력
  const value = prompt('값을 입력해주세요');

  //예외!
  if (value) {
    queue.push(value);
    //html append!
    renderQueue();
  }
}

//html에 큐를 그리기
function renderQueue() {
  //1. 요소 찾기
  const queueBox = document.getElementById('queueBox');
  //2. 기존내용 지우기(초기화)
  queueBox.innerHTML = '';

  //3. 순서대로 출력
  //item => 배열의 값을 하나 씩 꺼냄(순서대로)
  queue.forEach((item) => {
    //4. div 생성
    const div = document.createElement('div');
    //5. 클래스 네임 추가(스타일)
    div.className = 'queue-item';
    //6. 내용 추가
    div.textContent = item;
    //7. html요소 하위에 추가
    queueBox.appendChild(div);
  });
}

// 큐의 데이터 삭제
function removeQueue() {
  //예외처리
  if (queue.length === 0) {
    alert('삭제할 요소가 없습니다.');
    return;
  }
  const removeData = queue.shift();
  renderQueue();
  alert(`${removeData} 가 삭제되었습니다.`);
}

//-----------------------------------//
function randomInput() {
  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 10);
    queue.push(num);
    history.push(num);
  }
  renderStack();
  renderQueue();
}
