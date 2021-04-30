import * as actionTypes from '../actionTypes/actionTypes';
const initialState = {
    timer: 61,
    timerStarted: false,
    timerInitialized: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_TIMER :
            return {
                ...state,
                timerStarted: true
            }
        case actionTypes.INITIALIZE_TIMER :
            return {
                ...state,
                timerInitialized: true
            }
        case actionTypes.STOP_TIMER :
            return {
                ...state,
                timerStarted: false,
                timerInitialized: false
            }
        case actionTypes.DECREASRE_SECONDS :
            let timer = state.timer - 1
            return {
                ...state,
                timer: timer
            }
        case actionTypes.RESET_TIMER : 
        return {
            ...state,
            timer: 61
        }
        default:
            break;
    }

    return state
};

export default reducer;