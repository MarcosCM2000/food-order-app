import React from "react";
//Components
import CartIcon from "../Cart/CartIcon";
//Style
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    return (<button className={classes.button}>
        <span>
            <CartIcon></CartIcon>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
    </button>);
};
export default HeaderCartButton;