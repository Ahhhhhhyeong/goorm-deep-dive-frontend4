import React, { useEffect, useState } from 'react';

export default function YoutubeSearch() {
  const APIKEY = import.meta.env.VITE_GOOGLE_YOUTUBE_KEY;
  const keywords = '롯데자이언츠';
  const maxResult = 10;
  const requestURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${keywords}&key=${APIKEY}`;

  const [data, setData] = useState([]);
  //유튜브 호출!
  useEffect(() => {
    youtubeFetch();
  }, []);

  function youtubeFetch() {
    fetch(requestURL)
      .then((res) => Promise.resolve(res.json()))
      .then((data) => {
        console.log(data);
        setData(data.items);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h2 className='text-lg font-semibold'>유튜브 동영상 검색 후 실행</h2>
      <table className='table-auto border-collapse mt-5'>
        <thead>
          <tr>
            <th>영상이미지</th>
            <th>영상제목</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((video) => (
              <tr key={video.etag}>
                <td>
                  <img
                    className='w-full'
                    style={{
                      width: video.snippet.thumbnails.default.width,
                      height: video.snippet.thumbnails.default.height,
                    }}
                    src={video.snippet.thumbnails.default.url}
                    alt='썸네일'
                  />
                </td>
                <td className='text-pretty w-lg'>{video.snippet.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * 유튜브 동영상 API를 사용하기 위해서는 준비과정이 필요
 * 1. 구글 클라우드 플랫폼 로그인
 */
