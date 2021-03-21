import React from 'react';
import classes from './StageFour.module.css';
import * as actionTypes from '../../../../store/actionTypes/actionTypes';
import { connect } from 'react-redux';


const StageFour = (props) => {
    return( <div className={classes.StageFourBody}>
        <p>a candidate</p>
        <p> a game board?? or should i se a new type of game?</p>
        <p>winning loss </p>
        <p>words</p>
        


    </div>)
}


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StageFour);

