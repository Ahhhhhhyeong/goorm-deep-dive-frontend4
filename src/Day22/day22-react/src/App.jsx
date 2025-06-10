// 전역변수처럼 여러 컴포넌트가 동일한 디자인을 가지고 싶을 경우에는 App(메인화면)에서 디자인하면 좋다!
import './App.css';
import ArticleList from './components/ArticleList';
import Counter from './components/Counter';

function App() {
  return (
    <>
      {/* <Counter /> */}
      <ArticleList />
    </>
  );
}

export default App;
