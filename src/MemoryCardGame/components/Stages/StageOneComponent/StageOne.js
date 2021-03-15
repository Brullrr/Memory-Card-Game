import classes from './StageOne.module.css';
import React from 'react';
import GameBoard from '../../../reusables/gameBoard/GameBoard';
import shuffle from '../../../reusables/Shuffle/shuffle';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actionTypes/actionTypes';

import draftfish from '../../../reusables/Images/StageOne/Draftfish.png';
import draftfishBlue from '../../../reusables/Images/StageOne/DraftfishBlue.png';
import draftfishBlack from '../../../reusables/Images/StageOne/DraftfishBlack.png';
import draftfishDarkGreen from '../../../reusables/Images/StageOne/DraftfishDarkGreen.png';
import draftfishDarkPurple from '../../../reusables/Images/StageOne/DraftfishDarkPurple.png';
import draftfishGreen from '../../../reusables/Images/StageOne/DraftfishGreen.png';
import draftfishGrey from '../../../reusables/Images/StageOne/DraftfishGrey.png';
import draftfishOrange from '../../../reusables/Images/StageOne/DraftfishOrange.png';
import draftfishPurple from '../../../reusables/Images/StageOne/DraftfishPurple.png';
import draftfishRed from '../../../reusables/Images/StageOne/DraftfishRed.png';
import draftfishTeal from '../../../reusables/Images/StageOne/DraftfishTeal.png';
import draftfishYellow from '../../../reusables/Images/StageOne/DraftfishYellow.png';
import frog from '../../../reusables/Images/StageOne/Frog.png';
import speechBubble from '../../../reusables/Images/SpeechBubble.png';
import { Link } from 'react-router-dom';
 

const StageOne = (props) => {


    let cardsArray = [draftfish, draftfishBlack, draftfishBlue, draftfishDarkGreen, draftfishDarkPurple, draftfishGreen, draftfishGrey,
                        draftfishOrange, draftfishPurple, draftfishRed, draftfishTeal, draftfishYellow
    ]
    
        cardsArray = shuffle(cardsArray)
     
    
    const activateLAsers = () => {
        alert(props.isStageOneComplete);
        props.clearClickedOn();
        
    }

    const winCondition = () => {
        alert('YOU WIN');
        props.clearClickedOn();
        
    }

    let addCardToState = (ele) => {
        props.clickedOnArray.every((e) => e !== ele) ? props.clickedOnArray.length === cardsArray.length-1 ? winCondition() : props.clickedOn(ele) : activateLAsers();

    }



    return (
        <div className={classes.StageOneBody}>
            <div>
                <div className={classes.FrogHolder}>
                    <Link to='/'>
                        <img className={classes.Frog} src={frog}></img>
                    </Link>
                </div>
                <div className={classes.SpeechBubble}><img src={ speechBubble}></img><p>Help me catch each fish!<br></br>Or... click me to go home.</p></div>
            </div>
            <GameBoard cards={cardsArray} clicked={addCardToState} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isStageOneComplete: state.stgnrdcr.isStageOneComplete,
        clickedOnArray: state.stgnrdcr.clickedOn
    }

}

const mapDispatchToProps = dispatch => {
    return {
        clickedOn: (ele) => dispatch({type: actionTypes.STAGE_ONE_CLICKED_ON, clickedCard: ele}),
        clearClickedOn: () => dispatch({type: actionTypes.STAGE_ONE_CLEAR_CLICKED_ON})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StageOne);