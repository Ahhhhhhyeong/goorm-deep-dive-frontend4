import TodoPreviewCard from '@/components/TodoPreviewCard';
import UserCard from '@/components/UserCard';
import { TodoPreview } from '@/types/todo';
import Image from 'next/image';

export default function Home() {
  const todo: TodoPreview = {
    title: '집에 가고싶다',
    completed: false,
  };

  return (
    <div>
      <h1>유틸리티 예제</h1>
    </div>
  );
}
/*

export default function Home() {
  const todo: TodoPreview = {
    title: '집에 가고싶다',
    completed: false,
  };

  return (
    <div>
      <h1>유틸리티 예제</h1>

      <TodoPreviewCard item={todo} />

      <UserCard id={1} name={'eryna'} />
      <UserCard id={2} name={'Bob'} />
      {/* <UserCard id={3} name ={"grace"} email ={"test@gmail.com"}/> }
    </div>
  );
}


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

 왜 쓰지?
  - 실제 페이지 로딩을 할 때 User전체로 가져올 경우도 있지만
    특정 기능들만 우리가 변경을 할 때 전체 하는게 아니라 특정 속성들만
    뽑아와서 타입제한 걸어서 안전성을 확보하고 유지보수도 수월해진다

  - API 응답모델  User
  - UI 컴포넌트/페이지에서는 필요한 일부 속성만 props로 주고 싶을때


Omit
 - 타입에서 특정 키를 생략(제외)한 새로운 타입을 만든다
 - pick 과는 반대다
 - 보안이 중요한 (password, 토큰값,id) 값들을 제외할 때 많이 사용한다.


Partial
 - 객체 타입의 모든 속성을 선택적으로 바꿔주는 타입
 - 기본 제공하는 라이브러리
 - 변수명? 옵션 다는 거와 비슷하다.
 -  원래 다 필수적으로 값을 보내야되지만 필요에 의해서 원하는 것만 데이터를 보낼 수있다


 Required 
  - Partial과 반대  모두 다 필수로 만드는 것
  

 Record(어제 수업함)
*/
