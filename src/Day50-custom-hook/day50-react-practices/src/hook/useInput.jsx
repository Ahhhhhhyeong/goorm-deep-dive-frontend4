import React, { useState } from 'react';

export default function useInput(initial = '') {
  const [value, setValue] = useState(initial);
  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');
  return { value, onChange };
}
