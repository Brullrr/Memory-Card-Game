import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    timerIsRunning: true,
    instructionsNumber: 0
};

const instructionsReducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCR_INSTRUCTIONS_NUMBER) {
        
            return {
                ...state,
                instructionsNumber: state.instructionsNumber + 1
            }
            

    }
    return state
}


export default instructionsReducer;