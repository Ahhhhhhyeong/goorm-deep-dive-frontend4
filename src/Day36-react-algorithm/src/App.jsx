import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeapEx from './HeapEx/HeapEx';
import Header from './pages/Header';
import QuickSort from './quicksort/QuickSort';
import HeapPractices from './HeapEx/HeapPractices';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/heap' element={<HeapEx />} />
        <Route path='/heapPractices' element={<HeapPractices />} />
        <Route path='/quicksort' element={<QuickSort />} />
      </Routes>
    </>
  );
}

export default App;
