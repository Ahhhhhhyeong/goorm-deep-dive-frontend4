const tabsBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

// 탭버튼을 클릭하면 현재 탭 컨텐츠에 붙어있는 show를 모두 제거
// 반복문을 사용해서 출력!!!
// for 사용
// for (let start = 0; start < 3; start = start + 1) {
//   tabsBtn[start].addEventListener("click", function () {
//     tabContent[0].classList.remove("show");
//     tabContent[1].classList.remove("show");
//     tabContent[2].classList.remove("show");

//     tabsBtn[0].classList.remove("orange");
//     tabsBtn[1].classList.remove("orange");
//     tabsBtn[2].classList.remove("orange");

//     //마지막에서 0번 버튼이 클릭되었으니 show를 0번 버튼에 추가만하면 된다.
//     tabContent[start].classList.add("show");
//     tabsBtn[start].classList.add("orange");
//   });
// }

// forEach문 사용
tabsBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    tabContent.forEach((ele, i) => {
      tabsBtn[i].classList.remove("orange");
      ele.classList.remove("show");
    });
    tabContent[index].classList.add("show");
    tabsBtn[index].classList.add("orange");
  });
});
