import { useState } from 'react';

export function useInput() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const resetValue = () => {
    setValue('');
  };

  return {
    value,
    handleInputChange,
    resetValue,
  };
}
