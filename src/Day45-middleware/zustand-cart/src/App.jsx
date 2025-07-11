import { Route, Router, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<CartList />} />
      </Routes>
    </>
  );
}

export default App;
