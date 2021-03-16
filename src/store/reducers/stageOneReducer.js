import * as actionTypes from '../actionTypes/actionTypes';


const initialState = {
    isStageOneComplete: false,
    clickedOn: [],
    stageOneLost: false
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

    if(action.type === actionTypes.STAGE_ONE_COMPLETED){
        return {
            ...state,
            isStageOneComplete: true
        }
    }

    if(action.type === actionTypes.STAGE_ONE_LOST){
        return {
            ...state,
            stageOneLost: true
        }
    }

    if(action.type === actionTypes.STAGE_ONE_REVERT_LOST){
        return {
            ...state,
            stageOneLost: false
        }
    }


    return state
};

export default stageOnereducer;