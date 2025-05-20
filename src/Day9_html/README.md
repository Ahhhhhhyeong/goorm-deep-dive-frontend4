
# 📘 [Day09] 25.05.20 수업내용 정리

---

## 🛠️ 실습 내용

- [레이아웃 실습](layoutEx1.html)  
- [반응형 레이아웃 실습](layoutEx2.html)

---

## 🌐 반응형 웹을 위한 `<head>` 설정

### 1. SEO (검색엔진 최적화)

> 웹사이트가 검색엔진(구글, 네이버 등)에서 더 높은 순위에 나타나도록 구조나 콘텐츠를 최적화하는 기술

**검색엔진 작동 방식**
- 사용자가 키워드를 입력하면 관련성 높은 페이지를 나열
- 페이지의 구조와 내용을 인덱싱
- 웹페이지를 크롤링

**SEO를 잘 한다는 건?**  
→ 검색 결과에서 상위에 노출되도록 설계했다는 의미!

**SEO 3단계**
- **기술적 SEO**: HTML, 메타 태그, 속도, 모바일 최적화
- **콘텐츠 SEO**: 키워드, 제목, 본문 구성
- **외부 SEO**: 외부 링크 횟수

---

### 2. 파비콘 (Favicon)

- 브라우저 탭에 표시되는 작은 아이콘  
- [🔗 Google 검색 센터: 파비콘](https://developers.google.com/search/docs/appearance/favicon-in-search?hl=ko)

---

### 3. 키워드 / 설명 (Meta 태그)

- 메타 태그는 검색 키워드 혹은 내용을 한 줄로 표현  
```html
<meta name="description" content="portfolio for software engineer">
```

---

### 4. 오픈그래프 (Open Graph)

> SNS 공유 시 카드형 링크 미리보기 생성

```html
<meta property="og:title" content="ahyeong 실습">
<meta property="og:type" content="website">
<meta property="og:url" content="배포 후 생성된 url">
<meta property="og:image" content="배포 후 생성된 이미지 경로">
```

---

## 📐 레이아웃

> **레이아웃의 핵심:** Block 레벨 요소들을 원하는 위치에 배치

---

### ✅ 시맨틱 태그 (Semantic Tag)

> 코드의 의미를 나타내는 HTML 태그  
> [🔗 MDN Web Docs: Semantics](https://developer.mozilla.org/ko/docs/Glossary/Semantics)

**주요 태그**
```
<article>, <aside>, <details>, <figcaption>, <figure>, <footer>, 
<form>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>
```

---

### 🧭 정렬

#### 1. `float`
- 요소를 가로로 정렬할 때 사용
- 본래는 이미지 주위에 텍스트 감싸기용
- `float`된 요소와 그렇지 않은 요소 간 **마진 문제** 발생
  - 해결: `clear` 사용

#### 2. `position`

| 값 | 설명 |
|--|--|
| `static` | 기본값, 일반적인 흐름에 따름 |
| `relative` | 원래 위치 기준으로 오프셋 이동 (영향 없음) |
| `absolute` | 부모 요소 기준 위치, 일반 흐름에서 제거 |
| `fixed` | 뷰포트를 기준으로 위치 고정 |
| `sticky` | 스크롤되는 부모 기준으로 위치 고정 (조건 있음) |

---

## 📱 반응형 웹

> 어떤 디바이스에서도 보기 좋게 만드는 것이 핵심!

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width`: 디바이스 너비에 맞춤  
- `initial-scale=1.0`: 화면 배율 100%

---

### 🎯 `@media` 쿼리

> 반응형 웹 디자인의 핵심 기술

**기본 구조**
```css
@media (조건) {
  /* 스타일 */
}
```

**조건 예시**

| 조건명 | 설명 |
|--------|------|
| `max-width` | 최대 너비 이하 |
| `min-width` | 최소 너비 이상 |
| `orientation` | 방향 (가로/세로) |
| `hover` | 마우스 오버 가능 여부 (터치 판단) |

**사용 예시**
```css
@media only screen and (min-width: 320px) {
  /* iPhone Retina */
}

@media only screen and (min-width: 480px) {
  /* 소형 기기 */
}

@media only screen and (min-width: 768px) {
  /* 태블릿 */
}

@media only screen and (min-width: 992px) {
  /* 데스크탑 */
}

@media only screen and (min-width: 1200px) {
  /* 대형 화면 */
}
```

> ✅ **Mobile First** 전략: 모바일부터 먼저 설계하고 확장

---

## ⚙️ JavaScript (기본 개념)

> 웹 페이지에 **동적인 기능**을 추가하는 언어  
> 웹 브라우저에서 실행되는 **인터프리터 언어**

---

### 1. HTML 내부에서 JS 사용

```html
<script>
  console.log(document.getElementById('hello').innerHTML = 'HI');
</script>
```

**동작 순서**
1. 문서 읽기
2. ID가 `'hello'`인 요소 찾기
3. 해당 요소의 글자 바꾸기

---

### 2. 외부 JS 파일 연결

> 파일은 보통 `</body>` 태그 **직전에** 연결

```html
<body>
  ...
  <script src="./js/jsEx1.js"></script>
</body>
```

---
