import React from 'react';
import Imp from '../../reusables/Images/Imp.png';
import classes from './BackToBattle.module.css';
import { Link } from 'react-router-dom';

const BackToBattle = () => {
   
    

    return (
        <div className={classes.BackToBattle}>
            <div className={classes.ImpHolder}>
                <img src={Imp} alt='Another Imp'/>
            </div>
            
            <Link to='/StageTwo'> <p>Go back to the battle!</p> </Link>
            
        </div>
    )


}

export default BackToBattle