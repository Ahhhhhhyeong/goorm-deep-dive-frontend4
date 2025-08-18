'use client';
import UserItem from '@/components/UserItem';
import { userlist } from '@/data/userData';
import React, { useState } from 'react';

export interface UserState {
  id: number;
  name: string;
  Email: string;
  age: number;
  gender: string;
  position: string;
}

export default function User() {
  const [user, setUser] = useState<UserState[]>(userlist);
  const [gender, setGender] = useState<string>('All Genders');
  const [position, setPosition] = useState<string>('All Positions');

  // 필터링
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let sex: string = event.target.value;
    setGender(sex);
    console.log('선택:', sex);
    if (sex !== 'All Genders') {
      const tmp = userlist.filter((val) => val.gender === sex);
      setUser(tmp);
    } else {
      setUser(userlist);
    }
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let posi = event.target.value;
    setPosition(posi);
    console.log('선택: ', posi);
    if (posi !== 'All Positions') {
      const temp = userlist.filter((val) => val.position === posi);
      setUser(temp);
    } else {
      setUser(userlist);
    }
  };

  return (
    <div className='font-sans p-8 sm:p-20 bg-white rounded-b-2xl'>
      {/* 헤더 */}
      <div className='flex w-full items-center justify-between mb-8'>
        <h1 className='text-2xl font-bold text-gray-800'>User Management</h1>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition'>
          Add New User
        </button>
      </div>

      {/* 검색창 */}
      {/* <div className='mb-6 w-full max-w-md'>
        <input
          type='text'
          placeholder='Search'
          className='w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div> */}

      {/* 필터 옵션 */}
      <div className='mb-6 flex gap-4'>
        <select
          value={position}
          onChange={handlePositionChange}
          className='px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500'>
          <option>All Positions</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Manager</option>
        </select>
        <select
          value={gender}
          onChange={handleGenderChange}
          className='px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500'>
          <option>All Genders</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* 유저 표 */}
      <div className='overflow-x-auto rounded-2xl shadow'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead className='bg-gray-100 text-gray-700'>
            <tr>
              <th className='px-6 py-3 text-left text-sm font-semibold'>ID</th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>Name</th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>Email</th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>Age</th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>Gender</th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>Position</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {user.map((item) => (
              <UserItem key={item.id} user={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
