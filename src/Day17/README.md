# [Day17] 25.05.30 수업내용 정리

---

### 🔗 실습 파일

- animate() 실습1
  - [js파일](./js/animateEx1.js) / [html파일](./html/animateEx1.htm)
- animate() 실습2
  - [js파일](./js/animateEx2.js) / [html파일](./html/animateEx2.htm)
- 비동기 공부한거 -[js파일](./js/asyncEx1.js) / [html](./html/asyncEx1.html)

---

### CSS 상속 (Inheritance)

- CSS가 중복되면 코드 효율성이 초당한다.
- 중복되는 속성을 묶어서 각종 요소에 대한 공통 CSS를 설정해준다.
- CSS도 상속의 개념이 있다!

```css
div {
  position: relative; /* jQuery 에서 애니메이션 효과를 적용하려면 포지션이 필요 */
  width: 100px;
  height: 100px;
  margin: 2rem 0;
  left: 0;
}

#box1 {
  background-color: aquamarine;
}

#box2 {
  background-color: crimson;
}

#box3 {
  background-color: thistle;
}
```

---

### jQuery 시작 함수

```js
// 원본 형식
$(document).ready(function () {
  console.log('jQuery connected');
});

// 단축 형식 (에러 감소)
$(function () {
  console.log('jQuery connected (short)');
});
```

---

### jQuery 애니메이션 (animate)

- 여러 CSS 속성이 차차이 변경되는 효과를 주는 함수

```js
$(selector).animate({ params }, speed, callback);
// params: 변경할 속성 (ex. left: '20px')
// speed: 시간 (ms 또는 'slow', 'fast')
// callback: 완료 후 실행되는 함수
```

#### 예제: 버튼을 클릭했을 때 백스 이동

```js
$('#btnMove').click(function () {
  console.log('버튼 클릭!');

  $('#box1').animate(
    {
      left: '200px',
    },
    2000
  );
});
```

#### 백스 크기 증가

```js
$('#btnGrow').click(() => {
  $('#box2').animate({ width: '200px', height: '200px' }, 2000);
});
```

#### 투명도 낮이기

```js
$('#btnFade').click(function () {
  $('#box3').animate({ opacity: 0.2 }, 1000);
});
```

#### 무한 반복 (미지 홈)

```js
function loop() {
  $('#loopText')
    .animate({ opacity: 0.2 }, 500)
    .animate({ opacity: 1 }, 500, loop);
}

loop();
```

---

### jQuery hide(),fadeIn(),slideUp() 효과와 animate 차이

- `animate()` 은 노드 탭수가 가능한 CSS 속성에만 적용 가능

**가능:** `width`, `height`, `opacity`, `top`, `left`, etc.

**불가:** `display`, `position`, `visibility`, `backgroundColor` 등

#### 보이기/숨기기 전용 메서드

| 동작            | 메서드                 | 설명                        |
| --------------- | ---------------------- | --------------------------- |
| 감우기          | `.hide(duration)`      | `display: none`으로 감운다  |
| 보이기          | `.show(duration)`      | `display: block`으로 보이다 |
| 서서히 감우기   | `.fadeOut(duration)`   | `opacity`를 0으로           |
| 서서히 보이기   | `.fadeIn(duration)`    | `opacity`를 1로             |
| 위로 슬라이드   | `.slideUp(duration)`   | 위로 감우는 효과            |
| 아래로 슬라이드 | `.slideDown(duration)` | 아래로 포인 효과            |

---

### 비동기 (Asynchronous) 개념 정리

#### 스레드 (Thread)?

- 프로그램이 실행되는 후드 및 시설
- 다음 명령을 첫 줄로 처리

#### 단일 스레드

- 시설이 하나만 있어서 명령이 첫줄로 실행

#### 멀티 스레드

- 모든 명령이 다양한 후드에서 돌아간다

#### 비동기란?

- 작업이 마치저 끝난 후에 보내지 않고 다음 작업을 실행
- JS는 기본적으로 다음 명령을 순서대로 실행

#### 비동기가 필요한 이유?

- 사용자에게 다음작업을 부드러워지게 보여주기 위해
- API 응답이 느림있을 경우, 자연시간버프 목적
- 여러 사이에서 동시에 처리 필요
- Frontend / Backend 모두에서 비동기통신은 필수!

---

### 진행바 (progress bar) 애니메이션 실습

#### animate() 만 사용했을 때

```js
$('#fillBtn').click(() => {
  const $bar = $('#bar');
  $bar.animate(
    {
      width: '80%',
    },
    {
      duration: 2000,
      step: function (per) {
        $bar.text(Math.floor(per) + '%');
      },
      complete: function () {},
    }
  );
});
```

> animate()만 사용했을 때, 큰 문제는 아니지만, 내가 원하는대로 80% 도달하면 멈추지 않고, 85%까지 올라갔다가 떨어진다.
>
> 또, 퍼센트가 0%로 오래 유지되는데, 왜..?

1️⃣ 왜 80%에서 멈추지 않고 85%까지 갔다가 다시 80%로 돌아오는지?

> **원인** : `step`콜백에서 사용하는 `per`매개변수는 **애니메이션 대상 속성의 "현재 값"**이 아닌, **숫자 기반의** **"현재 애니메이션 진행 상태"**이다. 하지만 width: '80%'처럼 퍼센트 값을 사용할 경우, jQuery 내부적으로 비교 및 계산을 위해 **픽셀 값**으로 변환해서 처리한다.
>
> 애니메이션 종료 시점에 **80%를 정확히 찍지 못하고 overshoot**했다가 다시 돌아온다!

2️⃣ 왜 text가 0%로 유지되다가, 갑자기 85%쯤에서 찍히는지?

> 얘는 진짜 모르겠음.. 왜?지?
>
> 다른 이벤트랑 충돌났나??

#### 비동기를 사용했을 때

```js
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
```
