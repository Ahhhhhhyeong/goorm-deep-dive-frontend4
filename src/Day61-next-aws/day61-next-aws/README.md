# [Day61] 25.08.11 배운 내용 정리

---

# AWS S3 시작하기: 사용자 생성 & 버킷 생성 요약

> 참조
>
> > 1: ['AWS S3 공부하기 사용자, 버킷 생성 - 벨로그'](https://velog.io/@hinolog/AWS-S3-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0#1-aws-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%83%9D%EC%84%B1-)
> >
> > 2: ['AWS S3 생성하기 - 벨로그'](https://velog.io/%40gmlstjq123/AWS-S3-%EC%8B%A4%EC%8A%B5?utm_source=chatgpt.com)

---

## 1. AWS 사용자(IAM) 생성

1. AWS 콘솔에서 **IAM** 서비스로 이동 → **사용자(User)** 메뉴 선택
2. **사용자 생성** 클릭

   - 사용자 이름은 `example_user`처럼 규칙에 따라 지정
   - 액세스 유형은 **프로그래밍 방식 액세스** (Access Key ID + Secret Access Key) 선택

3. **권한 설정**

   - **기존 정책 연결(Attach policies directly)** 선택
   - `AmazonS3FullAccess` 권한 추가 → S3에 대한 전체 접근 권한 부여 ([Velog][1])

4. **검토 후 사용자 생성**
5. 생성 후 **보안 자격 증명(Security Credentials)** 탭에서 **액세스 키 생성**

   - 생성된 **Access Key ID**와 **Secret Access Key**는 **이때 반드시 저장** (나중에 재확인 불가능) ([Velog][1])

---

## 2. AWS S3 버킷 생성

1. AWS 콘솔에서 **S3 서비스**로 이동 → **버킷 만들기(Create bucket)** 클릭
2. **버킷 이름 & 리전 지정**

   - 이름은 전 세계에서 유일해야 하며, 영문 소문자, 숫자, 하이픈만 사용 가능 (3\~63자)

3. **퍼블릭 액세스 설정** (Public access blocking)

   - 기본적으로 **"모든 퍼블릭 액세스 차단"** 설정이 활성화되어 있음
   - 외부에 공개하려면 체크 해제 가능하나, 보안상 주의 필요

4. (선택사항) **버전 관리**, **암호화**, 기타 고급 설정 필요 시 활성화 또는 비활성화 옵션 설정
5. 설정 완료 후 **버킷 생성 완료**

---

### 3. 버킷 폴더(디렉토리) 생성 (가상 경로)

- "폴더 만들기" 기능으로 버킷 내에 디렉터리처럼 접근할 수 있는 가상 구조 생성 가능.

  - 실질적으로는 객체 키(Object Key)를 통해 경로처럼 관리됩니다.

---

## 요약 테이블

| 단계 | 설명                                                 |
| ---- | ---------------------------------------------------- |
| 1    | IAM 사용자 생성 → S3 전체 권한 부여 + 액세스 키 발급 |
| 2    | S3 버킷 생성 → 이름/리전 → 퍼블릭 액세스 설정 등     |
| 3    | 폴더(가상 경로) 구성 → 객체 키를 활용한 구조화       |

---

# AWS S3와 Next.js 연동 및 파일 업로드

## 필요한 라이브러리 설치

```bash
npm install mongodb axios aws-sdk formidable
```

#### AWS SDK 버전 비교

**AWS SDK v2 (aws-sdk)**

- 장점: 오래된 라이브러리로 호환성이 좋음
- 단점: 사용하지 않는 기능까지 포함되어 용량이 크고 Next.js 성능 저하 가능

```bash
npm install aws-sdk
```

**AWS SDK v3**

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

- 장점: 필요한 모듈만 설치 가능, 경량화

---

## 환경변수 설정 (.env.local)

```bash
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET_NAME=your-bucket-name
```

---

## 프론트엔드 구현 (pages/index.js)

```javascript
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [imgURL, setImgUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert('파일을 선택하세요!');

    // FormData 객체 생성 (multipart/form-data 형식)
    const formData = new FormData();
    formData.append('file', file);

    try {
      // 파일 업로드
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res.data);
      alert(res.data.message);

      // Presigned URL로 이미지 표시
      if (res.data.key) {
        const urlRes = await axios.post('/api/geturl', { key: res.data.key });
        setImgUrl(urlRes.data.url);
      }
    } catch (error) {
      console.error('업로드 실패:', error);
      alert('업로드에 실패했습니다.');
    }
  };

  return (
    <div>
      <h1>파일 업로드</h1>

      <form onSubmit={handleSubmit}>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} accept='image/*' />
        <button type='submit'>업로드</button>
      </form>

      {imgURL && (
        <div>
          <img src={imgURL} alt='업로드된 이미지' width={200} />
        </div>
      )}
    </div>
  );
}
```

---

## 백엔드 API 구현 (pages/api/upload.js)

```javascript
import formidable from 'formidable';
import fs from 'fs';
import AWS from 'aws-sdk';

// bodyParser 비활성화 (파일 업로드를 위해 필수)
export const config = {
  api: {
    bodyParser: false,
  },
};

// S3 클라이언트 설정
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

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('파싱 에러:', err);
      return res.status(500).json({ error: '파일 파싱 실패' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      return res.status(400).json({ error: '파일이 없습니다.' });
    }

    // S3 업로드를 위한 고유 키 생성
    const key = `uploads/${Date.now()}-${file.originalFilename || 'file'}`;

    const uploadParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Body: fs.createReadStream(file.filepath),
      ContentType: file.mimetype,
    };

    try {
      const result = await s3.upload(uploadParams).promise();
      console.log('S3 업로드 성공:', result.Location);

      res.status(200).json({
        message: '업로드 성공',
        key: key,
        location: result.Location,
      });
    } catch (error) {
      console.error('S3 업로드 실패:', error);
      res.status(500).json({ error: 'S3 업로드 실패' });
    }
  });
}
```

---

## Presigned URL 생성 API (pages/api/geturl.js)

```javascript
import AWS from 'aws-sdk';

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

  const { key } = req.body;

  if (!key) {
    return res.status(400).json({ error: 'Key가 필요합니다.' });
  }

  try {
    const url = s3.getSignedUrl('getObject', {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Expires: 3600, // 1시간 유효
    });

    res.status(200).json({ url });
  } catch (error) {
    console.error('Presigned URL 생성 실패:', error);
    res.status(500).json({ error: 'URL 생성 실패' });
  }
}
```

---

### 주요 개념 정리

#### FormData와 multipart/form-data

- **FormData**: 파일과 텍스트를 함께 전송할 수 있는 객체
- **multipart/form-data**: 파일 업로드를 위한 HTTP 전송 방식
- 일반 JSON으로는 이진 파일(이미지, 동영상 등) 전송 불가

#### Formidable 라이브러리

- Next.js에서 multipart/form-data 파싱을 위해 필요
- `bodyParser: false` 설정 필수

#### S3 업로드 과정

1. 파일을 FormData로 감싸서 서버로 전송
2. formidable로 파일 데이터 파싱
3. S3에 고유 키(key)로 파일 업로드
4. Presigned URL로 안전한 파일 접근
