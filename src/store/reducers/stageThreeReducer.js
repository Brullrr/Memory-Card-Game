import * as actionTypes from '../actionTypes/actionTypes';


const initialState = {
    isStageThreeComplete: false,
    clickedOn: [],
    stageThreeLost: false,
    currentCardLayout: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STAGE_THREE_COMPLETED :
            return {
                ...state,
                isStageThreeComplete: true
            }
        case actionTypes.STAGE_THREE_CLICKED_ON :
            return {
                ...state,
                clickedOn: [...state.clickedOn.concat([action.clickedCard])]
            }
        case actionTypes.STAGE_THREE_CLEAR_CLICKED_ON :
            return {
                ...state,
                clickedOn: []
            }
        case actionTypes.STAGE_THREE_LOST :
            return {
                ...state,
                stageThreeLost: true
            }
        case actionTypes.STAGE_THREE_REVERT_LOST :
            return {
                ...state,
                stageThreeLost: false
            }
        case actionTypes.STAGE_THREE_SHUFFLE : 
        return {
            ...state,
            currentCardLayout: action.value
        }
  
        default:
            break;
    }


    return state
};

export default reducer;