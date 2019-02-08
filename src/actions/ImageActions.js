import {SET_IMAGE} from './ActionTypes';
import { Actions } from 'react-native-router-flux';

export const set_image = (imgUri) => {  
    return {type: SET_IMAGE, payload: imgUri};
    Actions.imagemanipulation();
}