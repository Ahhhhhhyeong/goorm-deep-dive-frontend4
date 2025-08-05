import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

/*
url 경로를 작성할 때 그때 pages/ 안에 js파일을 작성하면 자동으로 페이지 연결 한다.


세미콜론은 마침표 개념이다 그래서 문장의 끝을 알려주기 때문에 세미콜론이 필수인 문법들은 에러를 발생
세미콜론을 안써도 되는 문법들은 한줄
자바스크립트에서는 줄바꿈만 해도 의미가 바뀌는 경우가 있다 그랫서 jsx문법에서는 꼭 리턴할 때
괄호를 붙이는 습관을 가져야된다.
return                                             
   <Layout>
      <Component {...pageProps} />
   </Layout>;

위에 있는 내용을 아래처럼 해석 
return ; 줄이 여기서 끝난걸로 인식을 한다.
*/
