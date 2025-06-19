import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={'/contact'}>Contact</Link>{' '}
      <Link to={'/comments'}>Comments</Link>
      <h4>카카오 로그인</h4>
      <Link to={'kakao'}>카카오 로그인</Link>
    </>
  );
}

export default App;

/*
//사용자의 정보를 미리 가지고 오는 컴포넌트 생성
const Profile = () => {
  //useLoaderData()
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h1>user Profile</h1>
      <p>{user.name}</p>
    </div>
  );
};
const NotFound = () => <h1>404 - Page Not Found</h1>;
//라우터 정의
const router = createBrowserRouter([
  {
    path: '/user/:id',
    element: <Profile />,
    loader: async ({ params }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      console.log(res);
      if (res.ok) {
        return res.json();
      } else console.error('data 로드 실패');
    },
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
*/

/**
// page 컴포넌트
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

// create browser-router with Object type
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*', //path로 경로를 설정하지 않은 모든 url
    element: <NotFound />,
  },
]);

 */
