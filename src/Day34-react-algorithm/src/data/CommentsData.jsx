// Static Comments
export const comments = [
  {
    id: 1,
    text: '안녕!', // 최상위 댓글
    children: [
      {
        id: 2,
        text: '안녕~',
        children: [
          { id: 6, text: '안녕~!', children: [] },
          { id: 7, text: 'ㅎㅇㅎㅇ', children: [] },
        ],
      }, // 대댓글
    ],
  },
  {
    id: 3,
    text: '리액트 재미있다!',
    children: [
      {
        id: 4,
        text: '대단한데?',
        children: [{ id: 5, text: 'ㅎㅎㅎ', children: [] }],
      },
      {
        id: 8,
        text: '리액트 네이티브는 뭐에요?',
        children: [],
      },
    ],
  },
];
