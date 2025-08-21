// 폴더명: components
// 파일명: UserCard

import { UserCardProps } from '@/types/user';

export default function UserCard({ id, name }: UserCardProps) {
  return (
    <div>
      <h1>id: {id}</h1>
      <p>name: {name}</p>
    </div>
  );
}
