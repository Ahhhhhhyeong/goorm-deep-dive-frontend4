import React from 'react';

export default function GameList({ nodes, clickState, toggle, level = 0 }) {
  return nodes.map((node) => {
    console.log(node.text);
    return (
      <button key={node.id} className='bg-blue-100 text-red-600 text-lg p-4 mr-3 rounded-xl'>
        {node.text}
      </button>
    );
  });
}
