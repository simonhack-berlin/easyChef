import React, { useContext } from 'react';
import Cookies from 'universal-cookie';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.css';
import { ThemeContext } from '../../store/Theme-context';

function Header(props) {
  const {searchBar, text} = props;
  const {theme, setTheme} = useContext(ThemeContext);
  const cookies = new Cookies();
  const getTheme = cookies.get('theme');

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    cookies.set('theme', theme, { path: '/' });
  }

  if (getTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <Link to="/"><h1>easyCHEF <GiKnifeFork /></h1></Link>
        {getTheme === 'light' ? <button className={classes.darkBtn} onClick={toggleTheme}><span className={classes.darkMod}>{theme}</span> <FaMoon /></button> : <button className={classes.lightBtn} onClick={toggleTheme}><BsFillSunFill /> <span className={classes.lightMod}>{theme}</span></button>}
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
