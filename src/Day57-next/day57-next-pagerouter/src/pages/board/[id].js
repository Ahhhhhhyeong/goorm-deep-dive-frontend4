// board/[id].js
// 더미데이터 가져오기
import { blogBoards } from './data';

// Next.js에서 정적인 동적페이지를 만들 때 반드시 필요한 함수!
export function getStaticPaths() {
  const paths = blogBoards.map((board) => ({
    params: { id: board.id },
  }));

  console.log('실제 동적 페이지 경로: ', path);

  /*
  fallback 
  - 이 페이지는 오직 getStaticPaths
  */
  return { path, fallback: false };
}

export function getStaticProps({ params }) {
  const board = blogBoards.find((blog) => blog.id === params.id);

  return {
    props: { board },
  };
}

export default function BlogDetail({ board }) {
  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.content}</p>
    </div>
  );
}
