import React from 'react';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
        <h1>easyCHEF</h1>
        <div className={classes.container}>
          {props.children}
        </div>
    </header>
  )
}

export default Header;
