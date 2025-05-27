# [Day14] 25.05.27 배운 내용 정리

---
### 🔗 실습 내용 
- [오브젝트 타입 실습](./js/objectEx1.js)
- [오브젝트 객체 생성 및 화면 출력](./js/objectEx2.js)
- [배열 안에 오브젝트 객체 생성](./js/objectEx3.js)
- [상품 카드 진열 실습](./js/testEx1.js)
  - ![실습1 사진](./img/실습1.png)


---
## Object Type
> js에서 문자와 여러가지 이미지나 숫자 등을 한꺼번에 저장할 수 있는 타입
- 유지보수할 때 가독성을 높인다.
- 구조화 된 데이터를 표현할 수 있다.
- key와 value가 한 쌍으로 쓰인다.
  - `{key : value}` 
- 사용예시 : 사람에 대한 정보, 물건에 대한 정보를 저장 


#### 사람에 대한 정보를 저장하는 예시
```js
let user = ["Ahyeong", 20, "Seoul"]; //=> 코드를 읽는 사람이 추측을 해야함.

// 코드(데이터)를 명확하게 이해가 가능!(값에 대한 설명?이 추가되어있다)
let user2 = {
  name: "Ahyeong",
  age : 20,
  address : "Seoul"
};
```
- `user` : 배열의 값이 어떤것을 나타내는지 추측을 해야한다. 데이터를 저장을 하고있는 의미가 없다.
- `user2` : key와 value가 명확하게 있어서 데이터를 명확하게 알 수 있다.


---

## 자료구조(간단하게)
### 큐 (Queue)
> 먼저 들어간 데이터가 먼저 나간다(Frist In Frist Out => FIFO)
- 주로 사용 하는 곳 : 대기줄, 대기표 등
- `shift()` : 제일 먼저 들어간 배열의 값을 먼저 꺼냄

#### 큐 사용 예제
- 실사용 예제 : 식당 웨이팅호출
```js
// 식당 웨이팅
let waiting = [];
waiting.push('지수');
waiting.push('로제');
waiting.push('제니');
waiting.push('리사'); //waiting = ['지수','로제','제니','리사']
alert(`${waiting.shift()} 님 들어오세요!`); //waiting = ['로제','제니','리사']
```

### 스택 (Stack)
> 먼저 들어간 데이터가 가장 마지막에 나온다 (Last In First Out => LIFO)
- 주로 사용하는 곳 : 뒤로가기
- `pop()` : 가장 나중에 들어간 배열의 값을 나중에 꺼냄

#### 스택 사용 예제
```js
let stack = [];
stack.push('구글');
stack.push('네이버');
stack.push('쿠팡');
console.log(stack.pop()); // 쿠팡
```