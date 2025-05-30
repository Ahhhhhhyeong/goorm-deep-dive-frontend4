//비동기 방식을 써서 프로그래스 바 늘리기

$('#fillBtn').click(() => {
  const $bar = $('#bar');

  $bar.animate(
    {
      width: '80%',
    },
    {
      duration: 2000, //2초동안 진행!
      step: function (per) {
        //진행하는 단계 => 숫자로
        $bar.text(Math.floor(per) + '%');
      },
      complete: function () {
        console.log('끝!!!');
      },
    }
  );
  //  await animateProgress($bar, 2000);
});

function animateProgress($bar, duration) {
  return new Promise((resolve) => {
    $bar.animate(
      { width: '80%' },
      {
        duration: duration,
        step: function (per) {
          $bar.text(Math.floor(per) + '%');
        },
        complete: function () {
          resolve();
        },
      }
    );
  });
}
