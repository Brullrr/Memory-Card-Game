import classes from './FirstTime.module.css';
import React, { Fragment } from 'react';
import ImpImg from '../../reusables/Images/Imp.png'

const FirstTime = () => {

    return (
        <Fragment>
            <img src={ImpImg}></img>
            <div className={classes.WordBox}>
                <p>Hello!</p>
            </div>
        </Fragment>
    )

}


export default FirstTime;