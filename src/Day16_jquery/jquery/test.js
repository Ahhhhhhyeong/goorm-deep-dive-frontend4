//로그인 알림창 숨기기
$('.alertBox').hide();

$('#loginBtn').on('click', function () {
  console.log('click');
  //클릭 버튼을 연타를 하게 될 때,
  //같은 이벤트가 또 안눌려지게->버튼 비활성화
  $('#loginBtn').attr('disabled', true);
  $('.alertBox').fadeIn(1000);
});

$('#closeBtn').on('click', function () {
  $('.alertBox').fadeOut(800);
  //로그인버튼 다시 활성화!!!
  $('#loginBtn').attr('disabled', false);
});
