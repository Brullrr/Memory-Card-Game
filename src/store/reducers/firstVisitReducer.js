import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    isUserFirstVisit: true
};

const firstVisitReducer = (state = initialState, action) => {
    if(action.type === actionTypes.TURN_OFF_FIRST_VISIT) {
        return {
            ...state,
            isUserFirstVisit: false
        }
    }
    return state
};

export default firstVisitReducer;