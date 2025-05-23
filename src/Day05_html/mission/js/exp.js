
  function fn_open(index) {
    // 클릭한 index에 해당하는 menu-detail 보이기
    const targetDetail = document.querySelectorAll('.menu li')[index].querySelector('.menu-detail');
    targetDetail.style.display = 'block';
  }

  function fn_close(index) {
    // 열린 menu-detail 닫기
    const targetDetail = document.querySelectorAll('.menu li')[index].querySelector('.menu-detail');
    targetDetail.style.display = 'none';
  }