import { combineReducers } from 'redux';
import allGistsReducer from './allgistreducer';
import singleGistReducer from './singlegistreducer';

const rootReducer = combineReducers({allGistsReducer, singleGistReducer});
export default rootReducer;