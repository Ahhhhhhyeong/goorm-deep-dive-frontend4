import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CrawlingEx() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/hello')
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      CrawlingEx
      <h1> 서버랑 연결하기 </h1>
      <p>서버 응답: {msg.message}</p>
    </div>
  );
}
