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
    /** 쿠키 설정
     * HTTP 헤더에 직접 작성
     * => 라이브러리 불필요
     */
    res.setHeader('Set-Cookie', 'authToken=admin_token;HttpOnly; Path=/;Max-Age=3600');

    return res.status(200).json({ message: '로그인 성공' });
  }

  return res.status(403).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' });
}
