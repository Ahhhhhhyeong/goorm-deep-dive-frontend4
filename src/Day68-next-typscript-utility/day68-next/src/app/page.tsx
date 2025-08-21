import UserCard from '@/components/UserCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>유틸리티 예제</h1>
      <UserCard id={1} name={'eryna'} />
      <UserCard id={2} name={'Bob'} />
      {/* <UserCard id={3} name ={"grace"} email ={"test@gmail.com"}/> */}
    </div>
  );
}
/*
유틸리티 타입?
 - 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 문법 타입
 - 유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스 , 제네릭 <T,K,V,E>
   기본문법으로 충분히 타입을 변환할 수있지만 유틸리티 타입을 쓰면 
   휠씬 더 간결한 문법으로 타입을 정의할 수 있다.

자주 사용되는 좋은 유틸리티들(실무)
Pick<T,K>  
 - 특정 타입(Type)에서 원하는 속성(Key)만 뽑아서 새로운 타입을
   만드는 도구
 - Pick은 타입스크립트에서 기본적으로 제공하는 유틸리티라서 다운 받을
   필요가 없다 npm install X

 - 필요한 정보만 뽑아쓰는 개념 
*/
