import classes from './WorldMap.module.css';
import React, { Fragment} from 'react';


const WorldMap = () => {
    return (
        <Fragment>
            <div className={classes.WorldMap}>
                <div>Meet the tttown?</div>
                <div>learn The negihbors</div>
                <div>Kill the invaders</div>
                <div>Become the invading aliens</div>
            </div>
        </Fragment>
    )
}

export default WorldMap;