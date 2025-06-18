import OverView from './components/OverView';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<OverView />} />
          {/* <Route path='overview' element={<OverView />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
