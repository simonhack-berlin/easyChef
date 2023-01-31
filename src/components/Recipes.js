import React from 'react';
import { FaLeaf, FaClock } from 'react-icons/fa';
import classes from './Recipes.module.css';

function Recipes(props) {
    const {recipes} = props;
  return (
    <div className={classes.container}>
        {recipes.map((recipe) => {
            return(
                <div className={classes.item} key={recipe.id}>
                    <h4>{recipe.title}</h4>
                    <div>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div className={classes.info}>
                        <FaLeaf />
                        <p>{recipe.vegan ? 'Vegan' : 'Not vegan'}</p>
                    </div>
                    <div className={classes.info}>
                        <FaClock />
                        <p>Ready in {recipe.readyInMinutes} minutes</p>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default Recipes