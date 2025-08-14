import React, { useState } from 'react';

export default function ReviewForm() {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 공백 이면 return
    if (!review.trim()) return alert('입력이 비어있습니다.');

    // 히히
  };

  return (
    <form onSubmit={handleSubmit} className='mt-6'>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder='리뷰를 입력하세요'
        className='w-full p-2 border rounded resize-none'
        rows={3}
      />
      <button type='submit' className='mt-2 bg-blue-600 text-white px-4 py-2 rounded'>
        리뷰 등록
      </button>
    </form>
  );
}
