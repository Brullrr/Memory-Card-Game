import classes from './FirstTime.module.css';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes/actionTypes';
import ImpImg from '../../reusables/Images/Imp.png'

const FirstTime = (props) => {
    let instructionsArray = [
        'Hello',
        'Welcome to Stonehorn',
        'Some BS story telling how to play the game'
    ]

    // const [instructionsNum, setInstructionsNum] = useState({
    //     instructionsNum: 0
    // }) 


    
    // const timer = () => {
    //         if(instructionsNum.instructionsNum >= instructionsArray.length){
                
    //             setInstructionsNum({
    //                 instructionsNum: 0
    //             })
    //             stopInstructions();
    //         } else {
    //         setInstructionsNum({
    //             instructionsNum: instructionsNum.instructionsNum + 1
    //         })
    //         }
    // }

    // const loopInstructions = setInterval(timer, 1500)

    // const stopInstructions = () => {
    //     clearInterval(loopInstructions)
    // }


    // const timer = () => {
    //     if(props.instructionsNum >= instructionsArray.length) {
            
    //     } else {
    //         props.incrementInstructionNumber();
            
    //     }
    // }
    
    // setInterval(timer, 1500)
    if(props.instructionsNum === 0) {
        props.incrementInstructionNumber();
    }

    console.log(props.instructionsNum)

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