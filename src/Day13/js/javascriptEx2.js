/**
 * 1. p tag 추가
 * 2. 안에 내용 추가
 * 3. html 안에 추가하기 (어디에 추가할지 찾기!)
 */

// 1. 요소 만들기
let pTag = document.createElement('p');
console.log(pTag);

// 2. 안에 contents 추가
pTag.innerText = "안녕하세요 js로 추가한 p Tag 입니다.";
console.log("pTag text: ", pTag);

// 3. html문서로 보내기
const divTag = document.getElementById('box');
divTag.appendChild(pTag);

//----------------------------//

let colorList = ['빨강','파랑','노랑','분홍'];
// 버튼을 눌렀을 때!!!
function addList(){
  // 1. li 생성
  let li = document.createElement('li');
  let li2 = document.createElement('li');
  // 2. 내용 넣기
  li.innerText = colorList[0];
  li2.innerText = colorList[1];
  // 3. html 추가하기
  let boxOl = document.getElementById('box__ol');
  console.log(boxOl);

  boxOl.appendChild(li);
  boxOl.appendChild(li2);
  /**
    boxOl.appendChild(document.createElement('li').innerText=colorList[1]); 을 실행 할 시,
    javascriptEx2.js:33 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at addList (javascriptEx2.js:33:9)
    at HTMLButtonElement.onclick (javascriptEx2.html:22:32)
 */
  
}
