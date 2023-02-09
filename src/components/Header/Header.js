import React from 'react';
import {GiKnifeFork} from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.css';

function Header(props) {
  const {searchBar, text} = props;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <header className={classes.header}>
        <Link to="/"><h1>easyCHEF <GiKnifeFork /></h1></Link>
        
          {searchBar && (
            <div className={classes.container}>
              <SearchBar />
            </div>
            )
          }
          {text && (
            <div className={classes.container}>
              <h2>{text}</h2>
              <button onClick={goBack} className={classes.button}>Go back</button>
            </div>
            )
          }
    </header>
  )
}

export default Header;
