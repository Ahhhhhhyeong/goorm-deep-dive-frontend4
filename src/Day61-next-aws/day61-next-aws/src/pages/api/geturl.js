// filename: geturl.js
import AWS from 'aws-sdk';

// S3 객체 생성
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
});

export default function handler(req, res) {
  console.log(req);
  /* 이미지 추가한 내용을 가져옴 */
  const { key } = req.body;

  // 5분짜리 url 발급받기
  const url = s3.getSignedUrl('getObject', {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    Expires: 60 * 5, // url 만료 시간
    ResponseContentDisposition: 'inline',
  });

  return res.status(200).json({ url });
}
