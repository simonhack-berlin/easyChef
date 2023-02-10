import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { BiDish } from 'react-icons/bi'
import { FaClock } from 'react-icons/fa';
import classes from './Details.module.css';

function Details() {
  const [isActive, setIsActive] = useState('Instructions');
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  let id = params.id;

  const toggleClassHandler = (e) => {
    e.preventDefault();
    setIsActive(e.target.value);
  }

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
    const detailData = await data.json();
    setIsLoading(false);
    console.log(detailData)
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if(details.code === 402) {
    return (
      <>
        <Header text='Maximum number of requests reached, please come back tomorrow'/>
      </>
    )
  }

  if (isLoading) {
    return (
      <>
        <Header text='Loading...'/>
      </>
    )
  }
  
  const dishTypes = Object.values(details.dishTypes).join(', ');
    
  return (
    <>
      <Header text={details.title} />
      <div className='margin'>
        <h3>{isActive} Details</h3>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.generalInfoWrapper}>
            <img src={details.image} alt={details.title} />
            {dishTypes.length > 0 && (
              <div className={classes.generalInfo}>
                <BiDish /> <span>{dishTypes}</span>
              </div>
            )}
            <div className={classes.generalInfo}>
              <FaClock /> <span>Ready in {details.readyInMinutes} minutes</span>
            </div>
            <div className={classes.generalInfo}>
              <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            </div>
            <div className={classes.generalInfo}>
              <p>{details.winePairing.pairingText}</p>
            </div>
        </div>
        <div className={classes.info}>
          <input onClick={toggleClassHandler} className={isActive === 'Instructions' ? classes.active : classes.inactive} type="button" value="Instructions" />
          <input onClick={toggleClassHandler} className={isActive === 'Ingredients' ? classes.active : classes.inactive} type="button" value="Ingredients" />
          {isActive === 'Instructions' && ( 
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
            </div>
          )}
          {isActive === 'Ingredients' && (
            <ul className={classes.ingredientsList}>
              {details.extendedIngredients.map((ingredient) => {
                return (
                  <li key={ingredient.id}>{ingredient.original}</li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default Details;
