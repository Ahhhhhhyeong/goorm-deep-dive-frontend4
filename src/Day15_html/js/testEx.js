//jquery 바꿔보기!
// const tabBtn = document.querySelectorAll(".tab-button");
// const tabContent = document.querySelectorAll(".tab-content");
const tabBtn = $(".tab-button");
const tabContent = $(".tab-content");
console.log(tabBtn);
// foreach 동작하는 자료형이 따로 있다!
[...tabBtn].forEach((btn, index) => {
  btn.addEventListener("click", () => {
    //버튼 = isClick /탭 컨텐츠 = isShow
    [...tabContent].forEach((content, i) => {
      tabBtn[i].classList.remove("isClick");
      content.classList.remove("isShow");
    });
    tabBtn[index].classList.add("isClick");
    tabContent[index].classList.add("isShow");
  });
});

/**
 * jQuery로 불러온 값을 그대로 forEach를 사용하니 아래와 같은 에러가떴다.
    Uncaught TypeError: tabContent.forEach is not a function
    at HTMLLIElement.<anonymous> (testEx.js:10:16)
  => ce {0: li.tab-button.isClick, 1: li.tab-button, 2: li.tab-button, 3: li.tab-button, length: 4, prevObject: ce}
  => 콘솔로 찍어보니 위에처럼 나왔다!
  => 강제로 배열로 변경해주었는데, 왜 저에러가 떴는지..?
  jquery 돔 타입 이랑 document 돔 타입이 다르다! 
  배열.each() => 제이쿼리에서 foreach문 사용
 */
// 아래와 같이 쓸 수 있다!!!
$.each(tabBtn, function (index, value) {
  console.log(`${index} : ${value}`);
});
