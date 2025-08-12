// 상품과 관련된 API들

import products from '@/data/product';
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await getMongoData(res);
  }

  return res.status(405).end();
}

function getMockData(res) {
  return res.status(200).json(products);
}

// 몽고 디비에서 가져오기
async function getMongoData(res) {
  try {
    const client = await clientPromise;
    const db = client.db('my-shop');
    const result = await db.collection('products').find().toArray();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: '상품을  불러오지 못했습니다.' });
  }
}
