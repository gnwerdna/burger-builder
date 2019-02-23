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
            {
                controls.map(ctrl => {
                    return <BuildControl key={ctrl.label} label={ctrl.label} />
                })
            }
        </div>
    )
}

export default buildControls