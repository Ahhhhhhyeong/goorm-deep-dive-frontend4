// 로그인 관련 API

export default function loginHandler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  console.log(req.body);
  const { username, password } = req.body;

  const ADMIN_ID = 'admin';
  const ADMIN_PW = 'admin12!@';

  if (username === ADMIN_ID && password === ADMIN_PW) {
    return res.status(200).json({ message: '로그인 성공' });
  }

  return res.status(403).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' });
}
