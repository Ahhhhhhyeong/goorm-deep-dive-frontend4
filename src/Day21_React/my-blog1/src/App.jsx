import './App.css';
import Card from './components/Card';

function App() {
  let userInfo = [
    {
      name: 'James Kim',
      newDisplay: true,
      job: '프론트엔드 개발자',
      avaterImg:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
      name: 'Anna Young',
      newDisplay: false,
      job: '백엔드 개발자',
      avaterImg:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
    },
    {
      name: 'Bob Yu',
      newDisplay: false,
      job: '프론트엔드 개발자',
      avaterImg:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
  ];
  return (
    <>
      {userInfo.map((value, index) => (
        <Card userInfo={value} key={index} />
      ))}
    </>
  );
}

export default App;
