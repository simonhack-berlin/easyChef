import React, { useEffect, useState } from 'react';
import Recipes from './Cards/Recipes';

function VeganComponent() {
    const [vegan, setVegan] = useState([]);

    useEffect(() => {
        getVegan();
    },[]);
    
    const getVegan = async () => {
      const check = localStorage.getItem('vegan');

      if (check) {
        setVegan(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=6`);
        const data = await api.json();
        console.log(data);
        localStorage.setItem('vegan', JSON.stringify(data.recipes));
        setVegan(data.recipes);
      }
    } 

  return (
    <div className='margin'>
        <h3>Vegan recipes</h3>
        <Recipes recipes={vegan} />
    </div>
  )
}

export default VeganComponent;
