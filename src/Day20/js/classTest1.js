/** 비동기 통신
fetch(주소=url) :데이터를 (주소)에서 요청(다운)
.then() :요청한 데이터가 정상적으로 들어왔다면 실행
.catch() :만약 예외가 발생했을 때 처리  

=> 검색 속도를 빠르게 하기위해 id값(유일한값)을 기준으로 검색하면 빠르게 처리할 수 있음
 */

class Posts {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

//1. https://jsonplaceholder.typicode.com/ 에제 사이트에서 데이터 다운
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response.json());
  })
  .catch();
