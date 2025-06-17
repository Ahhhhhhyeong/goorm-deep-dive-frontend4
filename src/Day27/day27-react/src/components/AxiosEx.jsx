import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosEx() {
  const [post, setPost] = useState([]);
  // mount
  // posts게시글 단순 조회 => GET
  useEffect(() => {
    console.log('Start!');

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => console.log('resp: ', resp.data))
      .catch((err) => console.log('error: ', err));

    console.log('End!');
  }, []);

  return <div>AxiosEx</div>;
}
