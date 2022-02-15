import React, { useState } from 'react';
import './searchBar.scss';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

function SearchBar({ setSearchQuery, currentTheme }) {
  const [userInput, setUserInput] = useState('');

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(userInput);
  }

  return (
    <form
      className={
        currentTheme === 'light'
          ? 'search-form search-form --light'
          : 'search-form search-form --dark'
      }
      onSubmit={(e) => handleSubmit(e)}
    >
      <span className='search-form__icon'>
        <SearchIcon />
      </span>
      <label className='visuallyhidden ' htmlFor='githubName'>
        Search Github username
      </label>
      <input
        type='text'
        placeholder='Search GitHub username...'
        onChange={handleChange}
      />
      <button type='submit' className='search-form__search-btn'>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
