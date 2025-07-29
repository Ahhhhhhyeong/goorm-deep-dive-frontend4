import React, { useState } from 'react';
import './TabStyle.scss';
import clsx from 'clsx';
import HomePage from '../home/HomePage';
import ProfilePage from '../profile/ProfilePage';
import SettingPage from '../settings/SettingPage';

export default function TabNavigatie() {
  const [isActive, setActive] = useState('HOME');

  const components = [
    { page: 'HOME', component: <HomePage /> },
    { page: 'PROFILE', component: <ProfilePage /> },
    { page: 'SETTING', component: <SettingPage /> },
  ];

  return (
    <div>
      <div className='container'>
        <ul className='tab-wapper'>
          {components.map((value, idx) => (
            <li key={idx} onClick={() => setActive(value.page)}>
              <button
                className={clsx('tab-button', {
                  'tab-active': isActive === value.page,
                })}>
                {value.page}
              </button>
            </li>
          ))}
        </ul>
        <div className='content'>{components.find((comp) => comp.page === isActive)?.component}</div>
      </div>
    </div>
  );
}
