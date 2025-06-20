import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KakaoLogin from './kakao/KakaoLogin.jsx';
import KakaoMap1 from './kakao/KakaoMap1.jsx';
import NaverLogin from './naver/NaverLogin.jsx';

// create router obejct
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/kakaologin',
    element: <KakaoLogin />,
  },
  {
    path: '/callback',
    element: <KakaoLogin />,
  },
  {
    path: '/kakaomap',
    element: <KakaoMap1 />,
  },
  {
    path: '/naverlogin',
    element: <NaverLogin />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
