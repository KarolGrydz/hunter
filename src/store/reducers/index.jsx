import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import mapReducer from './mapReducer';

export default combineReducers({ blog: blogReducer, map: mapReducer });
