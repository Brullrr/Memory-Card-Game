import classes from './LossModal.module.css';
import React from 'react';

const LossModal = (props) => {

    

    return (<div className={classes.LossModalBody}>
        <p>Your character has been defeated</p> 
        <p>Your progress has not been lost!</p> 
        <p>Please choose a new leader</p>
    </div>)
}

export default LossModal;