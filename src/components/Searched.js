import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from './Cards/Recipes';
import Header from './Header/Header';

function SearchedComponent() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (input) => { 
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}`);
        const data = await api.json();
        // console.log(data);
        setSearchedRecipes(data.results);
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
  
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
