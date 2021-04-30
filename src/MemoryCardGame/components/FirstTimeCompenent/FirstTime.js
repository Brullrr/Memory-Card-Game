import classes from './FirstTime.module.css';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes/actionTypes';
import ImpImg from '../../reusables/Images/Imp.png'

const FirstTime = (props) => {
    let instructionsArray = [
        'Welcome to our village',
        'I\'m Imp, but you can just call me Imp.',
        'I\'ll teach you how to play.',
        'When a task needs to be finished,',
        'please click each picture just once.',
        'Clicking twice will reset your progress.',
        'Please click on my frog friend!',
        'Enjoy your adventure!'
    ]


    if(props.instructionsNum === 0) {
        console.log("Test is running")
        let loopInstructions = setInterval( () => { props.incrementInstructionNumber() },3550)

        setTimeout(()=> {
            clearInterval(loopInstructions)
        }, 35000)        
    }


    return (
        <Fragment>
            <div className={classes.FirstTime}>
                <div className={classes.WordBox}>
                <p>{instructionsArray[props.instructionsNum]}</p>
                </div>
                <div className={classes.ImpHolder}>
                    <img className={classes.Imp} src={ImpImg} alt="Imp"></img>
                </div>
                
            </div>
            
        </Fragment>
    )

}


const mapDispatchToProps = dispatch => {
    return {
        incrementInstructionNumber: () => dispatch({type: actionTypes.INCR_INSTRUCTIONS_NUMBER})
    }
}

const mapStateToProps = state => {
    return {
        instructionsNum: state.nstrctnsrdcr.instructionsNumber
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTime);