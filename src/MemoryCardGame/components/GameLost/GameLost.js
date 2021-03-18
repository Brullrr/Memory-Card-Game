import React from 'react';
import classes from './GameLost.module.css';
import Sunset from '../../reusables/Images/SunsetDino.png';




const GameLost = () => {
    return (
        <div className={classes.GameLost}>
            <p>You lose. You may not pass go. You may not collect one hundred dollars.</p>
            <img className={classes.SunsetDino} src={Sunset} alt="Sunset"></img>
        </div>
    )
}


export default GameLost;