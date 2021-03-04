import React, { Fragment } from 'react';
import Overlay from './reusables/Overlay/Overlay';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/actionTypes';
 
const MemoryCardGame = (props) => {

    setTimeout(() => {
        props.turnOffOverlay()
    }, 3000)

    return ( 
    <Fragment>
        <Overlay />
        <div>
            <p>a characcter</p>
            <p>speech bubble</p>
            <p>a world map in the background</p>
        </div>
    </Fragment> 
    )
}


const mapDispatchToProps = dispatch => {
    return {
        turnOffOverlay: () => dispatch({type: actionTypes.TURN_OFF_OVERLAY})
    }
}

const mapStateToProps = state => {
    return {
        isOverlayOn: state.vrlyrdcr.isOverlayOn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemoryCardGame);