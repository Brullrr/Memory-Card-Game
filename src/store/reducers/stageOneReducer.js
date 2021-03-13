import * as actionTypes from '../actionTypes/actionTypes';


const initialState = {
    isStageOneComplete: false,
    clickedOn: []
};

const stageOnereducer = (state = initialState, action) => {


    if(action.type === actionTypes.STAGE_ONE_CLICKED_ON){

        console.log(action.clickedCard)
        return {
            ...state,
            clickedOn: [...state.clickedOn.concat([action.clickedCard])]
        }
    }

    if(action.type === actionTypes.STAGE_ONE_CLEAR_CLICKED_ON){
        return {
            ...state,
            clickedOn: []
        }
    }

    return state
};

export default stageOnereducer;