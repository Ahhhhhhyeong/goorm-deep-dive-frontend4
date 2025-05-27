// console.log("Connected!!!");
/**
 let 변수명 => 값 변경 가능
 const 변수명 => 값 변경 불가
 */
// 1. 객체 생성
const ahyeongInfo = {
  userName : "권아영",
  userAge : 20,
  userAddress : "부산"
};
// 2. 위치 찾기 + 추가 한번에!
document.getElementById('info')
        .innerHTML = `<p>이름: ${ahyeongInfo.userName} 나이: ${ahyeongInfo.userAge} </p>`;

//********************* */ 
// 1. 객체 생성
const student1 = {
  name: "지민",
  age: 15
};

// 2. 위치 찾기
const ul = document.getElementById('userList');
// console.log(ul);
// 3. li태그 추가!
let li = document.createElement('li');
li.innerText = `이름: ${student1.name}`;
li.innerText += ` 나이: ${student1.age}`;
ul.appendChild(li);
