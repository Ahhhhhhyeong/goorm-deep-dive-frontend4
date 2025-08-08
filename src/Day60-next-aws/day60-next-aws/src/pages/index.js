import InputFile from '@/components/InputFile';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);

  // 이미지 호출을 위해 env파일에서 이미지 URL가져요기
  const presignedUrl = process.env.NEXT_PUBLIC_PRESIGNED_URL || '';

  if (presignedUrl == '') {
    alert('url이 없습니다.');
  }

  // S3에 넣어둔 이미지를 요청해서 가져오기
  useEffect(() => {
    const fetchImage = async () => {
      try {
        /* get요청을 하게되면 axios 내부 자체에서 기본적으로 파싱을 텍스트 혹은 json 형태로 줌
          이미지, pdf같은 이진파일(바이ㅓㄴ리) 그대로 가지고 오면 데이터가 깨짐
          그래서 대용량 객체인 바이너리 타입 blob 으로 응답을 받아야 
        */
        const res = await axios.get(presignedUrl, {
          responseType: 'blob',
        });
        // 대용량의 데이터(바이너리) => 임시 url, 문자로 변환
        const objectUrl = URL.createObjectURL(res.data);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error('이미지 로드 에러 발생:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div
      className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <h3>S3 이미지 보기</h3>
      {imageUrl ? <Image src={imageUrl} alt='presigned iamge' width={100} height={100} /> : <p>이미지 로드중...</p>}
      <h3>이미지파일 보내기</h3>
      <InputFile />
    </div>
  );
}
