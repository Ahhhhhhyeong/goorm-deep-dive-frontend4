import React from 'react';
import AlgoCospro1 from '../components/Question/AlgoCospro1';
import AlgoCospro2 from '../components/Question/AlgoCospro2';

export default function AlgoCosproPage() {
  return (
    <div className='section'>
      <h2>cospro 문제 풀이</h2>
      <AlgoCospro1 />
      <AlgoCospro2 />
    </div>
  );
}
