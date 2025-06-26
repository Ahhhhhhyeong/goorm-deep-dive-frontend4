import React from 'react';
import { comments } from '../data/CommentsData';
import Comments from '../components/Comments';

export default function CommentsPage() {
  return (
    <div>
      <h1>코멘트 확인하기</h1>
      <div className='comments-wrapper'>
        {comments.map((c) => (
          <Comments key={c.id} tree={c} />
        ))}
      </div>
    </div>
  );
}
