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
  //localStorage.setItem('arrayEx', "['🍎', '🍇', '🍊']");
  localStorage.setItem('arrayEx', JSON.stringify("['🍎', '🍇', '🍊']"));
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

  //const getFruits = JSON.parse(arrLoad);
  //로컬스토리지는 모두 문자열로 저장되기 때문에
  //Object값을 받아와서 Array(문자열)
  const getFruits = Array(JSON.parse(arrLoad));
  console.log(`변경된 타입: ${typeof Array(getFruits)}`);
  console.log('배열형태로: ', getFruits[0]);
}

/**회원가입시 필요한 정보
 * 아이디, 비밀번호, 주소, 이메일
 * 
// 아래처럼 object로 만들면
// 한 번 만들고 끝나면, 또 다른 데이터를 저장할 때 또 만들어야 함. 
// 만약 수가 많아지면 => 많아지는 만큼 만들어야함
*/
const user = {
  name: '동희',
  email: 'donghee@gmail.com',
};
//...

/**
 * 여러개의 데이터를 한 번에 저장을 원할 때
 * class 사용
 *
 * 클래스로 틀을 만들어서 여려명에게 똑같은 공간을 제공*/
class UserInfo {}
