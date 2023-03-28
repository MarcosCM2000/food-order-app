import React, {useContext} from "react";
//Components
import CartIcon from "../Cart/CartIcon";
//Context
import CartContext from "../../store/cart-context";
//Style
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
        const cartNumber = +(currNumber) + +(item.amount);
        return cartNumber;
    }, 0);
    return (<button className={classes.button} onClick={props.onClick}>
        <span>
            <CartIcon></CartIcon>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>);
};
export default HeaderCartButton;