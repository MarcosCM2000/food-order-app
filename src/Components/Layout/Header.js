import React from 'react';
//Assets
import mealsImage from '../../Assets/meals.jpg';
//Components
import HeaderCartButton from './HeaderCartButton';
//Style
import classes from './Header.module.css';
const Header = (props) =>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Error displaying asset"/>
            </div>
        </React.Fragment>
    );

};
export default Header;