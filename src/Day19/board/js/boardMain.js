/** stack을 이용해서 게시판 구현
 * 추가는 항상 위에 push()
 * 삭제는 항상 위에 pop()
 *
 * 게시판에 들어갈 내용 : id, title, content, timestamp(시간)
 */
// 스택, 큐 게시글들 저장
let stackBoard = [];
let queueBoard = [];

// 버튼요소들
const postBtn = document.getElementById('btnPost');
const deleteBtn = document.getElementById('btnDelete');
const queuePostBtn = document.getElementById('btnPostQueue');
const queueDeleteBtn = document.getElementById('btnDeleteQueue');

// 스택, 큐 게시판 부모 요소
const stackList = document.getElementById('postList');
const queueList = document.getElementById('queueList');

//stack
postBtn.addEventListener('click', () => {
  addBoardItems('title', 'content', 'stack');
});

deleteBtn.addEventListener('click', () => {
  deleteBoard(stackList, stackBoard, 'stack');
});

// queue
queuePostBtn.addEventListener('click', () => {
  addBoardItems('queueTitle', 'queueContent', 'queue');
});

queueDeleteBtn.addEventListener('click', () => {
  deleteBoard(queueList, queueBoard, 'queue');
});

//-----------------------------------------------------//

/** addBoardItems(titleId, contentId, type)
 * : 글 올리기 버튼 클릭!
 * titleId : 요소 id 값
 * contentId : 요소 id 값
 * type : 게시판 타입
 */
function addBoardItems(titleId, contentId, type) {
  //board 찾기
  const board = type === 'stack' ? stackBoard : queueBoard;
  const boardList = type === 'stack' ? stackList : queueList;
  //값 board추가
  const title = document.getElementById(titleId);
  const content = document.getElementById(contentId);
  const toCheck = [
    { el: title, label: '제목' },
    { el: content, label: '내용' },
  ];
  //예외처리
  if (toCheck) {
    board.push({
      id: board.length + 1,
      title: title.value,
      content: content.value,
      date: nowDate(),
    });

    renderBoard(boardList, board, type);
    //초기화
    title.value = '';
    content.value = '';
  }
}

/** renderBoard(postList, board, type)
 * : 게시판 렌더링
 * postList : 부모 요소
 * board : 게시물 배열
 * type : 어떤 타입인지 분기
 */
function renderBoard(postList, board, type) {
  postList.innerHTML = '';
  if (board.length === 0) {
    postList.appendChild(createEmptyMessage());
    return;
  }

  //3항연산자: type이 'stack'일 때, 리버스 아닐 땐 리버스하지 않기!
  let items = type === 'stack' ? [...board].reverse() : [...board];

  items.forEach((post) => {
    const postDiv = appendPostElement(post);
    postList.appendChild(postDiv);
  });
}

/** appendPostElement({id,title,content,date})
 * : 하나의 게시글 항목을 렌더링하는 함수
 */
function appendPostElement({ title, content, date }) {
  const postDiv = document.createElement('div');
  const postTitle = document.createElement('h4');
  const postContent = document.createElement('p');
  const postDate = document.createElement('p');

  postDiv.className = 'post';
  postTitle.className = 'post-title';
  postContent.className = 'post-content';
  postDate.className = 'post-date';

  postTitle.textContent = title;
  postContent.textContent = content;
  postDate.textContent = date;

  postDiv.appendChild(postTitle);
  postDiv.appendChild(postDate);
  postDiv.appendChild(postContent);

  return postDiv;
}

/** createEmptyMessage()
 * 값이 없는 경우 메시지 남김
 */
function createEmptyMessage() {
  const noPost = document.createElement('p');
  noPost.className = 'no-posts';
  noPost.id = 'noPosts';
  noPost.textContent = '등록된 글이 없습니다.';
  return noPost;
}

/** */
function deleteBoard(boardList, board, type) {
  //예외처리
  if (board.length === 0) {
    alert('삭제 할 요소가 없습니다');
    return;
  }
  //3항 연산자 : 타입이 스택일 때 = pop() / 아닐때 shift()
  type === 'stack' ? board.pop() : board.shift();

  renderBoard(boardList, board, type);
  alert('삭제되었습니다.');
}

/** isValidInput({el: element, label: 제목})
 * : 입력값 유효성 검사
 * el : id값으로 찾아온 요소
 * label : 어떤 요소인지 설명
 * trim() : 문자의 공백을 제거
 */
function isValidInput(input) {
  for (const field of input) {
    if (!field.el.value.trim()) {
      alert(`${field.label}을(를) 입력해주세요.`);
      field.el.focus();
      return false;
    }
  }
  return true;
}

/** nowDate(): 현재 날짜+시간 구하는 함수 */
function nowDate() {
  const date = new Date();
  let dateString = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return dateString;
}
