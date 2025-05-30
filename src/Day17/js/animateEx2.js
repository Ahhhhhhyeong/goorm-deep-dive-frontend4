$(function () {
  $('#redBox').hide();
});

//1
$('#textBtn').click(() => {
  $('#text').animate(
    {
      top: 0,
    },
    800
  );
});

//2
$('#colorBtn').click(() => {
  console.log('click');
  // $('#box1').animate(
  //   {
  //     /*backgroundColor: 'red', //jQuery UI없이 애니메이션에서 색상 변경이 안됨...*/
  //   },
  //   2000
  // );
  $('#box1').fadeOut(2000, function () {
    $('#redBox').fadeIn(2000);
  });
});

//3
$('#listBtn').click(() => {
  let food = ['🍛', '🌭', '🍔'];
  let delay = 0;

  food.forEach((item, i) => {
    setTimeout(() => {
      let $li = $('<li>').text(item).hide();
      $('#list').append($li);
      $li.fadeIn(500);
    }, delay);
    delay += 500; //0.5초간격으로 나타내기!
  });
});

//4
$('#popBtn').click(() => {
  $('#box2')
    .animate(
      {
        width: '100px',
        height: '100px',
      },
      800
    )
    .animate(
      {
        width: '80px',
        height: '80px',
      },
      500
    );
});

//5
$('#clearBtn').click(() => {
  $('#hideText').animate({ opacity: 0 }, 1000);
});
