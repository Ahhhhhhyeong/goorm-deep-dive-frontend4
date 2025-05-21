const wrap = document.getElementById("insta__main");
wrap.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
wrap.style.filter = "blur(2px)";
wrap.style.pointerEvents = "none";

// popup 닫기
function popup_close(params) {
  const popup = params.parentElement;
  popup.classList.add("p-disable");

  //배경 컬러 검정초기화
  wrap.style.backgroundColor = "";
  wrap.style.filter = "";
  wrap.style.pointerEvents = "";
}

// 아이콘 클릭 이벤트(직접 add, remove 이벤트를 줌)
function fn_click1(params) {
  // 눌릴때 색상 변화
  /* 
    classList => ['bi', 'bi-iconname', 'icon-위치'] 순으로 되어있지만
    remove나 add를 사용 시, 순서가 달라질 수 있어 .find로 찾음!!!
    순서가 달라지면서 위치 효과를 넣은 클래스가 사라지는 현상 발생!
  */
  console.log(params.classList);
  let baseClass = [...params.classList].find((cls) => cls.startsWith("bi-"));
  let changeClass = null;

  // 채워진 아이콘 클래스 이름 변경
  if (baseClass.endsWith("-fill")) {
    changeClass = baseClass.replace("-fill", "");
  } else {
    changeClass = baseClass.replace(baseClass, baseClass + "-fill");
  }

  // 기존 클래스 지우고 새로운 클래스 추가
  if (changeClass) {
    params.classList.remove(baseClass);
    params.classList.add(changeClass);
  }
  console.log(params.classList);

  const likeCountEl = document.getElementById("like_count");
  // 좋아요 클릭 시, 인원추가(클릭 해제하면 인원 차감)
  if (likeCountEl && baseClass.includes("heart")) {
    let count = likeCountEl.textContent;
    let num = parseInt(count);

    if (baseClass.endsWith("-fill")) {
      likeCountEl.textContent = `${num - 1}명`;
    } else {
      likeCountEl.textContent = `${num + 1}명`;
    }
  }
}

// 아이콘 클릭 이벤트 (토글 활용)
function fn_click(params) {
  const match = [...params.classList].find(el => el.includes("heart") || el.includes("bookmark"));
  if(match?.includes("heart")){
    heartClick(params);
  } else if(match?.includes("bookmark")){
    bookmarkClick(params);
  }
}

function heartClick(params) {
  params.classList.toggle("bi-heart-fill");
  params.classList.toggle("bi-heart");
  
  // 좋아요 클릭 시, 인원추가(클릭 해제하면 인원 차감)
  const likeCountEl = document.getElementById("like_count");
  let num = parseInt(likeCountEl.textContent);
  
  // bi-heart-fill이 있으면 +1 없으면 -1
  if(params.classList.contains("bi-heart-fill")){
    likeCountEl.textContent = `${num+1}명`;
  } else {
    likeCountEl.textContent = `${num-1}명`;
  }
}

function bookmarkClick(params) {
  params.classList.toggle("bi-bookmark-fill");
  params.classList.toggle("bi-bookmark");
}
