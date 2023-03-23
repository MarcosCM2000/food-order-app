import React from "react";
//Components
import Input from "../../UI/Input";
//Style
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            label="Amount" />
            <button>+ Add</button>
        </form>
    );
};
export default MealItemForm;