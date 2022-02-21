import React from 'react';
import './header.scss';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';

function Header({ setBackgroundTheme, currentTheme }) {
  function changeTheme() {
    if (currentTheme === 'light') {
      setBackgroundTheme('dark');
    } else {
      setBackgroundTheme('light');
    }
  }

  return (
    <header
      className={
        currentTheme === 'light'
          ? 'header header--light'
          : 'header header--dark'
      }
    >
      <h1 className='header__title'>devfinder</h1>
      <button className='header__page-style-button' onClick={changeTheme}>
        <h4 className='header__page-style-name'>
          {currentTheme === 'light' ? 'dark' : 'light'}
        </h4>
        <span className='header__icon-container'>
          {currentTheme === 'light' ? <Moon /> : <Sun />}
        </span>
      </button>
    </header>
  );
}

export default Header;
