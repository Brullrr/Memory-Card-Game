import React from 'react';
import classes from './GameWon.module.css';
import Sunset from '../../reusables/Images/SunsetDino.png';




const GameWon = (props) => {
    return (
        <div className={classes.GameWon}>
            <p className={classes.Victory}>Victory</p>
            <div className={classes.DinoHolder}>
                <img className={classes.SunsetDino} src={Sunset} alt="Sunset" onClick={props.clicked}></img>
                <p className={classes.PlayAgain}>If you would like to play again, please click the sunset dinosaur.</p>
            </div>
        </div>
    )
}


export default GameWon;