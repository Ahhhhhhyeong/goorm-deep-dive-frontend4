import formidable from 'formidable';
import fs from 'fs'; // 파일 읽기/쓰기
import AWS from 'aws-sdk';

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(500).end();
  try {
    const form = formidable({ multiples: false });
    form.parse(req, (err, data, uploads) => {
      console.log('file: ', uploads);
      const f = uploads.file[0];
      const key = `${Date.now()}-${f.originalFilename || 'file'}`;

      /* 실제 S3업로드 하는 설정 */
      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Body: fs.createReadStream(f.filepath),
        ContentType: f.mimetype,
      };

      const result = s3.upload(params).promise();
      console.log('result: ', result);
      return res.status(200).json({ message: 'ok', key });
    });
    return res.status(403).json({ error: '실패했습니당' });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: '실패했습니다.' });
  }
}
