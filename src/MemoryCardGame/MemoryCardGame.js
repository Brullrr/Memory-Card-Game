import React, { Fragment } from 'react';
import Overlay from './reusables/Overlay/Overlay';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/actionTypes';
import FirstTime from './components/FirstTimeCompenent/FirstTime';
import WorldMap from './components/WorldMapComponent/WorldMap';
import { HashRouter, Route } from 'react-router-dom';
import StageOne from './components/Stages/StageOneComponent/StageOne';
import StageTwo from './components/Stages/StageTwoComponent/StageTwo';
import StageThree from './components/Stages/StageThreeComponent/StageThree';
import StageFour from './components/Stages/StageFourComponent/StageFour';
 
const MemoryCardGame = (props) => {

    let overlay = null
    let firstTime = null
    let worldMap = <WorldMap />
    
    if(props.isUserFirstVisit){
        overlay = <Overlay />
        firstTime = <FirstTime />
        worldMap = null
        setTimeout(() => {
            props.turnOffOverlay();
            props.turnOffFirstVisit();
        }, 3000);
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

            <Route path='/StageOne' exact render={ () => <StageOne />} />
            <Route path='/StageTwo' exact render={ () => <StageTwo />} />
            <Route path='/StageThree' exact render={ () => <StageThree />} />
            <Route path='/StageFour' exact render={ () => <StageFour />} />
        </HashRouter>
    </Fragment> 
    )
}


const mapDispatchToProps = dispatch => {
    return {
        turnOffOverlay: () => dispatch({type: actionTypes.TURN_OFF_OVERLAY}),
        turnOffFirstVisit: () => dispatch({type: actionTypes.TURN_OFF_FIRST_VISIT})
    }
}

const mapStateToProps = state => {
    return {
        isOverlayOn: state.vrlyrdcr.isOverlayOn,
        isUserFirstVisit: state.frsttmvstrdcr.isUserFirstVisit
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemoryCardGame);