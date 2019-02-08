import {SET_IMAGE} from './../actions/ActionTypes';
const INITIAL_STATE = {
    imageURI: ''
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_IMAGE:
            return {...state, imageURI: action.payload}
        default: 
            return state;
    }
}