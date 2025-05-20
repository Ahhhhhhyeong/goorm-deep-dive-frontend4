# [Day09] 25.05.20 수업내용 정리 

---
## 실습 내용
[레이아웃 실습](layoutEx1.html)
[반응형 레이아웃 실습](layoutEx2.html)

---

## 반응형 웹을 위한 head 설정
1. SEO 
= 검색엔진 최적화. 
> 웹 사이트가 구글, 네이버 같은 검색 엔진에서 더 높은 순위에 나타나도록 웹 사이트 구조나 콘텐츠를 최적화 하는 기술! 

검색엔진 작동 방식 
- 검색자가 어떤 키워드를 입력하면 관련성 높은 페이지를 순위별로 나열한다.
- 페이지의 구조와 내용을 인덱싱합니다.
- 구글 인터넷을 돌아다니며 웹 페이지를 크롤링

SEO를 잘 한다는 건?
  - 검색 결과에서 상위에 노출되도록 설계했다는 뜻!

SEO 3가지 단계
- 기술적 SEO: HTML, meta, 속도, 모바일 최적화 등
- 콘텐츠 SEO: 키워드, 제목, 본문 내용의 구성
- 외부 SEO: 다른 사이트에서 얼마나 많이 링크되는지

2. 파비콘
= 타이틀 옆의 작은 아이콘
[Google 검색 센터 파비콘 내용](https://developers.google.com/search/docs/appearance/favicon-in-search?hl=ko)

3. 키워드, 내용
- 검색 키워드 혹은 내용 
- 메타태그 사용 시, 한 줄로 쓰는 것을 권장  
예시 `<meta name="description" content="protfolio for software engineer">`

4. 오픈그래프 `OG(Open Graph data)`
- SNS에 공유할 때 예브고 깔끔하게 카드형 링크 미리보기 생성
```
  <meta property="og:title" content="ahyeong 실습">
  <meta prooperty="og:type" content="website">
  <meta property="og:url" content="배포 후 생성된 url">
  <meta property="og:image" content="배포 후 생성된 이미지 경로">
```

---

## 레이아웃
> layout의 핵심은 block 레벨 요소들을 원하는 위치에 배치하는 것   
> 화면이나 페이지에서 각 요소(텍스트, 이미지, 버튼 등)를 배치하는 구조를 의미함.


### 정렬
1. float 
  - 한 줄에 하나 씩 요소를 가로로 정렬하기 위해서 사용
  - 기본적으로 `none` 
  - 원래 이미지 주위를 텍스트로 감싸기 위해 만들어진 것
  - float 선언된 요소 & 선언되지 않은 요소간 마진이 사라짐
    - 해결방법 : `float:clear`

2. position
  - 요소 값들의 위치를 정할 수 있음



## 반응형
> 사용자가 어떤 디바이스로 웹 사이트를 방문할지 모르기 때문에 각 화면마다 웹 사이트가 잘 보일 수 있도록 만들어야 함   
> PC(모니터)-테블릿-모바일 혼용   

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `content="width=device-width"` : 가로폭을 디바이스에 맞춤!!
  - `initial-scale=1.0"` : 초기화면 배율을 100%로 설정


### @media 
> 반응형 웹 디자인에 사용되는 핵심 기술!!!

`@media` 사용 시, 조건을 써야함
- ex `@media (조건){}`

| 조건명 | 설명 |
| -------- | ----------|
| max-width | 최대 너비(이하일 때 적용) |
| min-width | 최소 너비(이상 일 때 적용) |
| orientation | 방향(가로/세로) |
| hover | 마우스 올릴 수 있는지 여부 (터치 디바이스) |

- `@media screen {}`
  - screen : 스마트폰, pc, 테블릿
  - not screen: 프린터로 출력할 때 

- 반응형 웹 디자인은 viewport 너비(width)를 기준으로 한다. 


- Mobile First 
  - Application에서 가장 중요한 사이즈 = 모바일
```
/*==========  Mobile First Method  ==========*/
/* All Device */

/* Custom, iPhone Retina : 320px ~ */
@media only screen and (min-width : 320px) {

}
/* Extra Small Devices, Phones : 480px ~ */
@media only screen and (min-width : 480px) {

}
/* Small Devices, Tablets : 768px ~ */
@media only screen and (min-width : 768px) {

}
/* Medium Devices, Desktops : 992px ~ */
@media only screen and (min-width : 992px) {

}
/* Large Devices, Wide Screens : 1200px ~ */
@media only screen and (min-width : 1200px) {

}
```


---
## JavaScript (Js)
*JS 기본개념정도만 학습함*
> 웹 브라우저에서 동작하는 인터프린터 방식의 프로그래밍   
> 웹 페이지에서 동적인 동작과 로직을 추가한다.   
> 자바스크립트는 움직임을 주는 것!!!

