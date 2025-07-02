import React from 'react';
import Olog2n from '../components/Olog2n';
import Onlog2n from '../components/Onlog2n';
import ObjectBigO from '../components/ObjectBigO';

export default function TimeComplexity() {
  return (
    <div>
      <h1>로그 시간 복잡도</h1>
      <Olog2n />
      <Onlog2n />

      <ObjectBigO />
    </div>
  );
}
