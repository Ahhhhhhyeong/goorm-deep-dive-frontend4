import { Route, Routes } from 'react-router-dom';
import Root from './page/Root';
import './App.css';
import Header from './page/Header';
import GraphApp from './grapEx/UndirectedGraph';
import DirectedGraph from './grapEx/DirectedGraph';
import SubwayGraph from './grapEx/SubwayGraph';
import SubwayInput from './grapEx/SubwayInput';
import YoutubeSearch from './youtube/YoutubeSearch';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/undirect' element={<GraphApp />} />
        <Route path='/direct' element={<DirectedGraph />} />
        <Route path='/subway' element={<SubwayGraph />} />
        <Route path='/subwaysearch' element={<SubwayInput />} />
        <Route path='/yutube' element={<YoutubeSearch />} />
      </Routes>
    </>
  );
}

export default App;
