import classes from './WorldMap.module.css';
import React, { Fragment} from 'react';
import {  Link } from 'react-router-dom';
import frog from '../../reusables/Images/StageOne/Frog.png';
import Imp from '../../reusables/Images/Imp.png';
import Crit from '../../reusables/Images/StageTwo/Crit.PNG'
import Racoon from '../../reusables/Images/StageTwo/Racoon.png'
import Squirrel from '../../reusables/Images/StageTwo/Squirrel.png'
import Goose from '../../reusables/Images/StageTwo/Goose.png'
import Dino from '../../reusables/Images/StageTwo/Dino.png'
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
                            <img src={frog} alt='frog'></img>
                        </div>
                        {stageOneWords}
                    </div>

    let stageTwoWords = props.isStageTwoComplete ? <div className={classes.StageTwoWords}>
                            <p>Enter the village.</p>
                            <p>Choose someone to lead the battle.</p>
                        </div> :
                        <div className={classes.StageTwoWords}>
                            <p>New Stage!</p>
                            <p>Enter the village and meet your new friends!</p>
                         </div>

    let stageTwo = <div className={classes.StageTwo}>
                        <div className={classes.ImpHolder}>
                            <img className={classes.Imp} src={Imp} alt='Imp'></img>
                        </div>
                        {stageTwoWords}
                    </div>

        stageTwo = props.isStageOneComplete ? < Link to="/StageTwo" style={{textDecoration: 'none'}} >{stageTwo}</Link> : <div className={classes.StageTwo}></div>


        let sourceCandidate = null

        switch (props.candidate) {
            case 'Crit':
                sourceCandidate = Crit
                break;
            case 'Racoon':
                sourceCandidate = Racoon
                break;
            case 'Squirrel':
                sourceCandidate = Squirrel
                break;
            case 'Goose':
                sourceCandidate = Goose
                break;
            case 'Dino':
                sourceCandidate = Dino
                break;
        
            default:
                sourceCandidate = null
                break;
        }
         let stageThreeWords = props.isStageThreeComplete ? <div className={classes.StageTwoWords}>
                            <p>The village is saved!</p>
                            <p>It is time to go on the offensive!</p>
                        </div> :
                        <div className={classes.StageTwoWords}>
                            <p>The village is under attack!</p>
                            <p>The battle must not last longer than 3 minutes!</p>
                         </div>

        let stageThree =    <div className={classes.StageThree}>
                        <div className={classes.FrogHolder}>
                            <img className={classes.Frog} src={sourceCandidate} alt='Imp'></img>
                        </div>
                                {stageThreeWords}
                            </div>

        stageThree = props.isStageTwoComplete ? < Link to="/StageThree" style={{textDecoration: 'none'}}>{stageThree} </Link> : <div className={classes.StageThree}></div>

    return (
        <Fragment>
            <div className={classes.WorldMap}>
                < Link to="/StageOne" style={{textDecoration: 'none'}} >{stageOne}</Link>

                {stageTwo}
                {stageThree}

                < Link to="/StageFour" style={{textDecoration: 'none'}}>
                    <div className={classes.StageFour}><p>stuff</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        isStageOneComplete: state.stgnrdcr.isStageOneComplete,
        isStageTwoComplete: state.stgtwrdcr.isStageTwoComplete,
        isStageThreeComplete: state.stgthrrdcr.isStageThreeComplete,
        candidate: state.stgtwrdcr.candidate
    }
}

export default connect(mapStateToProps)(WorldMap);