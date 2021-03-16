import classes from './WorldMap.module.css';
import React, { Fragment} from 'react';
import {  Link } from 'react-router-dom';
import frog from '../../reusables/Images/StageOne/Frog.png'
import { connect } from 'react-redux';


const WorldMap = (props) => {



    let stageOneWords = props.isStageOneComplete ? <div className={classes.StageOneWords}>
                            <p>Well done!</p>
                            <p>Enough fish have been collected.</p>
                        </div> :
                        <div className={classes.StageOneWords}>
                            <p>New Stage!</p>
                            <p>Help the frog collect fish for the village.</p>
                         </div>

    let stageOne = <div className={classes.StageOne}>
                        <div className={classes.Frog}>
                            <img src={frog}></img>
                        </div>
                        {stageOneWords}
                    </div>


    return (
        <Fragment>
            <div className={classes.WorldMap}>
                < Link to="/StageOne" style={{textDecoration: 'none'}} >{stageOne}</Link>

                < Link to="/StageTwo" style={{textDecoration: 'none'}} ><div className={classes.StageTwo}>learn The negihbors</div></Link>

                < Link to="/StageThree" style={{textDecoration: 'none'}}><div className={classes.StageThree}>Kill the invaders</div></Link>

                < Link to="/StageFour" style={{textDecoration: 'none'}}>
                    <div className={classes.StageFour}>Become the invading aliens
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        isStageOneComplete: state.stgnrdcr.isStageOneComplete
    }
}

export default connect(mapStateToProps)(WorldMap);