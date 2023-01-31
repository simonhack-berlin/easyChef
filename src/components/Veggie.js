import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[]);
    
    const getVeggie = async () => {
      const check = localStorage.getItem('veggie');

      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`);
        const data = await api.json();
        //console.log(data);
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      }
    }
  return (
    <div className='margin'>
        <h3>Vegetarian recipes</h3>
        <Recipes recipes={veggie} />
    </div>
  )
}

export default Veggie;
