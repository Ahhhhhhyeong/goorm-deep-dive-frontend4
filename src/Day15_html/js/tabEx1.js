// CSS 선택자 사용!!

const tabsBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

//0번 버튼을 클릭하면
// 현재 탭 컨텐츠에 붙어있는 show를 모두 제거한다.
// addEventListener(어떤이벤트,어떤동작을 실행해~)
tabsBtn[0].addEventListener("click", function () {
  tabContent[0].classList.remove("show");
  tabContent[1].classList.remove("show");
  tabContent[2].classList.remove("show");

  tabsBtn[0].classList.remove("orange");
  tabsBtn[1].classList.remove("orange");
  tabsBtn[2].classList.remove("orange");

  //마지막에서 0번 버튼이 클릭되었으니 show를 0번 버튼에 추가만하면
  // 된다.
  tabContent[0].classList.add("show");
  tabsBtn[0].classList.add("orange");
});

// 1번 버튼을 클릭하면
// 현재 탭 컨텐츠에 붙어 있는 show를 모두 제거한다.
tabsBtn[1].addEventListener("click", function () {
  tabContent[0].classList.remove("show");
  tabContent[1].classList.remove("show");
  tabContent[2].classList.remove("show");

  tabsBtn[0].classList.remove("orange");
  tabsBtn[1].classList.remove("orange");
  tabsBtn[2].classList.remove("orange");

  //마지막에서 1번 버튼이 클릭되었으니 show를 0번 버튼에 추가만하면
  // 된다.
  tabContent[1].classList.add("show");
  tabsBtn[1].classList.add("orange");
});

// 2번 버튼을 클릭하면
tabsBtn[2].addEventListener("click", function () {
  tabContent[0].classList.remove("show");
  tabContent[1].classList.remove("show");
  tabContent[2].classList.remove("show");

  tabsBtn[0].classList.remove("orange");
  tabsBtn[1].classList.remove("orange");
  tabsBtn[2].classList.remove("orange");

  //마지막에서 2번 버튼이 클릭되었으니 show를 0번 버튼에 추가만하면
  // 된다.
  tabContent[2].classList.add("show");
  tabsBtn[2].classList.add("orange");
});
