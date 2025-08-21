//폴더는 types
// 파일명: user.ts

export type User = {
  id: number;
  name: string;
  email: string;
  // 주소, 생일, 결혼기념일,취미,특기,비밀번호

  images: string;

  // 프로필이미지만 변경 비밀번호 -> 프로필사진을 변경
};

// 전체 중에 일부만 선택해서 타입을 정의
export type UserCardProps = Pick<User, 'id' | 'name'>;
//      type 유튜브타입만  = Pick<유튜브의 모든 정보를 담을 수있는 객체타입
//                            , id | videoId

// interface User{
//   id : string;
//   name: string;
//   email?: string;
// }

// export interface UserPreview extends Pick<User,"id" | "name">
