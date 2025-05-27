// console.log("Connected EX3");

const products = [
  {title: "무선 마우스", price: 25000},
  {title: "무선 키보드", price: 45000}
];
console.log(products)

const productList = document.getElementById('productList');

const div = document.createElement("div");
div.className = "card";
div.innerHTML += `
    <h4>${products[0].title}</h4>
    <p>${products[0].price}</p>
    `
productList.appendChild(div);

const div2 = document.createElement("div");
div2.className = "card";
div2.innerHTML += `
    <h4>${products[1].title}</h4>
    <p>${products[1].price}</p>
    `
productList.appendChild(div2);


// 반복문



let fruits = [];
fruits.push('오렌지');
fruits.push('사과'); // ['오렌지','사과']

// 제일 앞에 있는 요소를 제거!!!
fruits.shift(); // ['사과']

console.log(fruits);

//실생활 예
// 식당 웨이팅
let waiting = [];
waiting.push('지수');
waiting.push('로제');
waiting.push('제니');
waiting.push('리사');

let stack = [];
stack.push('구글');
stack.push('네이버');
stack.push('쿠팡');
console.log(stack.pop());



