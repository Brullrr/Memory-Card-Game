
import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    isOverlayOn: true
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.TURN_ON_OVERLAY : 
            return {
                ...state,
                isOverlayOn: true
            }
        case actionTypes.TURN_OFF_OVERLAY : 
            return {
                ...state,
                isOverlayOn: false
            }
    }

    return state
};

export default reducer;