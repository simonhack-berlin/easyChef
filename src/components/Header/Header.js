import React from 'react';
import {GiKnifeFork} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
        <Link to="/"><h1>easyCHEF <GiKnifeFork /></h1></Link>
        <div className={classes.container}>
          {props.children}
        </div>
    </header>
  )
}

export default Header;
