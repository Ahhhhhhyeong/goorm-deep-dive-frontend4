import React, { useReducer } from 'react';

const likeInitState = {
  likes: 0,
  dislikes: 0,
};

function likeReducer(state, action) {
  console.log(state);
  switch (action.type) {
    case 'LIKE':
      return { likes: state.likes + 1, dislikes: state.dislikes };
    case 'DISLIKE':
      return { likes: state.likes, dislikes: state.dislikes + 1 };
  }
}

export default function Vote() {
  const [likeState, dispatch] = useReducer(likeReducer, likeInitState);

  return (
    <div className='m-3 grid grid-cols-4 '>
      <button onClick={() => dispatch({ type: 'LIKE' })}>👍</button>
      <span>{likeState.likes}</span>
      <button onClick={() => dispatch({ type: 'DISLIKE' })}>👎</button>
      <span>{likeState.dislikes}</span>
    </div>
  );
}
