import React from 'react';
import classes from './StageThree.module.css';
import * as actionTypes from '../../../../store/actionTypes/actionTypes';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Crit from '../../../reusables/Images/StageTwo/Crit.PNG'
import Racoon from '../../../reusables/Images/StageTwo/Racoon.png'
import Squirrel from '../../../reusables/Images/StageTwo/Squirrel.png'
import Goose from '../../../reusables/Images/StageTwo/Goose.png'
import Dino from '../../../reusables/Images/StageTwo/Dino.png'
import speechBubble from '../../../reusables/Images/SpeechBubble.png'
import Gameboard from '../../../reusables/gameBoard/GameBoard';
import shuffle from '../../../reusables/Shuffle/shuffle';
import Timer from '../../../reusables/Timer/Timer';
import Oracle from '../../../reusables/Images/StageThree/Oracle.PNG';

//IMOS
import ImoWhite from '../../../reusables/Images/StageThree/ImoWhite.png';
import ImoDarkBlue from '../../../reusables/Images/StageThree/ImoDarkBlue.png';
import ImoBlack from '../../../reusables/Images/StageThree/ImoBlack.png';
import ImoDarkGreen from '../../../reusables/Images/StageThree/ImoDarkGreen.png';
import ImoDarkPurple from '../../../reusables/Images/StageThree/ImoDarkPurple.png';
import ImoLightGreen from '../../../reusables/Images/StageThree/ImoLightGreen.png';
import ImoGrey from '../../../reusables/Images/StageThree/ImoGrey.png';
import ImoOrange from '../../../reusables/Images/StageThree/ImoOrange.png';
import ImoLightPurple from '../../../reusables/Images/StageThree/ImoLightPurple.png';
import ImoRed from '../../../reusables/Images/StageThree/ImoRed.png';
import ImoLightBlue from '../../../reusables/Images/StageThree/ImoLightBlue.png';
import ImoYellow from '../../../reusables/Images/StageThree/ImoYellow.png';
//GOOLS
import GoolWhite from '../../../reusables/Images/StageThree/GoolWhite.png';
import GoolDarkBlue from '../../../reusables/Images/StageThree/GoolDarkBlue.png';
import GoolBlack from '../../../reusables/Images/StageThree/GoolBlack.png';
import GoolDarkGreen from '../../../reusables/Images/StageThree/GoolDarkGreen.png';
import GoolDarkPurple from '../../../reusables/Images/StageThree/GoolDarkPurple.png';
import GoolLightGreen from '../../../reusables/Images/StageThree/GoolLightGreen.png';
import GoolGrey from '../../../reusables/Images/StageThree/GoolGrey.png';
import GoolOrange from '../../../reusables/Images/StageThree/GoolOrange.png';
import GoolLightPurple from '../../../reusables/Images/StageThree/GoolLightPurple.png';
import GoolRed from '../../../reusables/Images/StageThree/GoolRed.png';
import GoolLightBlue from '../../../reusables/Images/StageThree/GoolLightBlue.png';
import GoolYellow from '../../../reusables/Images/StageThree/GoolYellow.png';
import { Fragment } from 'react';


const StageThree = (props) => {
    let timer = null

    
    
    const history = useHistory();

    
    
    const timerEnded = () => {
        history.push('/')
        props.removeCandidate();
        props.resetTimer();
        
    }


    let timerIsActive = props.timerStarted
    if(!timerIsActive){
        props.turnOnTimer();
    }
    if(timerIsActive) {
        timer =<Timer TimerEnded={timerEnded} />
    }

    let cardsArray = props.currentCardLayout.length === 0 ? [GoolWhite, GoolBlack, GoolDarkBlue, GoolDarkGreen, GoolDarkPurple, GoolLightGreen, GoolGrey,
        GoolOrange, GoolLightPurple, GoolRed, GoolLightBlue, GoolYellow, ImoWhite, ImoBlack, ImoDarkBlue, ImoDarkGreen, ImoDarkPurple, ImoLightGreen, ImoGrey,
        ImoOrange, ImoLightPurple, ImoRed, ImoLightBlue, ImoYellow
    ] : props.currentCardLayout

    const shuffleCardsAddLayoutToState = (ele) => {
        cardsArray = shuffle(cardsArray)
        props.shuffleCardsAddToState(cardsArray)
        props.clickedOn(ele)
    }
    if(props.currentCardLayout.length === 0){
        shuffleCardsAddLayoutToState();
    }

    const lose = () => {
        props.clearClickedOn();
        props.stageThreeLost();
        setTimeout(() =>{
            props.stageThreeLostRevert();
            
        }, 1500)
    }

    const winCondition = () => {
        props.clearClickedOn();
        props.stageThreeComplete();
        props.resetTimer();
    }

    let addCardToState = (ele) => {
        props.clickedOnArray.every((e) => e !== ele) ? props.clickedOnArray.length === cardsArray.length-1 ? winCondition() : shuffleCardsAddLayoutToState(ele) : lose();
    }
    let stageThreeLost = props.isStageThreeLost ? true : false

    let gameboard = <Gameboard cards={cardsArray} Lost={stageThreeLost} stage='2' clicked={addCardToState} />
    if(props.isStageThreeComplete) {
        gameboard = <div className={classes.Victory}>Well done! <br /> The oracle has been defeated!</div>
    }


    let sourceCandidate = null;
    let attackPhrase = null

        switch (props.candidate) {
            case 'Crit':
                sourceCandidate = Crit
                attackPhrase = ' Finish this quick. I have a stick to attend to. '
                break;
            case 'Racoon':
                sourceCandidate = Racoon
                attackPhrase = 'Let\'s get\'em! '
                break;
            case 'Squirrel':
                sourceCandidate = Squirrel
                attackPhrase = 'I don\'t think they want to play with us. '
                break;
            case 'Goose':
                sourceCandidate = Goose
                attackPhrase = 'Just imminent danger, in the middle of it me!'
                break;
            case 'Dino':
                sourceCandidate = Dino
                attackPhrase = '  Maybe they know where Sunset is...'
                break;
        
            default:
                sourceCandidate = null
                attackPhrase = null
                break;
        }
        
    
        if(props.isStageThreeComplete){
            timer = null
        }

        let oracle = <div className={classes.OracleHolder}>
        <img src={Oracle} alt='oracle'></img>
    </div>
        let candidate = <img  className={classes.CandidateHolder} src={sourceCandidate} alt='candidate'></img>
        if(props.isStageThreeComplete){
            oracle = null
            candidate = <Link to='/'>
            <img  className={classes.CandidateHolder} src={sourceCandidate} alt='candidate'></img>
            </Link>
        }


    return (
        <Fragment>
            <div className={classes.StageThreeBody}>
                <div>
                
                    <div className={classes.CandidateHolder} >
                        {candidate}
                    </div>
                
                    <div className={classes.SpeechBubble}>
                        <img src={ speechBubble} alt='speechbub'></img>
                        <p>{attackPhrase}</p>
                    </div>
                    {oracle}
                    
                
                </div>
            {gameboard}
            {timer}
            </div>
            
        </Fragment>
        )
}

const mapStateToProps = state => {
    return {
        isStageThreeComplete: state.stgthrrdcr.isStageThreeComplete,
        candidate: state.stgtwrdcr.candidate,
        isStageThreeLost: state.stgthrrdcr.stageThreeLost,
        clickedOnArray: state.stgthrrdcr.clickedOn,
        seconds: state.tmrrdcr.timer,
        timerStarted: state.tmrrdcr.timerStarted,
        currentCardLayout: state.stgthrrdcr.currentCardLayout
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickedOn: (ele) => dispatch({type: actionTypes.STAGE_THREE_CLICKED_ON, clickedCard: ele}),
        clearClickedOn: () => dispatch({type: actionTypes.STAGE_THREE_CLEAR_CLICKED_ON}),
        stageThreeComplete: () => dispatch({type: actionTypes.STAGE_THREE_COMPLETED}),
        stageThreeLost: () => dispatch({type: actionTypes.STAGE_THREE_LOST}),
        stageThreeLostRevert: () => dispatch({type: actionTypes.STAGE_THREE_REVERT_LOST}),
        removeCandidate: () => dispatch({type: actionTypes.REMOVE_CANDIDATE}),
        turnOnTimer: () => dispatch({type: actionTypes.START_TIMER}),
        turnOffTimer: () => dispatch({type: actionTypes.STOP_TIMER}),
        resetTimer: () => dispatch({type: actionTypes.RESET_TIMER}),
        shuffleCardsAddToState: (array) => dispatch({type: actionTypes.STAGE_THREE_SHUFFLE, value: array})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StageThree)
