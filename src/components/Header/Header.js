import React, { useEffect, useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.css';

function Header(props) {
  const {searchBar, text} = props;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <Link to="/"><h1>easyCHEF <GiKnifeFork /></h1></Link>
        {theme === 'light' ? (
          <button className={classes.darkBtn} onClick={toggleTheme}>
            <span className={classes.darkMod}>Dark</span> <FaMoon />
          </button>
        ) : (
          <button className={classes.lightBtn} onClick={toggleTheme}>
            <BsFillSunFill /> <span className={classes.lightMod}>Light</span>
          </button>
        )}
      </div> 
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
