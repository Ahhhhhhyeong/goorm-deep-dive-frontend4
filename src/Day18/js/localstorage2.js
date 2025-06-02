function intEx() {
  localStorage.setItem('integer', 1);
}

// 로컬스토리지는 오직 문자열(String)타입만 저장 가능하다.
// Casting(형변환)
//  - 자동으로 숫자를 문자로 변경 (묵시적 형변환)
//
function intLoad() {
  const intLoad = localStorage.getItem('integer');
  console.log(`정수: ${intLoad}`);
  console.log(`타입: ${typeof intLoad}`);
}

function arrayEx() {
  localStorage.setItem('arrayEx', "['🍎', '🍇', '🍊']");
}

function arrayLoad() {
  const arrLoad = localStorage.getItem('arrayEx');
  console.log(`배열: ${arrLoad}`);
  console.log(`타입: ${typeof arrLoad}`);

  //string 형이 아닌 입력값(배열)로 출력을 원할때!
  //JSON(JavaScript Object Notation)
  //  - 문자열로 저장된 JSON데이터를 다시 js객체로 변환하는 함수
  //  - js obejct형식을 문자열로 변경
  //  - python, Java, C# 통신이 가능하다.
  //  - API 요청/응답, DB 저장 등에 사용한다.
  //  - Key:Value 이용해서 데이터를 저장하는 구조!
  //  - 문자열 형태로 구조화 하여 저장하거나 전송한다.
  const getFruits = JSON.parse(arrLoad);
  console.log(`변경된 타입: ${typeof getFruits}`);
}
