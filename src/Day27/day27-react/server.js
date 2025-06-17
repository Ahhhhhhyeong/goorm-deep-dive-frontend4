//Express Server Config
/**
 require : 옛날 js 문법. 
 vite 프로젝트에서 사용 할 때, package.json에서  "type": "module", 부분을 지워준다.
 require로 사용할거면 require만 사용. import 랑 혼용해서 사용이 안됨 
 */
const express = require('express'); //request express
const cors = require('cors');
const axios = require('axios');

const app = express(); //서버를 만듦(앱 인스턴스 생성)
const port = 5000; //port num

//모든 요청을 허용하는 명령문(주의...절대 ㄴㄴ 보안개중요함)
app.use(cors());

// GET 요청시 응답
app.get('/api/hello', (req, rep) => {
  //요청 처리
  rep.json({ message: 'hi Express Server' });
});

// 서버에서 네이버에 접속할 수 있도록
app.get('/api/naver', async function (req, res) {
  try {
    //아래처럼 url만 작성하면 네이버는 봇 차단을 할 수 있다.
    const res = await axios.get('https://www.naver.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });
    console.log(res);
    response.json(res.data);
  } catch (e) {
    console.error(`❌error: ${e}`);
  }
});

// 서버 실행
app.listen(port, () => {
  console.log('서버가 동작합니다. http://localhost:', port);
});
