//'use strict'      //엄격모드
/**
 * js array
 * - 여러가지 데이터를 순서대로 저장

tagName => 요소(태그)를 찾을 때 사용
*/

// 태그명을 기준으로 데이터를 가지고 옴
// ㄱ여러개를 담는 배열로 가지고 옴
let pBox = document.getElementsByTagName('p');

// 배열의 사이즈
//console.error('pBox의 개수: ',pBox.length);

// 배열에 데이터를 추가
// 변수명.push(값); => fruitsBox.push()
let fruitsBox = []; //빈 배열 생성

// console.log(pBox);
function addFruit() {
  // 1. 버튼을 클릭하면 input태그에 있는 입력한 내용 결과창에 출력
  let inputTag = document.getElementsByTagName('input');
  let inputText = inputTag[0].value;

  // 2. 버튼을 클릭하면 input태그에 있는 입력한 내용을 배열에 추가
  // 2-1. 빈 문자가 들어오면 배열에 추가 안하기
  if(inputText !== ""){
    fruitsBox.push(inputText); 
    console.log(fruitsBox);
    // 3. ol 리스트에 li태그로 집어넣기
    // const liTag = document.createElement("li");
    // liTag.setAttribute('id', inputText);
    // const textNode = document.createTextNode(inputText);
    // liTag.appendChild(textNode);
    // document.getElementById('fruits').appendChild(liTag);
  }
  

}

