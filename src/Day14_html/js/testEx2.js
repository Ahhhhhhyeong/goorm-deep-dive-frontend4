const commentInput = document.getElementById("comment");
// 댓글 취소, 확인 버튼 폼
const commentForm = document.getElementById("commentForm");
const commentCancle = document.getElementById("commentCancel");
const commentOk = document.getElementById("commentOk");

let comments = [
  {
    userName: "티엘린",
    userImg: "",
    comments: "코멘트 내용!",
    date: "5일 전",
    replies: [
      { userName: "답글1", userImg: "", comments: "답글내용1", date: "5일 전" },
      { userName: "답글2", userImg: "", comments: "답글내용2", date: "5일 전" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  //dom 생성 시, 미리 만들어 둔 코멘트 생성
  if (comments) {
    comments.forEach((list, index) => {
      addComment(
        list.userName,
        list.userImg,
        list.comments,
        list.date,
        list.replies,
        index
      );
    });
  }
});

//댓글 창 입력 후 엔티키
commentInput.addEventListener("keydown", function (event) {
  if (event.isComposing) return;
  if (event.key == "Enter") putCommentList();
});
//댓글 창에 커서가 가게될 때
commentInput.addEventListener("focus", (event) => {
  commentForm.className = "d-flex flex-row-reverse gap-3 mb-3";
});
//댓글 창에 커서가 사라질 때
commentInput.addEventListener("blur", (event) => {
  //댓글창에 값이 있으면 버튼 사라지면안돼!
  if (commentInput.value == "") commentForm.className = "display-none";
});
// 댓글 버튼 활성화, 비활성화
commentInput.addEventListener("input", () => {
  if (commentInput.value.trim() !== "") {
    commentOk.className = "btn btn-primary rounded-pill";
  } else {
    commentOk.className = "btn btn-primary rounded-pill disabled";
  }
});
// 댓글 버튼 클릭
commentOk.addEventListener("click", () => putCommentList());
// 취소 버튼 클릭
commentCancle.addEventListener("click", () => {
  commentInput.value = "";
  commentForm.className = "display-none";
});

//댓글 리스트 값 추가
function putCommentList() {
  const commentText = commentInput.value;
  if (commentText == "") return;

  let userName = "testUser";
  let userImg = "../img/떡볶이.png";
  let date = "1일 전";
  comments.push({
    userName: userName,
    userImg: userImg,
    comments: commentText,
    date: date,
    replies: [],
  });
  let newIndex = comments.length - 1;
  addComment(userName, userImg, commentText, date, [], newIndex);
}

//댓글 추가 이벤트
function addComment(userName, userImg, commentText, date, replies, index) {
  const commentList = document.getElementById("commentList");

  let commentDiv = document.createElement("div");
  commentDiv.className = "d-flex align-items-start gap-3 commenet__List";

  let figure = document.createElement("figure");
  figure.className = "rounded-circle overflow-hidden avaterImg";
  if (userImg != "") {
    figure.innerHTML = `<img class='img-thumbnail' src='${userImg}' alt='avaterImg'>`;
  }

  let commentTextDiv = document.createElement("div");
  commentTextDiv.className = "flex-grow-1";

  const h6Tag = document.createElement("h6");
  h6Tag.className = "w-bold mb-1";
  h6Tag.innerHTML = `@${userName} <span class='text-muted small'>${date}</span>`;

  const commentPTag = document.createElement("p");
  commentPTag.className = "mb-2";
  commentPTag.innerText = commentText;

  const iconGroup = document.createElement("div");
  iconGroup.className = "d-flex align-items-center gap-2";

  const thumsUp = document.createElement("i");
  thumsUp.className = "bi bi-hand-thumbs-up";
  const goodSpan = document.createElement("span");
  goodSpan.className = "goodCount";
  const thumsDown = document.createElement("i");
  thumsDown.className = "bi bi-hand-thumbs-down";
  const repliesBtn = document.createElement("button");
  repliesBtn.className = "btn btn-sm btn-link";
  repliesBtn.textContent = "답글";
  repliesBtn.dataset.open = "false";

  // append
  commentList.appendChild(commentDiv);
  commentDiv.appendChild(figure);
  commentDiv.appendChild(commentTextDiv);
  commentTextDiv.appendChild(h6Tag);
  commentTextDiv.appendChild(commentPTag);
  commentTextDiv.appendChild(iconGroup);
  iconGroup.appendChild(thumsUp);
  iconGroup.appendChild(goodSpan);
  iconGroup.appendChild(thumsDown);
  iconGroup.appendChild(repliesBtn);

  repliesBtn.addEventListener("click", () => {
    //대댓글 달기!
    console.log("대댓글 버튼 클릭!");
    const isOpen = repliesBtn.dataset.open === "true";
    if (isOpen) return; // 열려있는 경우 그냥 넘기기
    else {
      const replyForm = document.createElement("div");
      replyForm.className = "comment__section__replies__form";

      const replyFlex = document.createElement("div");
      replyFlex.className = "d-flex align-items-start gap-3";
      const replyFigure = document.createElement("figure");
      replyFigure.className = "rounded-circle overflow-hidden avaterImg";
      const replyInput = document.createElement("input");
      replyInput.className = "form-control";
      replyInput.setAttribute("type", "text");
      replyInput.setAttribute("name", "replies");
      replyInput.setAttribute("placeholder", "답글 추가...");

      replyFlex.appendChild(replyFigure);
      replyFlex.appendChild(replyInput);

      const replyBtnGroup = document.createElement("div");
      replyBtnGroup.className = "d-flex flex-row-reverse gap-3 repliesForm";

      const buttonReplyOk = document.createElement("button");
      buttonReplyOk.className = "btn btn-primary rounded-pill repliesOk";
      buttonReplyOk.innerText = "댓글";

      buttonReplyOk.addEventListener("click", () => {
        const inputText = replyInput.value.trim();
        if (inputText == "") return;

        repliesListAdd(index, inputText); // 배열에 답글 추가
        replyForm.remove();
        repliesBtn.dataset.open = "false";

        removeReplies(commentTextDiv); // 기존 답글 제거        
        // 기존 replyButton 찾아서 텍스트만 업데이트
        const replyButton = commentTextDiv.querySelector(".replyButton");
        if (replyButton) {
          const countSpan = replyButton.querySelector("span");
          countSpan.innerText = ` 답글 ${comments[index].replies.length}`;
        } else { //button이 없는경우는 새로 만들어지는 경우!!!
          isReplyAppend(commentTextDiv, comments[index].replies, true);
        }
        repliesListAppend(comments[index].replies, commentTextDiv); // 새 답글 렌더링

      });

      const buttonReplyCancel = document.createElement("button");
      buttonReplyCancel.className =
        "btn btn-outline-secondary rounded-pill repliesCancel";
      buttonReplyCancel.innerText = "취소";

      buttonReplyCancel.addEventListener("click", () => {
        replyForm.remove();
        repliesBtn.dataset.open = "false";
      });

      replyBtnGroup.appendChild(buttonReplyOk);
      replyBtnGroup.appendChild(buttonReplyCancel);

      replyForm.appendChild(replyFlex);
      replyForm.appendChild(replyBtnGroup);
      commentTextDiv.appendChild(replyForm);
    }
  });

  // 답글이 있는 경우
  if (replies.length > 0) {
    isReplyAppend(commentTextDiv, replies, false);
  }

  commentInput.value = "";
  //commentInput.focus();
}

function removeReplies(ele) {
  const existing = ele.querySelectorAll(".comment__section__replies__list");
  if (existing) {
    existing.forEach((element) => {
      element.remove();
    });
  }
}

function isReplyAppend(commentTextDiv, replies, isOpen) {
  if (commentTextDiv.querySelector(".replyButton")) return; // 중복 방지

  const commentBtn = document.createElement("button");
  commentBtn.className = "btn btn-sm btn-link replyButton";
  commentBtn.dataset.open = isOpen;

  const chevron = document.createElement("i");
  chevron.className = isOpen ? "bi bi-chevron-up" : "bi bi-chevron-down";

  const repliyCount = document.createElement("span");
  repliyCount.innerText = ` 답글 ${replies.length}`;

  commentBtn.appendChild(chevron);
  commentBtn.appendChild(repliyCount);

  commentBtn.addEventListener("click", () => {
    const isClick = commentBtn.dataset.open === "true";

    if (isClick) {
      commentBtn.dataset.open = "false";
      chevron.className = "bi bi-chevron-down";
      removeReplies(commentTextDiv);
    } else {
      commentBtn.dataset.open = "true";
      chevron.className = "bi bi-chevron-up";
      repliesListAppend(replies, commentTextDiv);
    }
  });

  commentTextDiv.appendChild(commentBtn);
}

function repliesListAppend(replies, commentTextDiv) {
  console.log("relies click");
  // 기존 답글 DOM 제거
  removeReplies(commentTextDiv);

  replies.forEach((list) => {
    const replyDiv = document.createElement("div");
    replyDiv.className =
      "d-flex align-items-start gap-3 comment__section__replies__list";
    const figure = document.createElement("figure");
    figure.className = "rounded-circle overflow-hidden avaterImg__reply";
    if (list.userImg != "") {
      figure.innerHTML = `<img class='img-thumbnail' src='${list.userImg}' alt='avaterImg'>`;
    }
    const flexDiv = document.createElement("div");
    flexDiv.className = "flex-grow-1";
    const userTitle = document.createElement("h6");
    userTitle.className = "fw-bold mb-1";
    userTitle.innerHTML = `@${list.userName} <span class='text-muted small'>${list.date}</span>`;
    const commentP = document.createElement("p");
    commentP.className = "mb-2";
    commentP.innerText = list.comments;
    const iconGroup = document.createElement("div");
    iconGroup.className = "d-flex align-items-center gap-2";
    iconGroup.innerHTML = `<i class='bi bi-hand-thumbs-up'></i> <span></span>
                <i class='bi bi-hand-thumbs-down'></i>
                <button class='btn btn-sm btn-link'>답글</button>`;
    flexDiv.appendChild(userTitle);
    flexDiv.appendChild(commentP);
    flexDiv.appendChild(iconGroup);

    replyDiv.appendChild(figure);
    replyDiv.appendChild(flexDiv);

    commentTextDiv.appendChild(replyDiv);
  });
}

// 대댓글 리스트 추가
function repliesListAdd(index, inputText) {
  const reply = {
    userName: "답글1",
    userImg: "../img/떡볶이.png",
    comments: inputText,
    date: "방금 전",
  };

  comments[index].replies.push(reply);
}
