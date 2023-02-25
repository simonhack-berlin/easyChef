import React from 'react';
import { FaLeaf, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toHoursAndMinutes } from '../../helper/functions';
import classes from './Recipes.module.css';

function Recipes(props) {
    const {recipes, query} = props;

    if (recipes) {
        return (
            <div className={classes.container}>
                {recipes.map((recipe) => {
                    return(
                        <Link to={`/details/${recipe.id}`} className={`${classes.item} card`} key={recipe.id}>
                            <div>
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                            <h4>{recipe.title}</h4>
                            <div className={classes.info}>
                                <FaLeaf />
                                <p>{recipe.vegan ? 'Vegan' : 'Not vegan'}</p>
                            </div>
                            <div className={classes.info}>
                                <FaClock />
                                <p>{toHoursAndMinutes(recipe.readyInMinutes)}</p>
                            </div>
                        </Link>   
                    );
                })}
            </div>
        )
    }

    if (query) {
        return (
            <div className={classes.container}>
                {query.map((recipe) => {
                    return(
                        <Link to={`/details/${recipe.id}`} className={`${classes.item} card`} key={recipe.id}>
                            <div>
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                            <h4>{recipe.title}</h4>
                        </Link>   
                    );
                })}
            </div>
        )
    }
}

export default Recipes;
