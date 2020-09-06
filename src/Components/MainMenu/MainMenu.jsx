import React from 'react';
import './MainMenu.css';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';

const MainMenu = () => {
  const mainMenu = ['Home', 'Contact', 'About'];
  return (
    <ul className='main-menu'>
      {mainMenu.map((menu, index) => (
        <li key={index}>
          <Button style={{ border: 'none !important' }} href={`/${menu}`}>
            {menu}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
