import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

function Recommended() {
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        getRecommended();
    },[]);
    
    const getRecommended = async () => {
      const check = localStorage.getItem('recommended');

      if (check) {
        setRecommended(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`);
        const data = await api.json();
        //console.log(data);
        localStorage.setItem('recommended', JSON.stringify(data.recipes));
        setRecommended(data.recipes);
      }
    }

  return (
    <div className='margin'>
        <h3>Recommended recipes</h3>
        <Recipes recipes={recommended} />
    </div>
  )
}

export default Recommended;
