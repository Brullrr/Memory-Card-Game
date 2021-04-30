import React, {  useEffect } from 'react';
import classes from './Timer.module.css';
import { connect } from 'react-redux'
import { useHistory} from 'react-router-dom';

import * as actionTypes from '../../../store/actionTypes/actionTypes'; 


const Timer = (props) => {
    const history = useHistory();

    
        useEffect(() => {
            if(props.candidate) {
                if(props.timerInitialized){
                    if(props.seconds <= 0) {
                        props.TimerEnded();
                    }
                } else {
                    props.initializeTimer();
                        let myInterval = setInterval(()=> {
                                                props.decreaseSeconds();
                                        }, 1000)
                        setTimeout(()=> {
                            clearInterval(myInterval)
                            props.turnOffTimer();
                        }, 61000)
                }
            } else {
                history.push('/StageTwo')
            }
        })
    
    
    

    
    return (
        <div className={classes.TimerContainer}>{props.seconds}</div>)
}


const mapStateToProps = state => {
    return {
        seconds: state.tmrrdcr.timer,
        timerInitialized: state.tmrrdcr.timerInitialized,
        candidate: state.stgtwrdcr.candidate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        turnOffTimer: () => dispatch({type: actionTypes.STOP_TIMER}),
        decreaseSeconds: () => dispatch({type: actionTypes.DECREASRE_SECONDS}),
        initializeTimer: () => dispatch({type: actionTypes.INITIALIZE_TIMER}),
        resetTimer: () => dispatch({type: actionTypes.RESET_TIMER})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer);