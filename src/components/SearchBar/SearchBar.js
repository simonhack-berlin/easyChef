import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './SearchBar.module.css';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/searched/${inputValue}`);
    }
  }

  return (
    <div className={classes.searchbarContainer}>
      <div className={classes.searchbarOptions}>
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? classes.active : 'inactive')} to='/'>Popular</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? classes.active : 'inactive')} to='/vegetarian'>Vegetarian</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? classes.active : 'inactive')} to='/vegan'>Vegan</NavLink></li>
        </ul>
      </div>
      <div className={classes.searchbarFields}>
        <input
          type="text" 
          placeholder='Search for a recipe' 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div onClick={submitHandler}className={classes.searchbarSubmit}>
        <span>Let's Go</span>
      </div>
    </div>
  );
}

export default SearchBar;
