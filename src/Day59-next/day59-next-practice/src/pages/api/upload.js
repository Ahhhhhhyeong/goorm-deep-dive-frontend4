import { writeFile } from 'fs/promises';
import path from 'path';

export default async function Upload(req, res) {
  if (req.method === 'POST') {
    console.log('upload api 호출 됨?');
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Request body keys:', Object.keys(req.body));
    // try {
    //   const data = await req.data;
    //   const file = data.get('image');
    //   console.log('이미지 저장: ', file);

    //   // 이미지 확인
    //   if (!file) {
    //     return res.status(400).json({ error: '사진이 없습니다.' });
    //   }

    //   // 이미지 확장자 체크 (jpg, jpeg, png)
    //   const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    //   if (!allowedTypes.includes(file.type)) {
    //     return res.status(400).json({ error: '사진이 없습니다.' });
    //   }

    //   // 파일명 새로 생성
    //   const timestamp = Date.now();
    //   const originalName = file.name.replace(/\s+/g, '-'); //공백을 하이픈으로 변경
    //   const fileName = `${timestamp}-${originalName}`;

    //   // file -> buffer
    //   const bytes = await file.arrayBuffer();
    //   const buffer = Buffer.from(bytes);

    //   // public/images 디렉토리에 저장
    //   const uploadDir = path.join(process.cwd(), 'public', 'images');
    //   const filePath = path.join(uploadDir, fileName);

    //   await writeFile(filePath, buffer);

    //   // 클라이언트에 이미지 URL 변환
    //   const imageURl = `/images/${fileName}`;
    //   console.log(imageURl);
    //   return res.status(200).json({
    //     message: '사진이 성공적으로 업로드 되었습니다.',
    //     imageUrl: imageURl,
    //   });
    // } catch (error) {
    //   console.log(error);
    //   return res.status(500).json({ error: '업로드 실패' });
    // }
  } else {
    return res.status(500).json({ error: '메서드 잘 못 호출 됨' });
  }
}
