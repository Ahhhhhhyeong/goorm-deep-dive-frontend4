import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NaverCrawling() {
  const [naver, setNaver] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/naver')
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return <div></div>;
}
