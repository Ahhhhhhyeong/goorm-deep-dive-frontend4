import React, { useState } from 'react';

export default function useSelect(initial = 'title') {
  const [value, setValue] = useState(initial);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
}
