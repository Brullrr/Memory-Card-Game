import React from 'react';
import classes from './GameLost.module.css';
import Sunset from '../../reusables/Images/SunsetDino.png';




const GameLost = () => {
    return (
        <div className={classes.GameWon}>
            <p className={classes.Victory}>Defeat</p>
            <div className={classes.DinoHolder}>
                <img className={classes.SunsetDino} src={Sunset} alt="Sunset" ></img>
                <p className={classes.PlayAgain}>You lose. You may not pass go. You may <strong>not</strong> collect 200 dollars.</p>
            </div>
        </div>
    )
}


export default GameLost;