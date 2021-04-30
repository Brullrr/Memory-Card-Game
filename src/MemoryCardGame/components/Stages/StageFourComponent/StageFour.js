import React from 'react';
import classes from './StageFour.module.css';
import * as actionTypes from '../../../../store/actionTypes/actionTypes';
import { connect } from 'react-redux';
import Crit from '../../../reusables/Images/StageTwo/Crit.PNG'
import Racoon from '../../../reusables/Images/StageTwo/Racoon.png'
import Squirrel from '../../../reusables/Images/StageTwo/Squirrel.png'
import Goose from '../../../reusables/Images/StageTwo/Goose.png'
import Dino from '../../../reusables/Images/StageTwo/Dino.png';
import Gameboard from '../../../reusables/gameBoard/GameBoard';
import { Link, useHistory } from 'react-router-dom';
import shuffle from '../../../reusables/Shuffle/shuffle';
import speechBubble from '../../../reusables/Images/SpeechBubble.png'
import heart from '../../../reusables/Images/Heart.png'
import Sunset from '../../../reusables/Images/SunsetDino.png'
//Deer
import deerRed from '../../../reusables/Images/StageFour/deerRed.png'
import deerOrange from '../../../reusables/Images/StageFour/deerOrange.png'
import deerYellow from '../../../reusables/Images/StageFour/deerYellow.png'
import deerLightGreen from '../../../reusables/Images/StageFour/deerLightGreen.png'
import deerDarkGreen from '../../../reusables/Images/StageFour/deerDarkGreen.png'
import deerLightBlue from '../../../reusables/Images/StageFour/deerLightBlue.png'
import deerDarkBlue from '../../../reusables/Images/StageFour/deerDarkBlue.png'
import deerPink from '../../../reusables/Images/StageFour/deerPink.png'
import deerPurple from '../../../reusables/Images/StageFour/deerPurple.png';
import deerWhite from '../../../reusables/Images/StageFour/deerWhite.png'
import deerGrey from '../../../reusables/Images/StageFour/deerGrey.png'
import deerBlack from '../../../reusables/Images/StageFour/deerBlack.png'

const StageFour = (props) => {
    const history = useHistory();

    let sourceCandidate = null;
    let attackPhrase = null

        switch (props.candidate) {
            case 'Crit':
                sourceCandidate = Crit
                attackPhrase = 'Time to swing my stick.'
                break;
            case 'Racoon':
                sourceCandidate = Racoon
                attackPhrase = 'LAY ON!'
                break;
            case 'Squirrel':
                sourceCandidate = Squirrel
                attackPhrase = 'We\'ll teach them how to play. '
                break;
            case 'Goose':
                sourceCandidate = Goose
                attackPhrase = 'I\'m gunna give them the hammer!'
                break;
            case 'Dino':
                sourceCandidate = Dino
                attackPhrase = 'Sunset...Why?'
                break;
        
            default:
                sourceCandidate = null
                attackPhrase = null
                break;
        }
        

        const killTheCandidate = () => {
            if(props.isStageThreeComplete && !props.isStageFourComplete){
                props.removeCandidate();
                props.newLife();
            }
        }
        if(props.hearts <= 0){
            killTheCandidate();
            history.push('/');
            
        }
        let cardsArray = props.currentCardLayout.length === 0 ? [deerRed, deerOrange, deerYellow, deerLightGreen, deerDarkGreen, deerLightBlue,
            deerDarkBlue, deerPink, deerPurple, deerBlack, deerWhite, deerGrey
        ] : props.currentCardLayout

        const shuffleCardsAddLayoutToState = (ele) => {
            cardsArray = shuffle(cardsArray)
            props.shuffleCardsAddToState(cardsArray)
            props.clickedOn(ele)
        }
        const lose = () => {
            props.clearClickedOn();
            props.stageFourLost();
            setTimeout(() =>{
                props.stageFourLostRevert();
            }, 1500)
        }
        const winCondition = () => {
            props.clearClickedOn();
            props.stageFourComplete();
        }

        let addCardToState = (ele) => {
            props.clickedOnArray.every((e) => e !== ele) ? props.clickedOnArray.length === cardsArray.length-1 ? winCondition() : shuffleCardsAddLayoutToState(ele) : lose();
        }
        let stageFourLost = props.isStageFourLost ? true : false
        let gameboard = <Gameboard cards={cardsArray} Lost={stageFourLost} stage='4' clicked={addCardToState}  />
        if(props.isStageFourComplete) {
            gameboard = <div className={classes.Victory}>Well done! <br /> Sunset has been defeated!</div>
        }
        console.log('[StageFour.js ] hearts left ' + props.hearts)

        let howManyHearts = []
        
        for(let i=0; i<props.hearts; i++) {
            howManyHearts.push(<img src={heart} className={classes.Heart} key={i} />)
        }

        let sunset = <div className={classes.SunsetHolder}>
                            <img src={Sunset} alt='sunset'></img>
                     </div>


    return( <div className={classes.StageFourBody}>
                        <div className={classes.CandidateHolder}>
                            <Link to='/'>
                            <img onClick={killTheCandidate} className={classes.Candidate} src={sourceCandidate} alt='candidate'></img>                                </Link>
                        </div>
                        <div className={classes.SpeechBubble}>
                            <img src={ speechBubble} alt='speechbub'></img>
                            <p>{attackPhrase}</p>
                        </div>
                        <div className={classes.HeartsContainer}>
                            {howManyHearts.map((ele) => ele)}
                        </div>
                        {sunset}
        {gameboard}

    </div>)
}


const mapStateToProps = state => {
    return {
        candidate: state.stgtwrdcr.candidate,
        isStageThreeComplete: state.stgthrrdcr.isStageThreeComplete,
        currentCardLayout: state.stgfrrdcr.currentCardLayout,
        isStageFourComplete: state.stgfrrdcr.isStageFourComplete,
        clickedOnArray: state.stgfrrdcr.clickedOn,
        isStageFourLost: state.stgfrrdcr.stageFourLost,
        hearts: state.stgfrrdcr.hearts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeCandidate: () => dispatch({type: actionTypes.REMOVE_CANDIDATE}),
        clearClickedOn: () => dispatch({type: actionTypes.STAGE_FOUR_CLEAR_CLICKED_ON}),
        clickedOn: (ele) => dispatch({type: actionTypes.STAGE_FOUR_CLICKED_ON, clickedCard: ele}),
        shuffleCardsAddToState: (array) => dispatch({type: actionTypes.STAGE_FOUR_SHUFFLE, value: array}),
        stageFourLost: () => dispatch({type: actionTypes.STAGE_FOUR_LOST}),
        stageFourLostRevert: () => dispatch({type: actionTypes.STAGE_FOUR_REVERT_LOST}),
        stageFourComplete: () => dispatch({type: actionTypes.STAGE_FOUR_COMPLETED}),
        newLife: () => dispatch({type: actionTypes.STAGE_FOUR_NEW_LIFE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StageFour);

