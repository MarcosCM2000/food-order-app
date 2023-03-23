import React from 'react';
//Assets
import mealsImage from '../../Assets/meals.jpg';
//Style
import classes from './Header.module.css';
const Header = (props) =>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Error displaying asset"/>
            </div>
        </React.Fragment>
    );

};
export default Header;