// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import formidable from 'formidable';
import fs from 'fs'; // 파일 읽기/쓰기
import AWS from 'aws-sdk';

// api는 api라우트 설정을 담는 객체(고정)
// bodyParser api라우트의 body 파서 기능을 on/off 스위치
//  원래 고정값은 true 되어있다.
export const config = {
  api: {
    bodyParser: false,
  },
};

// S3 객체 생성
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
});

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  console.log('서버 들어왔다!');

  // multiples({multiples: false})  여러개의 파일 대신 단일 파일만 업로드하겠다!
  //        아무것도 없을 경우에는 기본적으로 여러개파일을 업로드 가능한 상태! true
  const form = formidable({ multiples: false });

  // parse()
  // 요청(req)을 읽고 파싱(데이터 분리)을 시작한다.
  // err = 파싱중에 오류
  // fields = 일반 form태그에서 문자열 데이터
  // files = 파일 데이터(경로,크기 등 포함)

  // 암묵적으로 매개변수 명들을 사용하긴 하지만!
  // err,fields,files
  // 만약 변수가 필요없다면 _ "이 값은 안쓸거야! 근데 문법상 위치는 유지할께"
  // 파일만 필요할 경우 =  err,_,files
  // _변수명 (변수는 무시한다.)
  // 이름이 중요한것이 아니라 위치가 중요한다.
  // 1. 에러객체
  // 2. 문자열 데이터
  // 3. 파일 데이터
  form.parse(req, (err, data, uploads) => {
    console.log('파일:', uploads);

    /*
     업로드 된 파일 객체
     배열이면 true, 배열이 아니면 false 반환
     제일 중요한 것은 upload된 필드명이 중요하다. 
     formData.append('필드명')이 isArray(uploads.필드명) => 필드명이 같아야함
     배열이면 여러개의 파일 중 하나만 사용 해야함
     */
    //const f = Array.isArray(uploads.file) ? uploads.file[0] : uploads.file;
    const f = uploads.file[0];

    /* 
    어떤 식으로 파일을 업로드 할지
    s3는 고유한 키 객체가 필요함 
      s3에 객체 키(key)를 저장
    */
    const key = `${Date.now()}-${f.originalFilename || 'file'}`;

    /* 실제 S3업로드 하는 설정 */
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Body: fs.createReadStream(f.filepath),
      ContentType: f.mimetype,
    };

    /** 실제 s3로 전송
     * upload(): 기본적으로 콜백방식으로 동작.
     * 콜백함수로 동작하면 직접 다 작성해서 에러처리도 해야하기 때문에 자동으로 처리하는 promise() 사용
     * promise(): aws가 promise객체 타입으로 자동 변환
     */
    const result = s3.upload(params).promise();

    console.log('result: ', result);
    return res.status(200).json({ message: 'ok', key });
  });
}

/*
Next는 기본적으로 bodyParser JSON만 처리 가능하다.
파일 업로드 (FormData)는 bodyParser 기능을 끄고 formidable 전용 
도구를 이용해서 데이터를 꺼내야된다.


aws-sdk 라이브러리는 v2
오래전 부터 사용을 하고 있기 때문에 어떤 코드들이든 호환이 되서
쉽게 aws랑 쉽게 데이터 통신을 할 수있다.
단점이 내가 사용하지 않는 기능들도 다운로드가 되어서 next성능 저하를
일으킬 수있다. s3, lambda , api gateway,DB

aws-sdk v3
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner


*/
