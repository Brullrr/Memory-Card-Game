import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    isStageTwoComplete: false,
    vills: [{name: 'Crit',
            description: 'Hi, I\'m Crit. I manage the forest area, but most of the time I like to just play with this stick.'},
            {
                name: 'Racoon',
                description: 'I\'m Randolf. But you can just call me Rac.' 
            },
            {
                name: 'Goose',
                description: 'The name\'s Captain Goose. Stand back everyone! A goose\'s gotta do what a goose has gotta do!  '
            },
            {
                name: 'Squirrel',
                description: 'Hi, my names Acorn. Let\'s play some music together sometime? Just kidding...Unless? '
            },
            {
                name: 'Dino',
                description: 'I\'m Twi, the twilight dinosaur. My brother the sunset dinosaur is missing. Can you help me find him?'
            }
            ],
    stageTwoLost: false,
    candidate: null
};

const stageTwoReducer = (state = initialState, action) => {

    if(action.type === actionTypes.REMOVE_CANDIDATE){

        let condition = (candidateObject) => {
            return candidateObject.name !== state.candidate
        }
        
        return {
            ...state,
            vills:  state.vills.filter(condition),
            candidate: null
        }
    }

    if(action.type === actionTypes.STAGE_TWO_COMPLETED) {
        return {
            ...state,
            isStageTwoComplete: true
        }
    }

    if(action.type === actionTypes.BECOME_CANDIDATE) {
        switch (action.name) {
            case 'Crit' :
                return {
                    ...state,
                    candidate: 'Crit'
                }
            
        case 'Racoon' :
                return {
                    ...state,
                    candidate: 'Racoon'
                }
            
            case 'Goose' :
                return {
                    ...state,
                    candidate: 'Goose'
                }
            
            case 'Dino' :
                return {
                    ...state,
                    candidate: 'Dino'
                }
            
            case 'Squirrel' :
                return {
                    ...state,
                    candidate: 'Squirrel'
                }
            
    
            default:
                return {
                    ...state,
                    candidate: null
                }
    }
    }

    



    return state
};

export default stageTwoReducer;