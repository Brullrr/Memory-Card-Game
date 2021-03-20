import React from 'react';
import classes from './StageFour.module.css';
import * as actionTypes from '../../../../store/actionTypes/actionTypes';
import { connect } from 'react-redux';


const StageFour = (props) => {
    return( <div className={classes.StageFourBody}>heyo</div>)
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

