import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    LOAD_CONTACT_REQUEST,  
    LOAD_CONTACT_SUCCESS,  
    LOAD_CONTACT_FAILURE,  
    SAVE_CONTACT_REQUEST,  
    SAVE_CONTACT_SUCCESS,  
    SAVE_CONTACT_FAILURE,  
    EDIT_CONTACT_REQUEST,  
    EDIT_CONTACT_SUCCESS,  
    EDIT_CONTACT_FAILURE,  
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    CLEAR_CONTACT_DATA
} from './contact-card.actionsTypes';

const contact = handleActions(
    {
        [LOAD_CONTACT_SUCCESS] : (_state,action) => action.data,
        [CLEAR_CONTACT_DATA]   : () => null
    },
    null
);

const isLoading = handleActions(
    {
        [LOAD_CONTACT_REQUEST]     : () => true,
        [LOAD_CONTACT_FAILURE]     : () => false,
        [LOAD_CONTACT_SUCCESS]     : () => false,
        [DELETE_CONTACT_REQUEST]   : () => true,
        [DELETE_CONTACT_FAILURE]   : () => false,
        [DELETE_CONTACT_SUCCESS]   : () => false,
        [SAVE_CONTACT_REQUEST]     : () => true,
        [SAVE_CONTACT_FAILURE]     : () => false,
        [SAVE_CONTACT_SUCCESS]     : () => false,
        [EDIT_CONTACT_REQUEST]     : () => true,
        [EDIT_CONTACT_FAILURE]     : () => false,
        [EDIT_CONTACT_SUCCESS]     : () => false
    },
    false
);

const error = handleActions(
    {
        [LOAD_CONTACT_FAILURE]     : (_state, action) => action.data,
        [SAVE_CONTACT_FAILURE]     : (_state, action) => action.data, 
        [EDIT_CONTACT_FAILURE]     : (_state, action) => action.data, 
        [DELETE_CONTACT_FAILURE]   : (_state, action) => action.data 
    },
    null
);
export default combineReducers({
    contact,
    isLoading,
    error
})