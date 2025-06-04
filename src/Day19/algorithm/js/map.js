// map 함수 사용

//숫자를 두 배로 만들기!
let numbers = [1, 2, 3];

/** Map을 사용하지 않고 숫자를 두배로 만들기
 * - 원본배열을 반복문을 통해 접근하며
 * - 새 배열 안에 ㄱㅖ산 한 값을 입력해야 함
 */
noMap();
function noMap() {
  let copyNumbers = [];
  for (const num of numbers) {
    copyNumbers.push(num * 2);
  }
  console.log(copyNumbers);
}

/** Map을 사용.
 * 아래와 같이 한 줄로 만들 수 있다.
 * 원본은 그대로있음!
 */
let mapNumbers = numbers.map((num) => num * 2);
console.log(mapNumbers);

// 과일배열에 이모지를 각각 추가!
let fruits = ['사과', '바나나', '포도'];
console.log(fruits);
let copyFruits = fruits.map((fruit) => '😍' + fruit);
console.log(copyFruits);

// 학생 이름에 번호 붙이기!
let names = ['홍길동', '유관순', '이순신', '세종', '심청이'];
/** names.map(값, index) */
let copyNames = names
  .map((name, index) => `<li>${index + 1}. ${name}</li>`)
  .join('');

document.getElementById('list').innerHTML = copyNames;
console.log(copyNames);
