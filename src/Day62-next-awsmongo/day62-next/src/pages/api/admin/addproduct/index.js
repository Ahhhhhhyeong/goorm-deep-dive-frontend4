import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(401).json({ message: '잘 못된 호출 방식' });
  // mongoDB에 내용입력
  try {
    const client = await clientPromise;
    // console.log('불러지는지 확이인', client);
    const db = client.db('my-shop');
    // 추가
    // console.log(req.body);
    const result = await db.collection('products').insertOne(req.body);
    // console.log(result);
    // 성공 시
    return res.status(200).json({ message: '성공적으로 추가되었습니다.' });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: '입력 실패' });
  }
}
