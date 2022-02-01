import React from 'react';
import './searchBar.scss';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

function SearchBar() {
  return (
    <form className='search-form'>
      <span className='search-form__icon'>
        <SearchIcon />
      </span>
      <label className='visuallyhidden ' htmlFor='githubName'>
        Search Github username
      </label>
      <input type='text' placeholder='Search Github username...' />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;
