import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Recursive from './components/Recursive';
import Preorder from './components/Preorder';
import Inorder from './components/Inorder';
import Postorder from './components/Postorder';
import CommentsPage from './pages/CommentsPage';
import Root from './pages/Root';
import Header from './pages/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/recursive' element={<Recursive />} />
        <Route path='/preorder' element={<Preorder />} />
        <Route path='/inorder' element={<Inorder />} />
        <Route path='/postorder' element={<Postorder />} />
        <Route path='/comment' element={<CommentsPage />} />
      </Routes>
    </>
  );
}

export default App;
