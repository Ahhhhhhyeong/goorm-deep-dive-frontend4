// 사람에 대한 정보 저장
let user = ["Ahyeong", 20, "Seoul"]; //=> 코드를 읽는 사람이 추측을 해야함.

// 코드(데이터)를 명확하게 이해가 가능!(값에 대한 설명?이 추가되어있다)
let user2 = {
  name: "Ahyeong",
  age : 20,
  address : "Seoul"
};
/******************************* */
// 핸드폰의 정보를 하나로 묶어서 phone이라는 변수에 저장
let phone = {
  brand: "Samsung",
  model: "zFolder5",
  price: 200
};

// 학교에서 수업을 받는 객체
// 객체 생성
let classInfo = {
  subject: 'javascript',
  time: 3,
  teacher: '이서희'
};
// 결과 출력
console.log(classInfo);
// classInfo변수에서 강사이름만 출력!
console.log(classInfo.teacher); // 변수명.key => value 출력

// 사진과 설명을 저장한 리스트
const fileInfo = {
  imgName: "떡볶이.png", // 파일을 불러올 때는 확장자명을 무조건
  imgDe : "떡볶이가 먹고싶은 나"
};
console.log(fileInfo);


// 제품 정보를 저장한 리스트
const productSoothingGel = {
  prdName: '더페이스샵 신선한 제주 알로에 수딩젤, 300ml, 2개',
  prdPrice: 5380,
  prdVolume: '300ml'
};
console.log(productSoothingGel.prdName);

/**
 API를 이용해서 서버에서 데이터를 주고 받을 때 object타입이 많이쓰임
 */

// 각 국가코드를 아래와 같이 저장할 수 있음!
const codes = {
  49: '독일',
  45: '스위스',
  44: '영국',
  1: '미국'
}


/******************************* */
/******************************* */
//1. 제품정보를 뭉쳐서 객체로 저장!
const productTShirt = {
  name: "Sevenmoon 베이직 남녀공용 220g 코튼 순면 티셔츠 라운드 반팔티 3장",
  store: "Sevenmoon",
  imgUrl: "../img/티셔츠.jpg",
  price: 49990,
  salePrice: 39990,
  rocketPrice: 17990,
  shipPrice: 0,
  typeColor: ['블랙','화이트']
};


//2. 결과창에 기록!!
console.log(productTShirt.typeColor);
console.log(productTShirt);

