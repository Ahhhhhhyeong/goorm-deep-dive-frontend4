/** 클래스 예 */
class TreeNode {
  // 값을 받기 위해서 생성할 때 값을 초기화하는 구조
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 실제 틀을 만들었기 때문에 메모리 생성
const node1 = new TreeNode(40);

/** 사람의 대한 정보를 생성하는 클래스 */
class User {
  constructor(name, age) {
    //현재 생성되는 변수의 이름과 나이 저장
    // this.name = '무명씨'; // 이렇게 고정을 시켜놓으면 고정값만 나옴
    // this.age = 2;
    this.name = name;
    this.age = age;
  }
}

const user1 = new User('Alice', 20);
console.log(user1.name);

/** 동물 클래스: 이름, 품종 */
class Animals {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}
// 여러명의 동물들을 저장할 수 있는 저장공간을 생성
const dog = new Animals('강아지', '믹스견');
const cat = new Animals('나비', '턱시도');
