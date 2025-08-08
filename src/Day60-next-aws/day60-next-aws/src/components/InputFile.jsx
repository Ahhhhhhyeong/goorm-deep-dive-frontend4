import axios from 'axios';
import React, { useEffect, useState } from 'react';

// 파일을 입력 -> upload.js -> AWS S3 이미지 저장 -> URL을 받기

export default function InputFile() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log('button Click!!!');
    console.log(file);
    // await axios.post('/api/upload', {
    //   filename: file.name,
    //   filetype: file.type,
    // });
  };

  return (
    <div>
      <h1>INPUT FILE</h1>
      <form onSubmit={handleUpload} method='post'>
        {/* 이미지만 선택 할 수 있도록 필터 = accept */}
        <input type='file' name='image' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
        <button className='bg-pink-300 text-white px-4 py-2 rounded' type='submit'>
          업로드
        </button>
      </form>
    </div>
  );
}
