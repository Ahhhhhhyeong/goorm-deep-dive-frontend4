import { UserState } from '@/app/user/page';
import React from 'react';

export default function UserItem({ user }: { user: UserState }) {
  return (
    <tr className='hover:bg-gray-100'>
      <td className='py-2 text-center'>{user.id}</td>
      <td className='py-2 px-6 '>{user.name}</td>
      <td className='py-2 px-6 '>{user.Email}</td>
      <td className='py-2 text-center'>{user.age}</td>
      <td className='py-2 px-6 '>{user.gender}</td>
      <td className='py-2 px-6 '>{user.position}</td>
    </tr>
  );
}
