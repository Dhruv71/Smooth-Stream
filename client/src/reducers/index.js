import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducers';
import streamReducer from './streamReducer';

export default combineReducers({
    auth : authReducer,
    form : formReducer,
    streams: streamReducer
})