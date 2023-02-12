import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../store/Recipes-context';
import Recipes from './Cards/Recipes';
import Header from './Header/Header';

function SearchedComponent() {
  const {showRecipesTypes} = useContext(RecipesContext);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();

  const getSearched = async (input, diet) => { 
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}&diet=${diet}`);
      const data = await api.json();
      // console.log(data);
      setSearchedRecipes(data.results);
      setIsLoading(false);
  }

  useEffect(() => {
      getSearched(params.search, showRecipesTypes);
  }, [params.search, showRecipesTypes]);

  if (isLoading) {
    return (
      <Header text='Loading...' />
    )
  }
  
  return (
    <>
      <Header text={'Results for ' + params.search} />
      <div className='margin margin-bottom'>
          <h3>Found {searchedRecipes.length} results</h3>
          <Recipes query={searchedRecipes} />
      </div>
    </>
  )
}

export default SearchedComponent;
