import React, { useContext } from 'react';
import Header from '../Components/Header/Header';
import Recommended from '../Components/Recommended';
import VeganComponent from '../Components/Vegan';
import VegetarianComponent from '../Components/Vegetarian';
import { RecipesContext } from '../Store/Recipes-context';

function Home() {
  const {showRecipesTypes} = useContext(RecipesContext);
  
  return (
    <>
      <Header searchBar/>
      {showRecipesTypes === 'Popular' && <Recommended />}
      {showRecipesTypes === 'Vegetarian' && <VegetarianComponent />}
      {showRecipesTypes === 'Vegan' && <VeganComponent />}
    </>
  )
}

export default Home;
