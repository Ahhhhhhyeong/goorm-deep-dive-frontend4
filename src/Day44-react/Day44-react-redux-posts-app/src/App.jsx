import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
}

export default App;

/**
폴더 구조
app/ 
 - 리덕스 전체 스토어를 만든 설정 파일을 넣어둠

features/
  - 하나의 기능 단위로 쪼갠 slice(조각)을 저장
  - 보통은 폴더별로 나뉜다.


 */
