import { MongoClient } from 'mongodb';

const uri = process.env.DB_DEV_URL;
// 리팩터링 코드: uri가 설정되지 않았을 때 예외처리
if (!uri) {
  throw new Error('mongodb_uri 환경 변수에 설정되지 않았다');
}
// 몽고디비 생성, 연결
const clientPromise = new MongoClient(uri).connect();

export default clientPromise;
