import * as actionTypes from '../actionTypes/actionTypes';


const initialState = {
    isStageFourComplete: false,
    clickedOn: [],
    stageFourLost: false,
    currentCardLayout: [],
    hearts: 4
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STAGE_FOUR_COMPLETED :
            return {
                ...state,
                isStageFourComplete: true
            }
        case actionTypes.STAGE_FOUR_CLICKED_ON :
            return {
                ...state,
                clickedOn: [...state.clickedOn.concat([action.clickedCard])]
            }
        case actionTypes.STAGE_FOUR_CLEAR_CLICKED_ON :
            return {
                ...state,
                clickedOn: []
            }
        case actionTypes.STAGE_FOUR_LOST :
            
            return {
                ...state,
                stageFourLost: true,
                hearts: state.hearts - 1
            }
        case actionTypes.STAGE_FOUR_REVERT_LOST :
            return {
                ...state,
                stageFourLost: false
            }
        case actionTypes.STAGE_FOUR_SHUFFLE : 
        return {
            ...state,
            currentCardLayout: action.value
        }
        case actionTypes.STAGE_FOUR_NEW_LIFE : 
        return {
            ...state,
            hearts: 4
        }
  
        default:
            break;
    }


    return state
};

export default reducer;