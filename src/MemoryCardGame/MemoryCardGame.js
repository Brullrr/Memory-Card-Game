import React, { Fragment } from 'react';
import Overlay from './reusables/Overlay/Overlay';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/actionTypes';
import FirstTime from './components/FirstTimeCompenent/FirstTime';
import WorldMap from './components/WorldMapComponent/WorldMap';
 
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
        }, 30000);
    }

    return ( 
    <Fragment>
        {overlay}
        {firstTime}
        {worldMap}
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