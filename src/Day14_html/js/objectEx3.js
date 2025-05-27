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