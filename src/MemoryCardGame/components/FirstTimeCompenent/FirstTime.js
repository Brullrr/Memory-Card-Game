import classes from './FirstTime.module.css';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes/actionTypes';
import ImpImg from '../../reusables/Images/Imp.png'

const FirstTime = (props) => {
    let instructionsArray = [
        'Yo, listen up',
        'Here\'s a story',
        'About a little guy',
        'That lives in a blue world',
        'And all day ',
        'and all night',
        'And everything he sees',
        'is just blue',
        'like him ',
        'inside and outside',
        'Blue his house',
        'With a blue little window',
        'And a blue corvette',
        'And everything is blue',
        'for him',
        'And himself ',
        'and everybody around',
        'Cause he ain\'t got',
        'nobody',
        'to listen to',
        'to listen to',
        'IM BLUE',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
        'DA BA DEE DA BA DI',
    ]


    if(props.instructionsNum === 0) {
        console.log("Test is running")
        let loopInstructions = setInterval( () => { props.incrementInstructionNumber() },1350)

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