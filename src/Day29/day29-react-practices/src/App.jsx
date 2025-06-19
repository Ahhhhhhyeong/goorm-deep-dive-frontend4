import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login.jsx';
import LoginForm, { loginAction } from './components/LoginForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        index: true,
        path: '/loginform',
        element: <LoginForm />,
        action: loginAction,
      },
      {
        index: true,
        path: '/signup',
        element: <LoginForm />,
        action: loginAction,
      },
      {
        index: true,
        path: '/findpassword',
        element: <LoginForm />,
        action: loginAction,
      },
    ],
  },
]);
function App() {
  return (
    <div className='w-1vh h-[100vh] flex justify-center items-center bg-zinc-300'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
