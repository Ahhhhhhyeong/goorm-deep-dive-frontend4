// main.jsx 또는 index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/css/index.css';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import LoginForm, { loginAction } from './components/LoginForm.jsx';
import KakaoLogin from './api/KakaoLogin.jsx';
import Product from './pages/Product.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App은 단순 컴포넌트
  },
  {
    path: '/login',
    element: <Login />,
    children: [
      {
        index: true, // 기본 진입
        element: <LoginForm />,
        action: loginAction,
      },
      { path: 'loginform', element: <LoginForm />, action: loginAction },
      { path: 'signup', element: <LoginForm />, action: loginAction },
      { path: 'findpassword', element: <LoginForm />, action: loginAction },
    ],
  },
  {
    path: '/kakaologin',
    element: <KakaoLogin />,
  },
  {
    path: '/callback',
    element: <Login />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
