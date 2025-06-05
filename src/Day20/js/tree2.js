//루트를 기준으로 데이터가 있다면, 다음 데이터를 입력 받는다.
//루트의 값보다 작으면 left로!
//루트의 값보다 크면 right로!

/**
 * 1. 추가가 되면 노드를 생성
 * 2. 루트에 노드를 생성을 하는데, 루트 노드가 있는지 없는지 확인
 * 2-1. 루트에 노드가 없으면 루트에 노드 추가!
 * 2-2. 루트에 노드가 있는 경우
 * 2-2-1. 해당 노드가 root보다 큰지, 작은지 확인
 * 2-2-2. root보다 큰 경우 : right / 작은 경우 : left
 * 3. 화면에 표현
 * 3-1. root는 최상단에 표현
 * 3-2. left
 * 3-2-1. 처음 들어온 값이 상단 -> 2,3번은 하단자식 ...
 * 3-3. right
 * 3-3-1. 처음 들어온 값이 상단 -> 2,3번은 하단자식 ...
 */

// 노드 클래스 생성
class Node {
  constructor(value, parentDom = null) {
    this.value = value;
    this.left = null; //처음 노드를 만들면 자식노드는 없다
    this.right = null;

    //DOM 그리기
    this.nodeEl = document.createElement('div');
    this.nodeEl.className = 'node';
    this.nodeEl.innerText = value;

    //부모요소가 있는경우 부모요소 아래에 붙이기
    if (parentDom) {
      const wrapper = document.createElement('div');
      wrapper.className = 'child-wrapper';
      wrapper.appendChild(this.nodeEl);

      //children 박스 만들기
      const childrenBox = document.createElement('div');
      childrenBox.className = 'children';
      wrapper.append(childrenBox);
      this.childrenBox = childrenBox;

      parentDom.appendChild(wrapper);
    } else {
      //root인 경우!!
      const tree = document.getElementById('tree');
      const wrapper = document.createElement('div');
      wrapper.className = 'child-wrapper';
      wrapper.appendChild(this.nodeEl);

      const childrenBox = document.createElement('div');
      childrenBox.className = 'children';
      wrapper.appendChild(childrenBox);
      this.childrenBox = childrenBox;

      tree.appendChild(wrapper);
    }
  }

  insert(value) {
    //입력한 값이 루트값보다 작은 경우 왼쪽으로 진행
    if (value < this.value) {
      //왼쪽 노드(자식)에 아무것도 없는 경우
      if (this.left === null) {
        this.left = new Node(value, this.childrenBox);
      }
      //자식이 있는 경우
      else {
        this.left.insert(value);
      }
    }
    //입력한 값이 루트값보다 큰 경우 오른쪽으로 진행
    if (value > this.value) {
      if (this.right === null) {
        this.right = new Node(value, this.childrenBox);
      } else {
        this.right.insert(value);
      }
    }
  }
}

//시작점 root
let root = null;

function insert() {
  const input = document.getElementById('inputValue');
  const value = input.value;

  if (value === '') return alert('값을 입력하세요');

  if (root === null) {
    root = new Node(value);
    alert('루트 노드 생성됨!');
  } else {
    root.insert(value);
  }

  input.value = '';
  input.focus();
}

function insert_bk() {
  // 노드 추가하기
  const value = document.getElementById('inputValue').value;
  console.log(value);
  // 예외처리
  if (value === '') return alert('값을 입력하세요!'); //함수종료!

  // 무조건 루트에 추가할 수는 없다!
  // - 혹시 루트라는 변수가 null이니?
  //   - 현재 생성한 노드를 루트에 저장하면 끝난다.
  // - 루트가 null이 아니라 객체 있을경우
  //   - 루트와 비교해서 값이 작으면 왼쪽으로 저장 될 수있도록 설정한다.

  //처음 트리를 저장하는 경우 root가 비어있을 수있다.
  if (root === null) {
    // 노드 생성
    root = new Node(value);
    console.log(root);

    // 루트노드가 들어갈 요소를 찾는다.
    const tree = document.getElementById('tree');

    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.innerText = root.value;

    tree.appendChild(nodeEl);

    return alert('루트를 추가했습니다!');
  }

  // 루트보다 작으면 왼쪽 자식을 추가한다.
  if (value < root.value) {
    root.left = new Node(value);
    console.log('왼쪽!');

    const tree = document.getElementById('tree');

    //시각적으로 자식의 단락이 생성되야된다.
    const childrenBox = document.createElement('div');
    childrenBox.className = 'children';

    const nodeEl = document.createElement('div');

    nodeEl.className = 'node';
    nodeEl.innerText = value;

    childrenBox.appendChild(nodeEl);
    tree.appendChild(childrenBox);
  }
}
