import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    instructionsNumber: 0
};

const instructionsReducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCR_INSTRUCTIONS_NUMBER) {
        console.log('REDCUER Begin')
        const timer = () => {
            console.log('Reducer in timer')
                
                return {
                    ...state,
                    instructionsNumber: state.instructionsNumber + 1
                }
                   
            }
        setInterval(timer, 1500);

        const loopInstructions = setInterval(timer, 1500)

        const stopInstructions = () => {    
            clearInterval(loopInstructions)
        }
    }
    return state
}


export default instructionsReducer;