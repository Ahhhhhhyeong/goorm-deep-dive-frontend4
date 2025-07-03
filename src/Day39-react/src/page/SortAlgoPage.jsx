import React from 'react';
import SelectionSort from '../components/SelectionSort';
import InsertSort from '../components/InsertSort';

export default function SortAlgoPage() {
  return (
    <div>
      <h1>오전 수업 내용</h1>
      <SelectionSort />
      <InsertSort />
    </div>
  );
}
