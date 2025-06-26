# \[Day34] 25.06.26 배운 내용 정리 - 트리(Tree)와 재귀

---

### 💻 실습 화면

![실습 화면](./오전%20배운내용%20실습화면.gif)

---

## 🧠 알고리즘: 트리(Tree)

### 트리란?

- 계층적 구조를 표현하는 자료구조
- 시작점(루트)에서 출발해서 여러 개의 자식을 가지며 뻗어나가는 구조
- 리액트에서는 트리를 재귀 컴포넌트로 렌더링함

### 프론트에서 자주 쓰이는 트리 종류

#### 1. 일반트리

- 자식 노드 수에 제한이 없음
- **사용 예시**: 댓글 구조, 사이드 메뉴 등 UI 구조

#### 2. 이진트리

- 왼쪽과 오른쪽 자식 각각 1개, 최대 2개만 가질 수 있음
- **사용 예시**: 정렬된 데이터의 추가/삭제 (주로 백엔드 로직)

#### 3. 트라이(Trie)

- 문자열 검색에 특화된 트리
- **사용 예시**: 자동완성, 검색어 추천

---

## 🔁 재귀(Recursion)

- **재귀적 UI 라이브러리**: [`react-sortable-tree`](https://github.com/frontend-collective/react-sortable-tree)
- **트리 시각화 라이브러리**: [`react-d3-tree`](https://github.com/bkrem/react-d3-tree)

### 재귀 함수 기본 예시

```js
function show(cnt) {
  console.log('show 함수 시작!', cnt);
  if (cnt >= 5) {
    console.log('종료 조건 달성');
    return; // 함수 종료
  }
  show(cnt + 1);
  console.log('show 함수 종료!');
}
```

- ✅ 재귀는 반드시 **종료 조건**이 필요함!

### 📌 팩토리얼 예제 (React + 재귀)

```jsx
const [total, setTotal] = useState(1);
function factorial(fac, result = 1) {
  console.log('호출됨');
  if (fac === 1) return;
  console.log(`${result} * ${fac} = ${result * fac}`);
  result = result * fac;
  setTotal(result);
  return fac * factorial(fac - 1, result);
}
```

- `useState`를 사용하여 계산 결과를 화면에 반영

---

## 🔍 트리 순회(Tree Traversal)

### 1. 깊이 우선 순회 (DFS)

#### 전위 순회 (Preorder)

- [실습 코드](./src/components/Preorder.jsx)
- 검색 순서: **루트 -> 왼쪽 -> 오른쪽**
- ✅ 트리 출력/복사에 유리

#### 중위 순회 (Inorder)

- [실습 코드](./src/components/Inorder.jsx)
- 검색 순서: **왼쪽 -> 부모 -> 오른쪽**
- ✅ 댓글 구조 표현 등에서 사용

#### 후위 순회 (Postorder)

- [실습 코드](./src/components/Postorder.jsx)
- 검색 순서: **왼쪽 -> 오른쪽 -> 부모**
- ✅ 디렉토리 삭제, 서브트리 합계 등에서 사용

### 2. 너비 우선 순회 (BFS)

- 레벨(수평) 순서대로 순회함
- 루트(시작점)로부터 가장 가까운 노드부터 차례대로 탐색
- ✅ 최단 경로 찾기, 레벨 단위 탐색, 그래프의 연결성 판단, 웹 크롤링 등에서 사용

---

## 💬 정적 댓글 트리를 재귀로 표현하기

### 📂 CommentsPage.jsx

```jsx
import React from 'react';
import { comments } from '../data/CommentsData';
import Comments from '../components/Comments';

export default function CommentsPage() {
  return (
    <div>
      <h1>코멘트 확인하기</h1>
      <div className='comments-wrapper'>
        {comments.map((c) => (
          <Comments key={c.id} tree={c} />
        ))}
      </div>
    </div>
  );
}
```

### 🧩 Comments.jsx

```jsx
import React from 'react';

export default function Comments({ key, tree, level = 0 }) {
  return (
    <div
      key={key}
      style={{
        marginLeft: level * 15,
        borderLeft: '1px solid #ccc',
        paddingLeft: 8,
        marginBottom: 10,
      }}>
      <p>💌 {tree.text}</p>
      {tree.children.map((child) => (
        <Comments key={child.id} tree={child} level={level + 1} />
      ))}
    </div>
  );
}
```

### ✨ 설명

- `tree`: 현재 댓글 데이터
- `level`: 들여쓰기 수준 (댓글의 깊이)
- `map`으로 자식 댓글들을 재귀적으로 렌더링
- `marginLeft`를 통해 시각적 계층 표현
- 데이터는 전역 상태(Context)로 관리하는 것이 일반적이나, 여기선 **정적 데이터**를 사용함
