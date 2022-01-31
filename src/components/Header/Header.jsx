import React from 'react';
import './header.scss';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>devfinder</h1>
      <button className='header__page-style-button'>
        <h4 className='header__page-style-name'>dark</h4>
        <span className='header__icon-container'>
          <Moon />
        </span>
      </button>
    </header>
  );
}

export default Header;
