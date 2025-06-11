//Blog components 경로 추가
import Blog from './components/blog';

function AppEx() {
  return (
    <>
      <div className='AppEx'>
        <div className='black-nav'>
          <div>개발 블로그</div>
        </div>
        <Blog />
      </div>
    </>
  );
}

export default AppEx;
