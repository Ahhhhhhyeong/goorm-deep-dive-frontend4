import React, { useState } from 'react';

export default function WriteForm() {
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // 이미지 업로드 함수
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', file);
    // FormData 내용 확인
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.status === 200) {
        const data = await response.json();
        setImageUrl(data.imageUrl); // /images/filename.jpg 형태
        alert(`${data.message}: ${data.imageUrl} 저장`);
      } else {
        alert('이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      setIsUploading(false);
    }
  };

  // 폼 제출 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      store: formData.get('store'),
      title: formData.get('title'),
      price: formData.get('price'),
      imageUrl: '/images/pokemon.jpg', // 업로드된 이미지 URL 추가
    };

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('상품이 성공적으로 추가되었습니다!');
        e.target.reset();
        setImageUrl('');
      } else {
        alert('상품 추가에 실패했습니다.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('상품 추가 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='flex flex-row gap-5 justify-center items-center w-min-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-lg'>
        <input
          type='text'
          name='store'
          placeholder='가게명 입력'
          className='border border-blue-400 p-1 rounded'
          required
        />
        <input
          type='text'
          name='title'
          placeholder='상품명 입력'
          className='border border-blue-400 p-1 rounded'
          required
        />
        <input
          type='number'
          name='price'
          placeholder='상품가격 입력'
          className='border border-blue-400 p-1 rounded'
          required
        />

        {/* 이미지 업로드 */}
        <div className='flex flex-col gap-2'>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            className='border border-blue-400 p-1 rounded'
            disabled={isUploading}
          />
          {isUploading && <p className='text-blue-500'>이미지 업로드 중...</p>}
          {imageUrl && (
            <div className='flex flex-col gap-1'>
              <p className='text-green-600 text-sm'>이미지 업로드 완료!</p>
              <img src={imageUrl} alt='Preview' className='w-20 h-20 object-cover rounded' />
            </div>
          )}
        </div>

        <button
          type='submit'
          className='bg-blue-400 text-white p-1 rounded disabled:bg-gray-400'
          disabled={isUploading}>
          상품 추가
        </button>
      </form>
    </div>
  );
}
