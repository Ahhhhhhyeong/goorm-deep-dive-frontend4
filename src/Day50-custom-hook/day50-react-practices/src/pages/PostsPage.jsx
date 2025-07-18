import React from 'react';
import Search from '../components/Search';
import BlogList from '../components/posts/BlogList';

export default function PostsPage() {
  return (
    <div className='p-4'>
      <Search />
      <BlogList />
    </div>
  );
}
