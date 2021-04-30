import React, { Fragment } from 'react';
import Overlay from './reusables/Overlay/Overlay';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/actionTypes';
import FirstTime from './components/FirstTimeCompenent/FirstTime';
import WorldMap from './components/WorldMapComponent/WorldMap';
import { HashRouter, Route, useHistory } from 'react-router-dom';
import StageOne from './components/Stages/StageOneComponent/StageOne';
import StageTwo from './components/Stages/StageTwoComponent/StageTwo';
import StageThree from './components/Stages/StageThreeComponent/StageThree';
import StageFour from './components/Stages/StageFourComponent/StageFour';
import BackToBattle from './reusables/backToBattle/BackToBattle';
import GameWon from '../MemoryCardGame/components/GameWon/GameWon';
 
const MemoryCardGame = (props) => {

    let history = useHistory();
    let overlay = null
    let firstTime = null
    let worldMap = <WorldMap />
    let stageOne = props.timerInitialized && !props.isStageThreeComplete ? <BackToBattle /> : <StageOne />
    let stageTwo = props.timerInitialized && !props.isStageThreeComplete ? <BackToBattle /> : <StageTwo />
    let stageThree = <StageThree />
    let stageFour = props.timerInitialized && !props.isStageThreeComplete ? <BackToBattle /> : <StageFour />
    if(!props.isStageOneComplete){
        stageTwo = <div></div>
        stageThree = <div></div>
        stageFour = <div></div>
    }
    if(props.isUserFirstVisit){
        overlay = <Overlay />
        firstTime = <FirstTime />
        worldMap = null
        setTimeout(() => {
            props.turnOffOverlay();
            props.turnOffFirstVisit();
        }, 28000);
    }

    if(props.timerInitialized && !props.isStageThreeComplete) {
        worldMap = <BackToBattle />
    }

    const restartGame = () => {
        history.push('/')
        props.restartGame();

    }
    

    if(props.isStageFourComplete) {
        stageOne = <GameWon clicked={restartGame} />
        stageTwo = <GameWon clicked={restartGame} />
        stageThree = <GameWon clicked={restartGame} />
        stageFour = <GameWon clicked={restartGame} />
        worldMap = <GameWon clicked={restartGame} />
    }
    

    return ( 
    <Fragment>
        <HashRouter>
            <Route path='/' exact render={() => {
                return (<div>
                    {overlay}
                    {firstTime}
                    {worldMap}
                </div>)
            } } />

            <Route path='/StageOne' exact render={ () => <div>{stageOne}</div>} />
            <Route path='/StageTwo' exact render={ () => <div>{stageTwo}</div>} />
            <Route path='/StageThree' exact render={ () => <div>{stageThree}</div>} />
            <Route path='/StageFour' exact render={ () => <div>{stageFour}</div>} />
        </HashRouter>
    </Fragment> 
    )
}


const mapDispatchToProps = dispatch => {
    return {
        turnOffOverlay: () => dispatch({type: actionTypes.TURN_OFF_OVERLAY}),
        turnOffFirstVisit: () => dispatch({type: actionTypes.TURN_OFF_FIRST_VISIT}),
        restartGame: () => dispatch({type: actionTypes.GAME_LOST})
    }
}

const mapStateToProps = state => {
    return {
        isOverlayOn: state.vrlyrdcr.isOverlayOn,
        isUserFirstVisit: state.frsttmvstrdcr.isUserFirstVisit,
        timerInitialized: state.tmrrdcr.timerInitialized,
        isStageThreeComplete: state.stgthrrdcr.isStageThreeComplete,
        isStageFourComplete: state.stgfrrdcr.isStageFourComplete,
        isStageOneComplete: state.stgnrdcr.isStageOneComplete
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemoryCardGame);