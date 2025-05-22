document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[name="productCheck"]');
  const checkAllbox = document.getElementById('all-check');
  const checkedMount = document.getElementById('check-mount');
  const checkedAllMount = document.getElementById('all-mount');
  
  // 장바구니 전체 물품 개수 업데이트
  checkedAllMount.textContent = checkboxes.length;
  // 선택한 개수 업데이트
  function updateMount(checkItem) {
    checkAllbox.checked = checkItem == checkboxes.length; //전체체크가 안되어있을 때 전체 체크박스는 비활성화
    checkedMount.textContent = checkItem;
  }
  
  checkAllbox.addEventListener('change', () => {
    let cnt = 0;
    checkboxes.forEach(checkbox => {
      if(checkAllbox.checked) {
        checkbox.checked = true;
        cnt++;
      }
      else {
        checkbox.checked = false;
        cnt--;
      }
    });
    // 선택된 개수 업데이트
    updateMount(cnt);
    // 주문예상금액 업데이트
    updateSummary();
  });
  
  // 주문 예상금액 업데이트
  function updateSummary() {
    let totalPrice = 0;
    let totalCount = 0;
    let shipping = 0;
    let discount = 0;
    let cnt = 0;

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const card = checkbox.closest('.card');
        const price = parseInt(card.querySelector('.cart__card__price').textContent);
        const count = parseInt(card.querySelector('.product-mount').value); // ← 여기 중요
        const shipPrice = parseInt(card.querySelector('.ship-price').textContent);
        totalPrice += price * count;
        totalCount += count;
        shipping += shipPrice;
        cnt++;
      }
    });

    document.getElementById('order-price-count').textContent = (totalPrice).toLocaleString();
    document.getElementById('order-price-discount').textContent = discount.toLocaleString();
    document.getElementById('order-price-ship').textContent = shipping.toLocaleString();
    document.getElementById('order-price-all').textContent = (totalPrice + shipping - discount).toLocaleString();
    document.getElementById('order-product-count').textContent = totalCount;
    updateMount(cnt);
  }

  // 각 상품별 체크박스 이벤트
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSummary);
  });

  // 수량 버튼 처리
  document.querySelectorAll('.product-minus').forEach(minusBtn => {
    const card = minusBtn.closest('.card');
    const plusBtn = card.querySelector('.product-plus');
    const input = card.querySelector('.product-mount');
    const cost = card.querySelector('.cost');
    const total = card.querySelector('.totalcost');
    const ship = card.querySelector('.ship-price');

    const unitPrice = parseInt(card.querySelector('.cart__card__price').textContent); // 단가를 고정값으로

    function updatePrices() {
      const quantity = parseInt(input.value);
      const shipFee = parseInt(ship.textContent);
      const productTotal = unitPrice * quantity;
      
      cost.textContent = productTotal.toLocaleString();
      total.textContent = (productTotal + shipFee).toLocaleString();

      updateSummary(); // 체크된 항목 전체 재계산
    }

    function updateButtons() {
      minusBtn.disabled = parseInt(input.value) <= parseInt(input.min);
    }

    minusBtn.addEventListener("click", () => {
      if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
        updatePrices();
        updateButtons();
      }
    });

    plusBtn.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
      updatePrices();
      updateButtons();
    });

    input.addEventListener("input", () => {
      console.log(input.value);
      if(input.value < 1) {
        alert("수량은 1개 이상 입력하셔야합니다.");
        input.value = 1;
      }
      updatePrices();
      updateButtons();
    });

    // 초기화
    updatePrices(); 
    updateButtons();
  });
});
