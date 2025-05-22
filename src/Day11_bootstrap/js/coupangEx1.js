

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[name="productCheck"]');

  let totalPrice = 0;
  let totalCount = 0;
  let shipping = 0;
  let discount = 0; // 추후 할인 정책 반영 가능

  function updateSummary() {
    // DOM 업데이트
    document.getElementById('order-price-count').textContent = (totalPrice - shipping).toLocaleString();
    document.getElementById('order-price-discount').textContent = discount.toLocaleString();
    document.getElementById('order-price-ship').textContent = shipping.toLocaleString();
    document.getElementById('order-price-all').textContent = (totalPrice + shipping - discount).toLocaleString();
    document.getElementById('order-product-count').textContent = totalCount;
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const card = checkbox.closest('.card');
      const price = parseInt(card.querySelector('.cart__card__price').textContent);
      const count = parseInt(card.querySelector('.product-mount').textContent);
      const shipPrice = parseInt(card.querySelector('.ship-price').textContent);
      const itemTotal = price * count + shipPrice;
      console.log(shipPrice);
      if (checkbox.checked) {
        totalPrice += itemTotal;
        totalCount += count;
        shipping += shipPrice;
      } else {
        totalPrice -= itemTotal;
        totalCount -= count;
        shipping -= shipPrice;
      }

      updateSummary();
    });
  });
});






/* 수량 추가 */
let minus = document.querySelector(".product__minus");
let plus = document.querySelector(".product__plus");
let result = document.querySelector("product-mount"); // 개수
let cost = document.querySelector("cost"); // 배송비 뺀 합
let total = document.querySelector("totalcost"); // 배송비 포함 가격


