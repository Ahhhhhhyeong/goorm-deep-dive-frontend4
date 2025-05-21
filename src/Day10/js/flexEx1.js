let pTag;

function fn_iconClick(params) {  
  pTag = params.parentElement.querySelector('p');
  // 하트랑 북마크는 색상 변화
  if(params.classList[1].includes('heart')|| params.classList[1].includes('bookmark')){
    changeClass(params);
    return;
  }

  if(pTag){ // 숫자 늘리기
    let count = parseInt(pTag.textContent, 10);
    pTag.textContent = count + 1;
  }  
}

function changeClass(params){
  // 눌릴때 색상 변화
  let baseClass = params.classList[1];
  let changeClass = null;

  // 채워진 아이콘 클래스 이름 변경
  if(baseClass.endsWith('-fill')){
    changeClass = baseClass.replace('-fill', '');
    pTag.textContent = parseInt(pTag.textContent, 10) - 1;  
  } else {
    changeClass = baseClass.replace(baseClass, baseClass+'-fill');
    pTag.textContent = parseInt(pTag.textContent, 10) + 1;
  }

  // 기존 클래스 지우고 새로운 클래스 추가
  // ToggleEvent 사용해보기
  if(changeClass){
    params.classList.remove(baseClass);
    params.classList.add(changeClass);
  }
}



////
function heartClick(element){
  // html에서 this 클릭된 요소를 자바스크립트의 heartClick이라는
  // 변수인 element  변수에 저장한다.

  /*
  toggle()
   - 해당 요소에 클래스이름이 있으면 제거를 하고 클래스 이름이
     없으면 추가해라!
     전등 스위치 (on/off)

  자바스크립트의 동작을 줄 때는 꼭!
  1. 동작 전 디자인
  2. 동작 후 디자인
  3. 위에 동작의 시작은 어떤 것으로 할 지 고민
   마우스 클릭, 마우스 드래그,키를 눌렀을 때 , 마우스 포인트가
   밖으로 나갔을 때 ...

  */


  element.classList.toggle("heart-red");
  
  //하트채우기
  element.classList.toggle("bi-heart-fill");
  element.classList.toggle("bi-heart");

  // 만약에 하트가 채워져있으면 heartValue 하트의 개수를
  // 저장하는 변수의 값이 1 증가하고 만약에 빈 하트라면 
  // 변수의 값을 1 감소시킨다.

  // 선택(if문)
  if(element.classList.contains("bi-heart-fill")){
    // 변수의 저장하는 = (대입연산자)
    //  연산자 단어는 기호!
    //  실행하는 순서가 오른쪽에서 왼쪽으로 저장되는 순서!
    heartValue = heartValue+1;
  }

  if(element.classList.contains("bi-heart")){
    // 변수의 저장하는 = (대입연산자)
    //  연산자 단어는 기호!
    //  실행하는 순서가 오른쪽에서 왼쪽으로 저장되는 순서!
    heartValue = heartValue - 1;
  }

  //변경된 값을 html로 보내서 내용을 수정해야된다.
  document.getElementById("like-count")
          innerText = heartValue;
  console.log("하트 개수:",heartValue);
  
}