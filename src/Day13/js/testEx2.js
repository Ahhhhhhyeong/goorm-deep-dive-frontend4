//button 요소 불러오기
const todoBtn = document.getElementById('todoBtn');

//button event 설정
todoBtn.addEventListener('click', function(){
  //text 읽어오기
  const div = document.getElementById('todoThing');
  let content = div.value;

  if(content !== '') {
    const todoDiv = document.getElementById('todo-list');
    // 요소 만들고 추가!
    const divTag = document.createElement('div');
    divTag.setAttribute('class', 'todo-item');
    
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
    divTag.appendChild(btnTag);

    div.value = "";
    div.focus();
  }
});
