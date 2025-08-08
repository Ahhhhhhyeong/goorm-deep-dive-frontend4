import { MongoClient } from 'mongodb';

const uri = process.env.DB_DEV_URL;
// 리팩터링 코드: uri가 설정되지 않았을 때 예외처리
if (!uri) {
  throw new Error('mongodb_uri 환경 변수에 설정되지 않았다');
}
// 몽고디비 생성
const client = new MongoClient(uri);
// 실제 연결
const clientPromise = client.connect();
// 체이닝 코드
// const clientPromise = new MongoClient(uri).connect();

export default clientPromise;
