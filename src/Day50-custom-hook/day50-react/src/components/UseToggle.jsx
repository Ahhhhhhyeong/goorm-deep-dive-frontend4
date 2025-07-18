import React, { useState } from 'react';

/* 토글의 초기값을 설정 하는 것으로 initial = false */
export default function UseToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
