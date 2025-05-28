const result = document.querySelectorAll(".result");

let resultList = [[], [], [], [], [], []]; //모든 정답 담아두는 오브젝트

//1번
for (let index = 1; index <= 10; index++) {
  resultList[0].push(index);
}
console.log(resultList[0]);

//2번
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) resultList[1].push(i);
}
console.log(resultList[1]);

//3번
let temp = 0;
for (let index = 1; index <= 100; index++) {
  temp = temp + index;
}
resultList[2].push(temp);
console.log(resultList[2]);

//4번
let fruits = ["사과", "바나나", "포도"];
for (const element of fruits) {
  resultList[3].push(element);
  console.log(element);
}
//console.log(resultList[3]);

//5번
for (const num in fruits) {
  resultList[4].push(`${num}: ${fruits[num]}`);
  console.log(num);
  console.log(fruits[num]);
}

//6번
let cnt = 1;
while (cnt <= 9) {
  console.log(`2*${cnt} = ${2 * cnt}`);
  resultList[5].push(`2*${cnt} = ${2 * cnt}`);
  cnt++;
}

console.log("--------------------");
//1~6번 답 출력 화면
result.forEach((element, i) => {
  resultList[i].forEach((ele) => {
    element.innerHTML += `${ele}<br>`;
  });
});
