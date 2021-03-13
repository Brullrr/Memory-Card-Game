import classes from './WorldMap.module.css';
import React, { Fragment} from 'react';
import {  Link } from 'react-router-dom';


const WorldMap = () => {
    return (
        <Fragment>
            <div className={classes.WorldMap}>
                < Link to="/StageOne" ><div className={classes.StageOne}>Meet the tttown?</div></Link>

                < Link to="/StageTwo" ><div className={classes.StageTwo}>learn The negihbors</div></Link>

                < Link to="/StageThree" ><div className={classes.StageThree}>Kill the invaders</div></Link>

                < Link to="/StageFour" >
                    <div className={classes.StageFour}>Become the invading aliens
                    <p>a world map with four major clickable sections</p>
                    <p>each section is set to clickable after completing the prior stage</p>
                    <p>LOL I AM ROTFL</p>
                    <p>Components that need to be added</p>
                    <p>a component for each "level"</p>
                    <p>I have 0 direction of where this project is headed</p>
                    <p>list characters</p>
                    <p>Should i use routing (browser router or Nextjs) for different stages or just a popup????</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default WorldMap;