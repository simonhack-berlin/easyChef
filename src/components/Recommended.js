import React, { useEffect, useState } from 'react';
import Recipes from './Cards/Recipes';

function Recommended() {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if(recommended.code === 402) {
    return (
      <div className='margin margin-bottom'>
        <h3>Maximum number of requests reached, please come back tomorrow</h3>
      </div>
    )
  }

  return (
    <div className='margin margin-bottom'>
        <h3>Recommended recipes</h3>
        <Recipes recipes={recommended} />
    </div>
  )
}

export default Recommended;
