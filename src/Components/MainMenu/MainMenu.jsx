import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
  const mainMenu = ['Home', 'Contact', 'About'];
  return (
    <ul className='main-menu'>
      {mainMenu.map((menu) => (
        <li>{menu}</li>
      ))}
    </ul>
  );
};

export default MainMenu;
