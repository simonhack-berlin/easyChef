import React, { useEffect, useState } from 'react';
import Recipes from './Cards/Recipes';

function VegetarianComponent() {
  const [vegetarian, setVegetarian] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      getVegetarian();
  },[]);
  
  const getVegetarian = async () => {
    const check = localStorage.getItem('vegetarian');

    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=6`);
      const data = await api.json();
      // console.log(data);
      localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
      setIsLoading(false);
    }
  } 

  if (isLoading) {
    return (
      <div className='margin margin-bottom'>
        <h3>Loading...</h3>
      </div>
    )
  }

  if(vegetarian.code === 402) {
    return (
      <div className='margin margin-bottom'>
        <h3>Maximum number of requests reached, please come back tomorrow</h3>
      </div>
    )
  }

  return (
    <div className='margin'>
        <h3>Vegetarian recipes</h3>
        <Recipes recipes={vegetarian} />
    </div>
  )
}

export default VegetarianComponent;
