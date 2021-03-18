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

    let cardsArray = [GoolWhite, GoolBlack, GoolDarkBlue, GoolDarkGreen, GoolDarkPurple, GoolLightGreen, GoolGrey,
        GoolOrange, GoolLightPurple, GoolRed, GoolLightBlue, GoolYellow, ImoWhite, ImoBlack, ImoDarkBlue, ImoDarkGreen, ImoDarkPurple, ImoLightGreen, ImoGrey,
        ImoOrange, ImoLightPurple, ImoRed, ImoLightBlue, ImoYellow
    ]

    cardsArray = shuffle(cardsArray)

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
        
    }

    let addCardToState = (ele) => {
        props.clickedOnArray.every((e) => e !== ele) ? props.clickedOnArray.length === cardsArray.length-1 ? winCondition() : props.clickedOn(ele) : lose();

    }
    let stageThreeLost = props.isStageThreeLost ? true : false

    console.log('[StageThree COMponent] is stage 3 lost:    ' + stageThreeLost)
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
        const history = useHistory();
        const timerEnded = () => {
            history.push('/')
            console.log('TImer ended')
            props.removeCandidate();
        }

        
        



    return (
        <Fragment>
            <div className={classes.StageThreeBody}>
                <div>
                
                    <div className={classes.CandidateHolder}>
                        <Link to='/'>
                            <img className={classes.CandidateHolder} src={sourceCandidate} alt='candidate'></img>
                        </Link>
                    </div>
                
                    <div className={classes.SpeechBubble}>
                        <img src={ speechBubble} alt='speechbub'></img>
                        <p>{attackPhrase}</p>
                    </div>
                
                </div>
            {gameboard}
            </div>
            <Timer TimerEnded={timerEnded} />
        </Fragment>
        )
}

const mapStateToProps = state => {
    return {
        isStageThreeComplete: state.stgthrrdcr.isStageThreeComplete,
        candidate: state.stgtwrdcr.candidate,
        isStageThreeLost: state.stgthrrdcr.stageThreeLost,
        clickedOnArray: state.stgthrrdcr.clickedOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickedOn: (ele) => dispatch({type: actionTypes.STAGE_THREE_CLICKED_ON, clickedCard: ele}),
        clearClickedOn: () => dispatch({type: actionTypes.STAGE_THREE_CLEAR_CLICKED_ON}),
        stageThreeComplete: () => dispatch({type: actionTypes.STAGE_THREE_COMPLETED}),
        stageThreeLost: () => dispatch({type: actionTypes.STAGE_THREE_LOST}),
        stageThreeLostRevert: () => dispatch({type: actionTypes.STAGE_THREE_REVERT_LOST}),
        removeCandidate: () => dispatch({type: actionTypes.REMOVE_CANDIDATE})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StageThree)
