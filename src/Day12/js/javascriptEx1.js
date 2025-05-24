/*파일명:javascriptEx1.js*/

//호이스팅(Hoistring)
// - 자바스크립트에서 변수,함수 선언(만들다) 이 코드 실행전에 위로
//   끌어올리는 동작 
// - 코드를 실행하기 전에 변수 선언(var,let) ,함수(Function)이 
//   스코프의 최상단 으로 끌어올리는것! 

// Uncaught ReferenceError: num2 is not defined
// num2 변수는 찾을 수 없다!
/*num2 = 100;
console.log("num2:",num2);

var num2;
*/


//항상변수를 만들 때는 위에 먼저 만들고 
// 그다음에 실행하는 문장이 나와라!

var num = 1;
let num2 = 100;
let num3;

console.log("num:",num);
console.log(num2);

// Cannot access 'num3' before initialization
// 변수를 미리 만들고 저장해야되는데 미리 안 만들었다.
num3 = 100;
console.log(num3);

let name = "이서희";
let height = 160.3;

/*
컴퓨터가 데이터(값의 타입을 확인)
 
숫자형(NumberType)
  일반 숫자 : 1,2,3......
  특수 숫자 : Infinity(무한대), NaN (계산중에 에러가 발생했다!)
  소수점이 없는 숫자 - 정수
  소수점이 있는 숫자 - 실수 

문자형(StringType)
  문자 하나 ,문자 여러개(문자열) 
   "~~~~~" , '~~~~' 둘 중하나 쓰면됨!

   문자 안에 변수를 집어 넣을 수있다!
  백틱
*/

let age = 20;
console.log('값은:' ,age);

console.log(`age의 값은:${age}`);
//값을 변경 age -> 'hello' 변경될까?
age = 'hello';
console.log('값은:' ,age);

// 자바스크립트는 자동으로 타입을 저장해준다.
// 처음에는 정수를 저장하는 타입으로 공간이 생겼다가 그 다음에 
// 문자를 저장하니 문자를 저장하는 공간으로 자동으로 변경된다.
// 변수명을 작성할 때는 정보를 담고 있는 이름 

// 변수의 이름을 작성할 때  규칙!!

// ; 세미콜론 (마침표!)
let name2 = "이서희";
let age2 = 20;
let address = "서울시 강남구";

console.log("안녕하세요 이름은:",name2,"나이는:",age ,"주소:",address);

console.log(`안녕하세요 이름은:${name2} 나이는:${age} 주소:${address}`);

// Boolean Type
// -참과 거짓 (true,false) 두 가지만 저장하는 타입

let result = true;
let result2 = false;

// undefined 
//  -  변수는 만들었는데 값이 없다!
//  - 그러면 자동으로 자바스크립트가 undefined를 넣어준다.
let name3;
console.log('이름3:',name3);

// 객체(Object), 심볼(Symbol)
//  - 데이터 컬렉션이나 복잡한 개체를 표현할 수있음

//typeof 연산자
// - 어떤 타입인지 확인하는 연산자( 기호라고 생각하면됨)
console.log(typeof name3);
console.log(typeof result2);


let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);  //나눗눗셈 몫
console.log(a % b);  //나눗셈 나머지값

// 자바스크립트는 문자랑 숫자랑 더하기를 하면 연결!
// 앞에 있는 20이라는 문자랑 1이라는 숫자가 변형
// "201" 문자로 변경한다. 
console.log(typeof ("20" + 1));


// 자바스크립트는 타입을 확인해서 -,/ 는 자동으로 숫자로 
// 변경을 해서 계산하고 결과를 알려준다.
console.log(6 -'2');
console.log(typeof (6 -'2'));


console.log('6' / '2');
console.log(typeof ('6' /'2'));


//-----------------------------------------------------------
// 비교 연산자(기호)

let num4 = 10;
let num5 = 20;

console.log("값이 같니? ", num4 == num5);

console.log("값이 같니? ", 10 === 10);

num4 = 10;
num5 = '10';

// 자바스크립트에서는 ==  값만 같으면 된다. 타입은 상관없음
//                 === 값과 타입이 모두 일치해야된다.

console.log("값이 같니? ", num4 == num5);

console.log("값이 같니? ", 10 === '10');



