import React from 'react';
import ReactSelectEx from '../components/select/ReactSelectEx';
import ReactSelectController from '../components/select/ReactSelectController';

export default function ReactSelectPage() {
  return (
    <div className='m-auto border rounded border-zinc-400 shadow-md max-w-xl p-4 '>
      <h2 className='text-lg'>리엑트 셀렉트 라이브러리 사용해보기</h2>
      <ReactSelectEx />
      <ReactSelectController />
    </div>
  );
}
