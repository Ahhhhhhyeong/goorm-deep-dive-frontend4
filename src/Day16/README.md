# [Day16] 25.05.29 배운 내용 정리

---

(먼저 텍스트로 쓴 뒤, 마크다운으로 정리)

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
$(".btn").css("background-color", "yellow");
```

---

## ✅ jQuery 체이닝 (Chaining)

- 여러 기능을 한 줄로 연결해서 순서대로 실행.

```js
$(".btn").css("background-color", "white").css("font-size", "25px");
```

- `css()` 메서드 안에 **객체(Object)** 형태로 스타일을 일괄 설정 가능:

```js
$(".btn").css({
  background: "green",
  color: "white",
  border: "1px solid gray",
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
- **val()**
  - form 요소의 값 제어.

---

## ✅ 필터링 메서드

- 특정 조건의 요소만 추출.

```js
console.log($("li").first().text());
console.log($("li").last().text());
console.log("홀수값만: ", $("li").filter(":odd").text());
console.log("짝수값만: ", $("li").not(":odd").text());
```

---

## ✅ 이벤트 핸들러

- 사용자 동작(이벤트)을 처리하는 구조.

---

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
$("button").on("click", function () {
  alert("버튼 눌렸따!");
});
```

- `on()` 함수는 `addEventListener`처럼 여러 이벤트를 연결할 수 있음.
- 여러 이벤트 연결 시 **공백(space)** 으로 구분.

---

### ❌ 이벤트 제거

```js
$("button").off("click", function () {
  alert("버튼 눌렸따!");
});
```

---

### 😎 여러 이벤트에 따른 각각 다른 반응

```js
$("button").on({
  click: function () {
    $("#text").append("버튼 클릭했음");
  },
  mouseenter: function () {
    $("#text").append("마우스 버튼위로 올림");
  },
});
```
