import React, { useRef, useState} from "react";
//Components
import Input from "../../UI/Input";
//Style
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
    //  HOOKS
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        //  Always a string
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
        //  Validations
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            //  Error
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input input={{
                id: 'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            label="Amount" ref={amountInputRef} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
};
export default MealItemForm;