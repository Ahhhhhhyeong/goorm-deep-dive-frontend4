let noticeList = [];

const btn = document.getElementById('addBtn');
const deleteBtn = document.getElementsByClassName('delete-btn');

btn.addEventListener('click',addNotice);

function addNotice() {
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  // console.log(title, content);
  if(title === "") {
    alert("제목을 입력해주세요!!!");
    return;
  } else {
    noticeList.push([title, content]);
    
    // li, h2, button 요소 새로 만들기   
    let liTag = document.createElement("li");
    let h2Tag = document.createElement("h2");
    let pTag = document.createElement("p");
    let deletButton = document.createElement("button");
    
    // 내용 추가
    h2Tag.innerText = title;
    h2Tag.setAttribute("id", noticeList.length-1);
    pTag.innerText = content;
    deletButton.innerText = "삭제";
    deletButton.setAttribute("class", "delete-btn");
     
    // ul 요소 불러오기
    let ulTag = document.getElementById("postList");
    
    // 요소들 html에 출력
    ulTag.appendChild(liTag);
    liTag.appendChild(h2Tag);
    liTag.appendChild(pTag);
    liTag.appendChild(deletButton);
  }
  console.log(noticeList);
}
