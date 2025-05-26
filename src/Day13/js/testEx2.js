//button 요소 불러오기
const todoBtn = document.getElementById('todoBtn');
//input 요소 불러오기
const textInput = document.getElementById('todoThing');

//button event 설정
todoBtn.addEventListener('click', addTodo);

textInput.addEventListener('keydown', function(event){
  console.log(event.key);
  if(event.isComposing) return;
  if(event.key === 'Enter') addTodo();
});


function addTodo() {
  //text 읽어오기
  const div = document.getElementById('todoThing');
  let content = div.value;

  if(content !== '') {
    const todoDiv = document.getElementById('todo-list');
    // 요소 만들고 추가!
    // 입력한 날짜로 묶기!!
    const divTag = document.createElement('div');
    divTag.setAttribute('class', 'todo-item');
    
    const spanDate = document.createElement('span');
    let today = new Date();
    let date = today.getFullYear()+"/"+(today.getMonth() + 1)+"/"+today.getDate();
    console.log(date);
    spanDate.innerText = date;

    const spanTag = document.createElement('span');
    spanTag.innerText = content;
    
    const btnTag = document.createElement('button');
    btnTag.innerText = '삭제';
    btnTag.setAttribute('class', 'btn btn-danger btn-sm');
    btnTag.addEventListener('click', (event)=>{
      const clickedBtn = event.target;
      const removeItem = clickedBtn.parentElement;
      removeItem.remove();
    });
    
    // html에 출력
    todoDiv.appendChild(divTag);
    divTag.appendChild(spanTag);
    divTag.appendChild(spanDate);
    divTag.appendChild(btnTag);

    div.value = "";
    div.focus();
  }
}