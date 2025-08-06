// API handler
import clientPromise from '@/lib/mongodb';

/*
API 라우트 함수의 응답 객체
- req(request) : 요청 객체
    - 클라이언트(브라우저)가 보낸 정보들(GET, POST 등)을 담고 있음
- res(response) : 응답 객체
    - 클라이언트(브라우저)에게 결과를 돌려주는 역할
*/

export default async function handler(req, res) {
  // DB 연결관련은 예외처리를 해주면 좋음
  // CRUD를 할 때, 예외(에러)가 많이 발생함
  try {
    const client = await clientPromise;
    // sample_mfiix = DB 이름
    // 없으면 자동 생성
    const db = client.db('sample_mflix');

    //실제 document 가져오기
    // const users = await db.collection('users').find().toArray(); // 전체 값 가져와서 배열로 담아내는 부분
    const users = await db.collection('users').find().limit(2).toArray(); // limit(2): 2개만 배열로 담아내는 부분
    console.log('전체 users를 배열로 출력: ', users);

    return res.status(200).json({ message: '연결 성공', data: users });
  } catch (error) {
    console.error('❌ ERROR: ', error);
    return res.status(500).json({ message: '연결 실패' });
  }
}

/** 연동만 하는 코드
export default async function handler(req, res) {
  // DB 연결관련은 예외처리를 해주면 좋음
  // CRUD를 할 때, 예외(에러)가 많이 발생함
  try {
    const client = await clientPromise;
    // sample_mfiix = DB 이름
    // 없으면 자동 생성
    const db = client.db('sample_mflix');
    // console.log(db);
    res.status(200).json({ message: '연결 성공' });
  } catch (error) {
    console.error('❌ ERROR: ', error);
    res.status(500).json({ message: '연결 실패' });
  }
}

 * 
 */
