# [Day16] 25.05.29 배운 내용 정리

---

### 🔗 실습 파일 설명

- jquery css 요소 선택
  - [js 파일](./jquery/jqueryEx1.js) / [html 파일](./html/jQueryEx1.html)
- jquery 이벤트
  - [js 파일](./jquery/jqueryEx2.js) / [html 파일](./html/jQueryEx2.html)
- jquery 이벤트 사용 미션
  - [js 파일](./jquery/test.js) / [html 파일](./html/test.html)

---

## ✅ jQuery 다운로드

- 공식 홈페이지에서 다운로드 버튼 클릭 시 JS 코드가 뜨는 창으로 이동됨.
- 마우스 오른쪽 클릭 → **"다른 이름으로 저장"** 하면 `.js` 파일로 저장 가능.
- **파일로 저장하는 이유**: 오프라인 환경에서도 사용 가능하도록 하기 위함.

---

## ✅ jQuery 객체

- 선택한 요소가 여러 개인 경우 자동으로 리스트로 저장됨.
- **개별 요소를 일일이 조작할 필요 없이** jQuery가 자동으로 반복 적용.

```html
<button class="btn">btn1</button> <button class="btn">btn2</button>
```

```js
$('.btn').css('background-color', 'yellow');
```

---

## ✅ jQuery 체이닝 (Chaining)

- 여러 기능을 한 줄로 연결해서 순서대로 실행.

```js
$('.btn').css('background-color', 'white').css('font-size', '25px');
```

- `css()` 메서드 안에 **객체(Object)** 형태로 스타일을 일괄 설정 가능:

```js
$('.btn').css({
  background: 'green',
  color: 'white',
  border: '1px solid gray',
});
```

---

## ✅ jQuery 함수 정리 (요소 제어)

- **html()**
  - `$("p").html();` → `innerHTML`과 동일.
- **text()**
  - `$("p").text("888");` → 텍스트 변경.
- **width(), height()**
  - `$("img").width(180);` / `$("img").height(180);` → 크기 설정.
- **attr()**
  - 속성 값 설정/조회.
  - 예시: `$('button').attr('disabled', true);` → 버튼 비활성화
- **prop**
  - 속성의 상태값 확인.
  - `boolean`값 반환.
- **val()**
  - form 요소의 값 제어.

### ➕ jQuery에서 요소를 내부 또는 외부로 추가하는 메서드

#### 요소 내부 추가:

- `.append()`: 선택한 요소의 끝에 새로운 요소를 추가합니다.
- `.prepend()`: 선택한 요소의 시작에 새로운 요소를 추가합니다.
- `.wrap()`: 선택한 요소를 감싸는 새로운 요소를 추가합니다.
- `.wrapAll()`: 선택한 모든 요소를 감싸는 새로운 요소를 한번에 추가합니다.
- `.wrapInner()`: 선택한 요소 내부를 감싸는 새로운 요소를 추가합니다.

#### 요소 외부 추가:

- `.after()`: 선택한 요소의 바로 뒤에 새로운 요소를 추가합니다.
- `.before()`: 선택한 요소의 바로 앞에 새로운 요소를 추가합니다.
- `.insertAfter()`: 선택한 요소의 뒤에 새로운 요소를 추가합니다 (같은 기능을 하는 `.after()`와 혼동되지 않도록 주의).
- `.insertBefore()`: 선택한 요소의 앞에 새로운 요소를 추가합니다 (같은 기능을 하는 `.before()`와 혼동되지 않도록 주의).

---

## ✅ 필터링 메서드

- 특정 조건의 요소만 추출.

```js
console.log($('li').first().text()); //첫번째 값 출력
console.log($('li').last().text()); //마지막 값 출력
console.log('홀수값만: ', $('li').filter(':odd').text()); //홀수번째 값 출력
console.log('짝수값만: ', $('li').not(':odd').text()); //짝수번째 값 출력(홀수가 아닌경우)
```

---

## ✅ 이벤트 핸들러

- 사용자 동작(이벤트)을 처리하는 구조.

### 🎬 애니메이션 함수

```js
img.fadeOut(2000).fadeIn(2000);
img.toggle(2000).toggle(2000);
img.slideUp(800).slideDown(2000);
```

- **fadeOut / fadeIn**: 서서히 사라지고 나타남 (크기는 유지).
- **toggle**: 나타났다 사라졌다 반복 (크기 줄어듦).
- **slideUp / slideDown**: 슬라이딩 애니메이션 효과.

---

### 🧩 이벤트 바인딩

```js
$('button').on('click', function () {
  alert('버튼 눌렸따!');
});
```

- `on()` 함수는 `addEventListener`처럼 여러 이벤트를 연결할 수 있음.
- 여러 이벤트 연결 시 **공백(space)** 으로 구분.

---

### ❌ 이벤트 제거

```js
$('button').off('click', function () {
  alert('버튼 눌렸따!');
});
```

---

### 😎 여러 이벤트에 따른 각각 다른 반응

- 하나의 요소에 `on()`을 추가하여 이벤트를 사용할 수 있다.

```js
$('button').on('click', function () {
  /*클릭 이벤트 추가*/
});
```

- 이벤트를 객체 형식으로(key:value) 여러가지의 이벤트를 부를 수 있다.

```js
$('button').on({
  click: function () {
    $('#text').append('버튼 클릭했음');
  },
  mouseenter: function () {
    $('#text').append('마우스 버튼위로 올림');
  },
});
```
