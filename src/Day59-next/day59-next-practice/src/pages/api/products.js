import clientPromise from '@/lib/mongo';

// 상품 호출
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('my-shop');

    //const list =
  } catch (error) {
    return res.status(500).json({ message: '연결 실패' });
  }
}
