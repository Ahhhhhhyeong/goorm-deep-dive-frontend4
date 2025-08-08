// 리펙토링 2 : 예외처리 추가 + 요청 타입 체크
export default async function formHandler(req, res) {
  if (req.method === 'POST') {
    const { title, price, store, imageUrl } = req.body;
    const client = await clientPromise;
    const db = client.db('my-shop');
    // 몽고디비 데이터 추가
    const productList = db.collection('products').insertOne({
      title: title,
      price: price,
      imageUrl: imageUrl,
      store: store,
    });

    // res.status(200).json({ message: '처리완료', data: req.body });
    //페이지 이동하고 싶을 때 새로운 요청
    return res.redirect('/', 302);
  } else {
    return res.status(405).json({ message: '허용하지 않는 요청' });
  }
}
