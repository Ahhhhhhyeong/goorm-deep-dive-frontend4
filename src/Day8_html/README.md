# [Day08] 25.05.19 수업내용 정리

---

## 🌐 웹 표준

> 브라우저마다 표준화된 언어를 사용하여 어떤 브라우저를 사용하더라도 동일한 콘텐츠를 볼 수 있도록 함.  
> **W3C**: 웹 표준을 정의하는 공식 기관

### ✅ 웹 표준을 지켰을 때 장점
- 운영 관리 용이
- 검색엔진 최적화
- 웹 접근성 향상

---

## ♿ 웹 접근성

> 누구나 신체적, 환경적 조건에 관계없이 인터넷을 통해 정보에 접근하고 이용할 수 있는지에 대한 정도

`<img alt="어떤 이미지 인지 알 수 있는 대체 텍스트">`

---

## 🧱 Block & Inline 요소

### 📌 Block 요소
- 한 줄 전체를 차지 (가로 = 100%)
- 항상 새 줄에서 시작됨
- 다른 block, inline 요소를 포함할 수 있음
- 한 줄에 하나의 태그만 사용 가능

**대표 태그**: `<div>`, `<p>`, `<h1~6>`, `<ul>`

### 📌 Inline 요소
- 한 줄에 여러 태그가 나란히 올라감
- 필요한 만큼만 공간 차지
- 줄 바꿈 없이 계속 이어짐

**대표 태그**: `<span>`, `<strong>`, `<em>`

---

## 🎨 CSS 변수

> 재사용 가능한 값을 정의한다.  
> `--변수이름` 형식으로 작성

```
:root {
  --bg-color: white;
  --text-color: black;
  --main-color: pink;
  --block-color: rgb(208, 94, 82);
}
```

---

## 👥 인접 형제 선택자

> 바로 다음에 나오는 형제 요소 선택

```
input + span {
  /* CSS 요소 입력 */
}
```

---

## 📏 CSS 프로퍼티 값 단위

- `px` : 고정된 절대 단위 (1px = 화면의 작은 점 하나)
- `em` : 부모 요소의 크기를 기준으로 하는 상대 단위 (중첩되면 배수로 커짐)
- `rem` : 최상위 요소(html)의 크기를 기준 (root = r)

---

## 📦 Box Model

> HTML/CSS 요소가 화면에 어떻게 배치되는지를 설명하는 핵심 개념  
> 기본적으로 마진은 8px로 설정됨

- **padding** : 콘텐츠 내부 여백  
- **border** : padding 포함한 테두리  
- **margin** : border 외부 여백 (요소 간 간격)

---

## 🎯 CSS 작성 순서

1. **레이아웃 관련**
   - display, position (top, right, bottom, left)
   - float, clear
   - z-index

2. **박스 모델**
   - width, height
   - margin, padding
   - [box-sizing](https://www.w3schools.com/css/css3_box-sizing.asp)
   - overflow

3. **테두리와 배경**
   - background, box-shadow
   - border

4. **텍스트 관련**
   - font, text 등

5. **기타**
   - cursor, animation, transform 등

> 정렬 → 크기 → 박스 꾸미기 → 글씨 넣기 → 효과 마무리  
> 자동 정렬 도구: **CSS Prettier**, **Stylelint**

---

## 🏷️ BEM 네이밍 방법론

> Block, Element, Modifier  
> 클래스 이름을 명확하게 구조화하기 위한 방식

- `__` : 요소 (Element)
- `--` : 스타일 또는 상태 (Modifier)

예시:

```
<div class="main__title">
  <h1> 타이틀 </h1>
</div>

<div class="main__search-box">
  <input type="text">
</div>
```

---