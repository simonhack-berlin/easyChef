import React, { useEffect, useState } from 'react';
import Recipes from './Cards/Recipes';

function VegetarianComponent() {
    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
    },[]);
    
    const getVegetarian = async () => {
      const check = localStorage.getItem('vegetarian');

      if (check) {
        setVegetarian(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=5`);
        const data = await api.json();
        console.log(data);
        localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
        setVegetarian(data.recipes);
      }
    } 

  return (
    <div className='margin'>
        <h3>Vegetarian recipes</h3>
        <Recipes recipes={vegetarian} />
    </div>
  )
}

export default VegetarianComponent;