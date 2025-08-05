//md파일 읽고 파싱하는 유틸함수
// md파일의 앞 부분 메타데이터(front matter)와 본문 내용(content)

// 경로를 가지고 올 때 사용하는 라이브러리다!
// 근데 이미 내장되어있기 때문에 import 구문만 작성하면 된다.
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export async function getAllBlogs() {
  // 마크다운 파일의 절대 경로를 만드는 코드다!
  // join() 여러 경로 조각들을 운영체제(OS)맞게 경로를 합친다.
  // process.cwd() :현재 프로젝트 루티 경로를 기준으로 한다.
  // 아래 경로들을 모두 모아서 하나의 문자열로 반환한다.
  const filePath = path.join(process.cwd(), 'src', 'blogs', 'blogFir.md');
  console.log('filePath: ', filePath);

  //readFile(경로,인코딩)
  // awiat
  //  - 파일을 전부 읽을 때까지 기다린다(비동기처리)
  // 인코딩
  //  - 파일을 텍스트(한글 포함 가능)로 읽겠다 의미
  // fileContents
  //  - 변수에는 읽은 마크 다운의 텍스트 전체가 저장된다.

  const fileContents = await readFile(filePath, 'utf8');

  // gray-matter 가 나와서 분리시키기
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    content,
  };
}
