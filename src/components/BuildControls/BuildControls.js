import React from 'react'
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import classes from './BuildControls.module.css';
const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => {
                    return <BuildControl 
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)} 
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}/>
                })
            }
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}

export default buildControls