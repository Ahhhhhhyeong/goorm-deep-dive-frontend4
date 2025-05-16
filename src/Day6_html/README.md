# Day6 [25.05.15] 수업 내용 정리

---

## 🔧 실습 및 태그 사용 확인

- [헤드 태그, 바디 영역 CSS 사용](./headTag.html)
- [테이블, 리스트 태그 사용](./listTag.html)
- [Form 태그 사용](./formTag.html)
- [오전미션:이미지+버튼](./mission/test.html)
- [미션 수행](./mission/)

---

## 🎨 부트스트랩 아이콘 사용

> 아이콘 폰트 `<i class="bi bi-heart-fill"></i>` 를 사용하려면 부트스트랩 설치 필요  

**설치 방법 (3가지):**
1. 패키지 설치
2. 직접 다운로드 (zip)
3. CDN 방식 (**✔ 수업 시간에는 이 방식 사용**)

### ✅ CDN 방식

외부 디자인을 다운받기 위해 `<link>` 태그 사용:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
```
   
설명:
- ``rel="stylesheet"`` : 스타일 시트 연결
- ``href="주소"`` : 외부 URL 주소

---

## 🧾 meta 태그

> 브라우저나 검색엔진에 페이지의 정보를 제공하는 태그

예시:
```<meta name="keywords" content="HTML, CSS, REACT">```

### meta 태그 속성 설명:

| 속성        | 설명                       |
|-------------|----------------------------|
| keywords    | SEO 검색 키워드            |
| refresh     | 화면 새로고침              |
| viewport    | 반응형 뷰포트 설정         |
| description | 페이지 설명                |
| author      | 제작자 정보                |

> 💡 프론트엔드 개발자는 **SEO**에 신경 많이 써야 함!

---

## 📋 리스트 태그

### 1. `ul` (순서 없는 리스트)
- 쇼핑 목록, 메뉴, 정보 목록 등에 사용
- `list-style-type` 속성으로 모양 변경 가능

### 2. `ol` (순서 있는 리스트)
- 순위 표현 등 순서가 중요한 목록에 사용
- 시작 숫자 변경: `start` 속성 사용
- 역순 정렬 가능 (`reversed` 속성 사용)

---

## 📊 테이블 태그

표 형식 데이터 표현 시 사용 (엑셀처럼 행/열 구조)

- `<tr>` : 행
- `<td>` : 데이터 셀
- `<th>` : 제목 셀

**활용 예시:** 성적표, 시간표, 가격표, 통계 등

### 셀 병합

- `colspan` : 열 병합
- `rowspan` : 행 병합

예시 - colspan:
```
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
</table>
```

예시 - rowspan:
```
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>
```

---

## 📝 폼 태그

사용자 입력을 받을 수 있음

가장 많이 사용하는 태그: ``<input>``

### `value` 속성

| 타입 종류            | value 표현 방식          |
|----------------------|--------------------------|
| `text`, `button`, `submit` | 화면에 value가 보임 |
| `checkbox`, `radio`        | 화면에 value 안보임  |

### 주요 input type

- ``text`` : 한 줄 텍스트 입력
- ``radio`` : 단일 선택, 같은 `name` 설정 필요
- ``checkbox`` : 다중 선택 가능
- ``button`` : 클릭 버튼

---

## 🎨 CSS 정리

- `<style>` 태그는 `head` 안에 작성
- 전체 화면에 적용하려면 ``body {}`` 에 스타일 적용
- 특정 태그에 스타일 지정 가능

✅ **CSS에는 우선순위가 존재함!**

---
