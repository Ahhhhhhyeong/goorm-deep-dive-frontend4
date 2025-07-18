import { Route, Routes } from 'react-router-dom';
import Header from './util/Header';
import PostsPage from './pages/PostsPage';
import BlogDetail from './components/posts/BlogDetail';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/detail/:id' element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
