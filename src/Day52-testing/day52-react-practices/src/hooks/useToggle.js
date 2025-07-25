import { useState } from 'react';

export function useToggle(isOpen = false) {
  const [flag, setFlag] = useState(isOpen);

  const setTrue = () => {
    setFlag(true);
  };

  const setFalse = () => {
    setFlag(false);
  };

  const toggle = () => {
    setFlag((prev) => !prev);
  };

  return [
    flag,
    {
      setTrue,
      setFalse,
      toggle,
    },
  ];
}
