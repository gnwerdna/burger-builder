import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from '../Burger/Burgeringredient/Bugeringredient';
const burger = (props) => {
    // console.log(props);
    let transformIngredients = Object.keys(props.ingredients)
        // console.log(transformIngredients);
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey}/>;
            });
        })
        // console.log(transformIngredients);
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding some ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;