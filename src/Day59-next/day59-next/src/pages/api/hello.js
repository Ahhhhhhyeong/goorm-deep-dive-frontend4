import clientPromise from '@/lib/mongo';

// 완전 기본적인 호출 방법
export async function handler(req, res) {
  // clientPromise = 비동기 함수
  const client = await clientPromise;
  const db = client.db('my-shop');

  const productList = db.collection('products').find().toArray();

  res.status(200).json(productList);
}

// 리펙토링 1 : 예외처리 추가
export async function handlerRefector(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('my-shop');

    const productList = db.collection('products').find().toArray();

    return res.status(200).json({ message: '연결 성공함요', data: productList });
  } catch (error) {
    return res.status(500).json({ message: '오류났어요ㅜㅜ' });
  }
}

// 리펙토링 2 : 예외처리 추가 + 요청 타입 체크
export default async function formHandler(req, res) {
  if (req.method === 'POST') {
    const { title, price } = req.body;
    console.log('상품명:', title);
    console.log('가격:', price);

    const client = await clientPromise;
    const db = client.db('my-shop');
    // 몽고디비 데이터 추가
    const productList = db.collection('products').insertOne({
      title: title,
      price: price,
      imageUrl: '/pokemon.jpg',
    });

    // res.status(200).json({ message: '처리완료', data: req.body });
    //페이지 이동하고 싶을 때 새로운 요청
    return res.redirect('/', 302);
  } else {
    return res.status(405).json({ message: '허용하지 않는 요청' });
  }
}
