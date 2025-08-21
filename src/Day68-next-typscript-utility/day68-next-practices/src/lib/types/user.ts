// Partial<T>
export interface User {
  id?: string;
  username: string; // id 역할
  name: string;
  email: string;
  password: string;
}
// 로그인 폼
export type LoginFormData = Pick<User, 'username' | 'password'>;
// 프로필 확인용
export type ProfileData = Omit<User, 'password'>;
