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
    comments.forEach((list) => {
      addComment(
        list.userName,
        list.userImg,
        list.comments,
        list.date,
        list.replies
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
  addComment(userName, userImg, commentText, date, []);
}

//댓글 추가 이벤트
function addComment(userName, userImg, commentText, date, replies) {
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

  let h6Tag = document.createElement("h6");
  h6Tag.className = "w-bold mb-1";
  h6Tag.innerHTML = `@${userName} <span class='text-muted small'>${date}</span>`;

  let commentPTag = document.createElement("p");
  commentPTag.className = "mb-2";
  commentPTag.innerText = commentText;

  let iconGroup = document.createElement("div");
  iconGroup.className = "d-flex align-items-center gap-2";
  iconGroup.innerHTML = `
    <i class='bi bi-hand-thumbs-up'></i> <span></span>
    <i class='bi bi-hand-thumbs-down'></i>
    <button class='btn btn-sm btn-link'>답글</button>`;

  commentList.appendChild(commentDiv);
  commentDiv.appendChild(figure);
  commentDiv.appendChild(commentTextDiv);
  commentTextDiv.appendChild(h6Tag);
  commentTextDiv.appendChild(commentPTag);
  commentTextDiv.appendChild(iconGroup);

  if (replies.length > 0) {
    const commentBtn = document.createElement("button");
    commentBtn.className = "btn btn-sm btn-link";
    commentBtn.innerHTML = `<i class='bi bi-chevron-down'></i> 답글 <span>${replies.length}</span>`;
    commentBtn.addEventListener('click', ()=>{
      console.log("코멘트click");
    });
    commentTextDiv.appendChild(commentBtn);
  }

  commentInput.value = "";
  commentInput.focus();
}
