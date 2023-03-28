import React, {useContext, useEffect, useState} from "react";
//Components
import CartIcon from "../Cart/CartIcon";
//Context
import CartContext from "../../store/cart-context";
//Style
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    //  HOOKS
    const cartCtx = useContext(CartContext);
    useEffect(()=>{
        if (cartCtx.items.length ===0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        }, 300);
        //  Cleanup fn
        return () =>{
            clearTimeout(timer);
        };
    }, [cartCtx.items]);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
        const cartNumber = +(currNumber) + +(item.amount);
        return cartNumber;
    }, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    return (<button className={btnClasses} onClick={props.onClick}>
        <span>
            <CartIcon></CartIcon>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>);
};
export default HeaderCartButton;