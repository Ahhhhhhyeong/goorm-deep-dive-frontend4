import React from 'react';
import { Nav } from 'react-bootstrap';

import HeaderMenu from './menu/HeaderMenu';

export default function Header({ menu }) {
  return (
    <div className='header'>
      <img
        className='header-logo'
        src='https://image.ajunews.com/content/image/2025/01/14/20250114144237398876.jpg'
        alt='이디야로고'
      />
      <Nav className='justify-content-center gap-5' activeKey='/home'>
        {Object.keys(menu).map((key, index) => (
          <HeaderMenu key={index} topMenu={key} menuList={menu[key]} />
        ))}
      </Nav>
    </div>
  );
}
