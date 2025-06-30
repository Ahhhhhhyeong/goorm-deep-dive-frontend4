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
import RefTest from './pages/RefTest.jsx';
import LikeBoard from './Day33/pages/LikeBoard.jsx';
import Timer from './Day33/pages/Timer.jsx';
import Game from './Day33/pages/Game.jsx';
import TreeAlgorithmPractices from './Day34/pages/TreeAlgorithmPractices.jsx';
import ListTree from './Day34/pages/ListTree.jsx';
import CompanyTree from './Day34/pages/CompanyTree.jsx';
import GameTree from './Day34/pages/GameTree.jsx';
import UseReducerPractices from './Day33/pages/UseReducerPractices.jsx';
import GraphPractices from './Algorithm/page/GraphPractices.jsx';
import DirectedGraph from './Algorithm/components/DirectedGraph.jsx';
import SortPracties from './Algorithm/page/SortPractices.jsx';
import QuickSortNumArr from './Algorithm/components/QuickSortNumArr.jsx';
import MinHeap from './Algorithm/components/MinHeap.jsx';
import StringLengSort from './Algorithm/components/StringLengSort.jsx';

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
  {
    path: '/reftest',
    element: <RefTest />,
  },
  {
    path: '/reduceprcd',
    element: <UseReducerPractices />,
    children: [
      {
        path: 'likeboard',
        element: <LikeBoard />,
      },
      {
        path: 'timer',
        element: <Timer />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
  {
    path: '/treeprcd',
    element: <TreeAlgorithmPractices />,
    children: [
      {
        index: true, // 기본 진입
        element: <ListTree />,
      },
      {
        path: 'list',
        element: <ListTree />,
      },
      {
        path: 'company',
        element: <CompanyTree />,
      },
      {
        path: 'game',
        element: <GameTree />,
      },
    ],
  },
  {
    path: '/graphprcd',
    element: <GraphPractices />,
    children: [
      {
        index: true, // 기본 진입
        element: <DirectedGraph />,
      },
      {
        path: 'directed',
        element: <DirectedGraph />,
      },
    ],
  },
  {
    path: '/sortprcd',
    element: <SortPracties />,
    children: [
      {
        index: true, // 기본 진입
        element: <QuickSortNumArr />,
      },
      {
        path: 'directed',
        element: <QuickSortNumArr />,
      },
      {
        path: 'minHeap',
        element: <MinHeap />,
      },
      {
        path: 'stringSort',
        element: <StringLengSort />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
