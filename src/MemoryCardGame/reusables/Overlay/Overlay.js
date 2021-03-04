import classes from './Overlay.module.css';
import React, {Fragment} from 'react';
import { connect } from 'react-redux';

const Overlay = (props) => {

    let overlay = null
    if(props.isOverlayOn) {
       overlay = <div className={classes.Overlay}></div>
    }


    return  (
        <Fragment>
            {overlay}
        </Fragment>
    )
       
    
        
}

const mapStateToProps = state => {
    return {
        isOverlayOn: state.vrlyrdcr.isOverlayOn
    }
}

export default connect(mapStateToProps)(Overlay);