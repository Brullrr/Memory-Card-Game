import React, { Fragment } from 'react';
import Overlay from './reusables/Overlay/Overlay';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/actionTypes';
import FirstTime from './components/FirstTimeCompenent/FirstTime';
import WorldMap from './components/WorldMapComponent/WorldMap';
 
const MemoryCardGame = (props) => {

    let overlay = null
    let firstTime = null
    
    if(props.isUserFirstVisit){
        overlay = <Overlay />
        firstTime = <FirstTime />
        setTimeout(() => {
            props.turnOffOverlay();
            props.turnOffFirstVisit();
        }, 30000);
    }

    return ( 
    <Fragment>
        {overlay}
        {firstTime}
        <div>
            <p>a world map with four major clickable sections</p>
            <p>each section is set to clickable after completing the prior stage</p>
            <p>LOL I AM ROTFL</p>
            <p>Components that need to be added</p>
            <p>a component for each "level"</p>
            <p>I have 0 direction of where this project is headed</p>
            <p>list characters</p>
            <p>Should i use routing (browser router or Nextjs) for different stages or just a popup????</p>
        </div>
        <WorldMap />
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