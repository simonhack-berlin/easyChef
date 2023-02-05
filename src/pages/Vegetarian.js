import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import VegetarianComponent from '../components/Vegetarian';

function Vegetarian() {
  return (
    <>
        <Header searchBar />
        <VegetarianComponent />
    </>
  )
}

export default Vegetarian;
