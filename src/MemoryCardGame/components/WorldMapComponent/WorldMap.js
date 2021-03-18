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
import LossModal from '../../reusables/LossModal/LossModal';
import Overlay from '../../reusables/Overlay/Overlay';
import * as actionTypes from '../../../store/actionTypes/actionTypes';
import GameLost from '../GameLost/GameLost';


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
                sourceCandidate = Imp
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

        stageThree = props.isStageTwoComplete && props.candidate ? < Link to="/StageThree" style={{textDecoration: 'none'}}>{stageThree} </Link> : <div className={classes.StageThree}></div>
        
        let overlay = <Overlay />
        let lossModal = null
        if(!props.candidate && props.isStageTwoComplete && props.villsArray.length !== 0){
            lossModal = <Link to='/StageTwo' > <LossModal /> </Link>
            props.turnOnOverlay();
        }
        if(props.candidate) {
            props.turnOffOverlay();
        }

        if(props.villsArray.length === 0) {
            props.turnOnOverlay();
            lossModal = <GameLost />
            setTimeout(props.gameLostHandler, 5000)
        }
        


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
                {lossModal}
                {overlay}
            </div>
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        isStageOneComplete: state.stgnrdcr.isStageOneComplete,
        isStageTwoComplete: state.stgtwrdcr.isStageTwoComplete,
        isStageThreeComplete: state.stgthrrdcr.isStageThreeComplete,
        candidate: state.stgtwrdcr.candidate,
        villsArray: state.stgtwrdcr.vills
    }
}

const mapDispatchToProps = dispatch => {
    return {
        turnOffOverlay: () => dispatch({type: actionTypes.TURN_OFF_OVERLAY}),
        turnOnOverlay: () => dispatch({type: actionTypes.TURN_ON_OVERLAY}),
        gameLostHandler: () => dispatch({type: actionTypes.GAME_LOST})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);