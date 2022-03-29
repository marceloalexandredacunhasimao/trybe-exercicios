import { combineReducers } from 'redux';
import { personalReducer, professionalReducer } from './reducer';

const rootReducer = combineReducers({ personalReducer, professionalReducer });

export default rootReducer;
