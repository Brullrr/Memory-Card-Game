import React from 'react';
import classes from './StageTwo.module.css';
import { connect } from 'react-redux';
import Crit from '../../../reusables/Images/StageTwo/Crit.PNG'
import Racoon from '../../../reusables/Images/StageTwo/Racoon.png'
import Squirrel from '../../../reusables/Images/StageTwo/Squirrel.png'
import Goose from '../../../reusables/Images/StageTwo/Goose.png'
import Dino from '../../../reusables/Images/StageTwo/Dino.png'
import Imp from '../../../reusables/Images/Imp.png'
import { Link } from 'react-router-dom';
import * as actionTypes from '../../../../store/actionTypes/actionTypes';


const StageTwo = (props) => {

    

    let vills = [...props.vills];

    let showVills = vills.map((element) => {

        let sourceVill = null;

        switch (element.name) {
            case 'Crit':
                sourceVill = Crit
                break;
            case 'Racoon':
                sourceVill = Racoon
                break;
            case 'Squirrel':
                sourceVill = Squirrel
                break;
            case 'Goose':
                sourceVill = Goose
                break;
            case 'Dino':
                sourceVill = Dino
                break;
        
            default:
                sourceVill = null
                break;
        }

        let border = props.candidate === element.name ?  '2px solid green' :  null
        return (
            <div key={sourceVill} className={classes.VillagerHolder}>
                <img  className={classes.Vill} src={sourceVill} alt={element.name} onClick={() => {props.becomeCandidate(element.name)}}  style={{
                    border: border
                }} />
                <p className={classes.Description}>{element.description}</p>
            </div>
        )
    })
    

    return (
        <div className={classes.StageTwoBody}>
            
            <div className={classes.ImpHolder}>
            <Link to='/'><img className={classes.Imp} src={Imp} onClick={props.stageTwoCompleted} alt="Imp"></img></Link>
                <p>{props.isStageTwoComplete ? 'Choose someone to lead the defense!' : 'These are my friends. Say hello!'}</p>
            </div>
            <div className={classes.Villagers}>
                {showVills}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        vills: state.stgtwrdcr.vills,
        isStageTwoComplete: state.stgtwrdcr.isStageTwoComplete,
        candidate: state.stgtwrdcr.candidate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        stageTwoCompleted: () => dispatch({type: actionTypes.STAGE_TWO_COMPLETED}),
        becomeCandidate: (name) => dispatch({type: actionTypes.BECOME_CANDIDATE, name: name}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StageTwo)