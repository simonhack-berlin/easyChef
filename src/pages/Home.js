import React from 'react';
import Header from '../components/Header/Header';
import Recommended from '../components/Recommended';

function Home() {
  return (
    <>
      <Header searchBar/>
      <Recommended />
    </>
  )
}

export default Home;
