import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Recommended from '../components/Recommended';
import VeganComponent from '../components/Vegan';
import VegetarianComponent from '../components/Vegan'
import { RecipesContext } from '../store/Recipes-context';

function Home() {
  const [ showRecipesTypes, setShowRecipesTypes ] = useState('Popular');
  
  return (
    <>
      <RecipesContext.Provider value={{showRecipesTypes, setShowRecipesTypes}}>
        <Header searchBar/>
        {showRecipesTypes === 'Popular' && <Recommended />}
        {showRecipesTypes === 'Vegetarian' && <VegetarianComponent />}
        {showRecipesTypes === 'Vegan' && <VeganComponent />}
      </RecipesContext.Provider>
    </>
  )
}

export default Home;
