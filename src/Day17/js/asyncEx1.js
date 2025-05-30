//비동기 방식을 써서 프로그래스 바 늘리기

$('#fillBtn').click(async () => {
  const $bar = $('#bar');

  await animateProgress($bar, 2000);
});

function animateProgress($bar, duration) {
  return new Promise((resolve) => {
    $bar.animate(
      { width: '80%' },
      {
        duration: duration,
        step: function (per) {
          console.log(per);
          $bar.text(Math.floor(per) + '%');
        },
        complete: function () {
          resolve();
        },
      }
    );
  });
}
