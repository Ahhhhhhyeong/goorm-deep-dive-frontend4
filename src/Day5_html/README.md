# 📘 HTML 기초 [05.14]

---

## 🔗 실습 파일

- ✅ **기본 실행 파일**: [index.html](./index.html)  
- 🧩 **요소 실습**: [elements.html](./elements.html)  
- 📝 **텍스트 요소 실습**: [textElements.html](./textElements.html)  
- 💻 **전체 실습 파일**: [day5.html](./day5.html)  
- 🎯 **개인 미션 파일**: [day5Exp.html](./mission/day5Exp.html)

---

## 🧠 HTML이란?

> **HTML(HyperText Markup Language)**은 웹을 이루는 가장 기초적인 구성 요소로,  
> 웹 콘텐츠의 의미와 구조를 정의할 때 사용됩니다.

### 🌐 웹 문서를 이루는 구조

- **HTML** : 웹 사이트의 구조를 이루는 **뼈대**
- **CSS** : 웹 사이트에 **스타일(살과 옷)**을 입힘
- **JavaScript (JS)** : 웹 사이트가 **동작**할 수 있도록 함
- HTML 문서는 **`.html` 확장자**로 저장됨

---

## 🏗️ HTML 문서 구조

```html
<!DOCTYPE html> <!-- HTML5 문서 -->
<html>
  <head>
    <!-- HTML 문서에서 설정 
         설정하는 부분은 사용자에게 보이지 않음 -->
  </head>
  <body>
    <!-- 사용자에게 보여지는 화면 
         웹 페이지에 단 하나만 존재한다. (head, body) -->
  </body>
</html>

```
## 🏷️ HTML 태그란?

> **태그(tag)**: 꺽쇠(`< >`) 안에 들어가는 키워드  
> 일반적으로 **시작 태그**(`<태그명>`)와 **종료 태그**(`</태그명>`)로 구성됩니다.

---

### ⚠️ 참고: 빈 요소 (Empty Elements)

> 콘텐츠를 가질 수 없는 HTML 태그들입니다.

- `<meta>`
- `<link>`
- `<img>`
- `<br>`
- `<hr>`

---

### 📌 주요 HTML 요소들

> 이 부분의 본문은 HTML 요소입니다.

- `<br>`: 줄바꾸기  
- `<p>`: 단락바꾸기 (한 줄 떨어짐)  
- `<hr>`: 가로줄  
- `<center>...</center>`: 가운데 정렬  
- `<font>...</font>`: 텍스트 폰트 스타일 변경  
- `<ul><li>...</li></ul>`: 순서 없는 목록 (기본: ●)  
- `<ol><li>...</li></ol>`: 순서 있는 목록 (기본: 숫자)  
- `<table>...</table>`: 표 만들기  
- `<tr>...</tr>`: 표의 행 (table 내부에 위치)  
- `<td>...</td>`: 표의 열 (tr 내부에 위치)  
- `<td colspan="숫자">...</td>`: 가로 방향으로 셀 병합  
- `<td rowspan="숫자">...</td>`: 세로 방향으로 셀 병합  

---

## ⏳ HTML 실행 순서

1. 브라우저가 HTML 문서를 **읽음**
2. `<head>` 내부 설정을 **먼저 해석**
3. `<body>` 내부 내용을 **위에서 아래로 순서대로 출력**

---
