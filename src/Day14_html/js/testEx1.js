// console.log("testEx1 Connected!!");

const productList = [
  {prdName:'[25년 신상] 클래파 급속 냉각 무선 휴대용 핸디형 선풍기 손선풍기 손풍기',
    price: '27,800원',
    reviewScore: '⭐️⭐️⭐️⭐️⭐️',
    reviewCount: 415,
    prdimg: '../img/제품1.jpg'
  },
  {prdName:'[25년 신상] 클래파 급속 냉각 무선 휴대용 핸디형 선풍기 손선풍기 손풍기',
    price: '27,800원',
    reviewScore: '⭐️⭐️⭐️⭐️⭐️',
    reviewCount: 415,
    prdimg: '../img/제품1.jpg'
  },
  {prdName:'[25년 신상] 클래파 급속 냉각 무선 휴대용 핸디형 선풍기 손선풍기 손풍기',
    price: '27,800원',
    reviewScore: '⭐️⭐️⭐️⭐️⭐️',
    reviewCount: 415,
    prdimg: '../img/제품1.jpg'
  },
  {prdName:'[25년 신상] 클래파 급속 냉각 무선 휴대용 핸디형 선풍기 손선풍기 손풍기',
    price: '27,800원',
    reviewScore: '⭐️⭐️⭐️⭐️⭐️',
    reviewCount: 415,
    prdimg: '../img/제품1.jpg'
  },
  {prdName:'[25년 신상] 클래파 급속 냉각 무선 휴대용 핸디형 선풍기 손선풍기 손풍기',
    price: '27,800원',
    reviewScore: '⭐️⭐️⭐️⭐️⭐️',
    reviewCount: 415,
    prdimg: '../img/제품1.jpg'
  }
];

const cardGroup = document.getElementById('cardGroup');


for(let i = 0; i < productList.length; i++){
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardBody = document.createElement('div');
  
  card.className = 'prd-card';
  cardImg.className = 'card-img-top';
  cardBody.className = 'card-body';

  cardImg.src = productList[i].prdimg;
  cardImg.alt = productList[i].prdName;

  cardBody.innerHTML = `
    <span class="badge text-danger">특가진행중</span>
    <h5 class="card-title">${productList[i].prdName}</h5>
        <p class="card-text text-danger">${productList[i].price}</p>
        <p class="card-text">${productList[i].reviewScore}<small class="text-body-secondary">(${productList[i].reviewCount})</small></p>
  `;
  
  cardGroup.appendChild(card);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
}
