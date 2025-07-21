import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter Test : {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
