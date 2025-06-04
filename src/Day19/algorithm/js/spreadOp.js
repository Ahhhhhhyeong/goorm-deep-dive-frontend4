/** spread 연산자
 *  - 배열(Array) 또는 객체(Object) 안에 있는 값을 ㅈ펼쳐서 다른 배열이나 객체 안에 넣어주는 역할
 *
 * [...배열] : 배열 내부의 요소들을 개별 값으로 분리(복사)
 * [...객체] : 객체의 Key, Value 쌍으로 분리
 * 쉽게 배열을 합치거나 객체 복사 및 병합 가능
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
//arr1과 arr2를 한번에 합치기
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//배열에 새 요소 추가
const frutis = ['🍊', '🍇', '🍎'];

//맨 앞에 새로운 과일 하나 추가하고 맨 뒤에 새로운 과일 하나 추가
const newFruits = ['🍋‍🟩', ...frutis, '🍑'];
console.log(newFruits);

//객체 이용해서 복사 진행
const user = {
  name: '짱구',
  age: 5,
};

//user 객체
const userCopy = {
  ...user,
  city: '떡잎마을',
};
console.log(userCopy);

/** 프론트엔드에서 스프레드를 사용하는 이유?
 * - 상태나 기록 같은 자주 쓰이는 원본을 직접 바꾸면 버그가 생기기 쉬움
 * 프로그래밍 언어의 속도(성능) 메모리(자원) 때문에 주소를 넘겨준다.
 * */
const arr4 = [1, 2, 3];
const arr5 = arr4;

arr5.push(4);

console.log('4:', arr4);
console.log('5:', arr5);

//스프레드 사용@@@
const arr6 = [1, 2, 3];
const arr7 = [...arr6];

arr7.push(4);

console.log('6:', arr6);
console.log('7:', arr7);
