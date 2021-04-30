import React from 'react';
import Imp from '../../reusables/Images/Imp.png';
import {Link, useHistory} from 'react-router-dom';
import classes from './BackToBattle.module.css';

const BackToBattle = () => {
    const history = useHistory();
    
    history.push('/StageThree')
    

    return (
        <div className={classes.BackToBattle}>
            <div className={classes.ImpHolder}>
                <img src={Imp} alt='Another Imp'/>
            </div>
            
            <Link to='/StageThree'><p>Back to the battle!</p></Link>
            
        </div>
    )


}

export default BackToBattle