import { combineReducers } from 'redux';
import ImageReducers from './ImageReducers';

export default combineReducers({
    image: ImageReducers
});