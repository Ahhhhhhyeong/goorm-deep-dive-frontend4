import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import PostInput from './components/posts/PostInput';
import PostList from './components/posts/PostList';

function App() {
  return (
    <>
      <div className='flex items-start justify-center min-h-screen bg-gray-100 p-8'>
        {/* 좌측: Todo */}
        <div className='w-full max-w-md mr-8 space-y-4'>
          <TodoInput />
          <TodoList />
        </div>

        {/* 우측: Post */}
        <div className='w-full max-w-md space-y-4'>
          <PostInput />
          <PostList />
        </div>
      </div>
    </>
  );
}

export default App;
