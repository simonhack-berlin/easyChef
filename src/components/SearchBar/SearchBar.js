import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from '../../store/Recipes-context';
import classes from './SearchBar.module.css';

function SearchBar() {
  const {showRecipesTypes, setShowRecipesTypes} = useContext(RecipesContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/searched/${inputValue}`);
    }
  }

  const getPopularHandler = () => {
    setShowRecipesTypes('Popular')
  }

  const getVegetarianHandler = () => {
    setShowRecipesTypes('Vegetarian')
  }

  const getVeganHandler = () => {
    setShowRecipesTypes('Vegan')
  }

  return (
    <div className={classes.searchbarContainer}>
      <div className={classes.searchbarOptions}>
        <ul>
          <li className={showRecipesTypes === 'Popular' ? classes.active : ''} onClick={getPopularHandler} >Popular</li>
          <li className={showRecipesTypes === 'Vegetarian' ? classes.active : ''} onClick={getVegetarianHandler}>Vegetarian</li>
          <li className={showRecipesTypes === 'Vegan' ? classes.active : ''} onClick={getVeganHandler}>Vegan</li>
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
