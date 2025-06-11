import React from 'react';
import { Nav } from 'react-bootstrap';

export default function HeaderMenu({ topMenu, menuList }) {
  return (
    <Nav.Item>
      <Nav.Link className='top-menu' href='#'>
        {topMenu}
      </Nav.Link>
    </Nav.Item>
  );
}
