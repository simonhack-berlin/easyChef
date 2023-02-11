import React, { useEffect, useState } from 'react';
import Recipes from './Cards/Recipes';

function VeganComponent() {
  const [vegan, setVegan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      getVegan();
  },[]);
  
  const getVegan = async () => {
    const check = localStorage.getItem('vegan');

    if (check) {
      setVegan(JSON.parse(check));
      setIsLoading(false);
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=6`);
      const data = await api.json();
      // console.log(data);
      localStorage.setItem('vegan', JSON.stringify(data.recipes));
      setVegan(data.recipes);
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

  if(vegan.code === 402) {
    return (
      <div className='margin margin-bottom'>
        <h3>Maximum number of requests reached, please come back tomorrow</h3>
      </div>
    )
  }

  return (
    <div className='margin margin-bottom'>
        <h3>Vegan recipes</h3>
        <Recipes recipes={vegan} />
    </div>
  )
}

export default VeganComponent;
