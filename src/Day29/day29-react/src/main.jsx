import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact, { contactAction } from './components/Contact.jsx';
import Comments, { commentLoader } from './components/Comments.jsx';
import KakaoLogin from './components/KakaoLogin.jsx';

// create router obejct
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  //page 로딩 지연 : defer()
  {
    path: '/comments',
    element: <Comments />,
    loader: commentLoader,
  },
  //action form 전송 시 자동으로 실행해서 이동하는 설정
  {
    path: '/contact',
    element: <Contact />,
    action: contactAction,
  },
  {
    path: '/kakao',
    element: <KakaoLogin />,
  },
  {
    path: '/callback',
    element: <KakaoLogin />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
