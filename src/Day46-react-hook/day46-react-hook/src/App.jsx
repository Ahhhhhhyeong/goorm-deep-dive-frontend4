import { useState } from 'react';
import UseFormEx2 from './components/study/UseFormEx2';
import UseFormEx3 from './components/study/UseFormEx3';
import SurveyForm from './components/study/SurveyForm';
import InterviewForm from './components/practices/InterviewForm';
import { Route, Routes } from 'react-router-dom';
import StepNormal from './components/practices/step/StepNormal';
import StepdHope from './components/practices/step/StepdHope';
import StepisWorked from './components/practices/step/StepisWorked';
import StepIntro from './components/practices/step/StepIntro';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 다양한 input 처리 */}
      {/* <UseFormEx2 /> */}
      {/* 예외처리 */}
      {/* <UseFormEx3 /> */}
      {/* <SurveyForm /> */}
      {/* 실습 */}

      <Routes>
        <Route path='/' element={<InterviewForm />}>
          <Route path='notice-1' element={<StepNormal />} /> {/* 기본정보 */}
          <Route path='notice-2' element={<StepdHope />} /> {/* 희망부서 */}
          <Route path='notice-3' element={<StepisWorked />} /> {/* 경력유무 */}
          <Route path='notice-4' element={<StepIntro />} /> {/* 자기소개 */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
