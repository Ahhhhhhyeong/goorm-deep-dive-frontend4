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