# 07.10 배운내용 정리

---

## Redux & Zustand

> 💡 Redux는 디렉터리 구조가 명확하게 되어있으며, `features/`, `store.js`, `slice` 등의 구조를 갖는 **모듈화된 구조(Module Structure)**를 따른다.
>
> 반면 Zustand는 이런 **구조적 제약이 거의 없는(unopninated)** 방식으로 , 단순 **훅** 기반의 상태 관리로 파일 하나면 충분하다.

#### 💡 요점 정리

| 항목           | Redux                         | Zustand               |
| -------------- | ----------------------------- | --------------------- |
| 구조적 제약    | 있음 (Opinionated)            | 없음 (Unopinionated)  |
| 디렉터리 구조  | 명확하고 모듈화               | 자유롭고 단순         |
| 상태 관리 방식 | Slice 중심 (Redux Toolkit 등) | Hook 기반 함수형 작성 |

---

### 코드로 알아보는 차이점

> 게시글을 작성하고 보여주는 기능

- Zustand 에서는 아래처럼 함수형으로 작성하여, 하나의 파일에서 모든 상태관리가 가능하다.

```js
// app/postStore.js
import { create } from 'zustand';

export const usePostStroe = create((set) => ({
  posts: [],
  addPost: ({ title, body }) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          id: Date.now(),
          title: title,
          body: body,
        },
      ],
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
```

---

- 실제 컴포넌트에서는 아래처럼 간단히 호출하여 사용할 수 있다.

```jsx
import React, { useState } from 'react';
import { usePostStroe } from '../../app/postStore';

export default function PostInput() {
  // 입력한 게시글을 저장하는 변수
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // zustand 상태관리 훅 호출
  const addPost = usePostStroe((state) => state.addPost);

  // 폼 입력 후 확인 버튼 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    // 입력한 상태값들을 넘겨주는 부분
    addPost({ title, body });
    setTitle('');
    setBody('');
  };
  // 생략
```

---
