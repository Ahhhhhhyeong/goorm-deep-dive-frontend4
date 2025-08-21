import { UserCardProps } from '@/app/types/user';
import React from 'react';

export default function UserCard({ id, name }: UserCardProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
