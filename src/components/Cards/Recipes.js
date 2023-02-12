import React, { useEffect, useState } from 'react';
import { FaLeaf, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { toHoursAndMinutes } from '../../helper/functions';
import classes from './Recipes.module.css';

function Recipes(props) {
    const [cardClass, setCardClass] = useState();
    const {recipes, query} = props;
    const cookies = new Cookies();
    const getTheme = cookies.get('theme');

    useEffect(()=>{
		if (getTheme === 'dark') {
            setCardClass('card-dark');
            document.body.classList.add('dark');
            cookies.set('theme', 'dark', { path: '/' });
        } else {
            cookies.set('theme', 'light', { path: '/' });
            setCardClass('card-light');
            document.body.classList.remove('dark');
        }
	}, [getTheme])

    if (recipes) {
        return (
            <div className={classes.container}>
                {recipes.map((recipe) => {
                    return(
                        <Link to={`/details/${recipe.id}`} className={`${classes.item} ${cardClass}`} key={recipe.id}>
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
                        <Link to={`/details/${recipe.id}`} className={`${classes.item} card-${getTheme}`} key={recipe.id}>
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
