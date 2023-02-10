import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Recommended from '../components/Recommended';
import VeganComponent from '../components/Vegan';
import VegetarianComponent from '../components/Vegan'
import { RecipesContext } from '../store/Recipes-context';

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
