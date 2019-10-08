import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    LOAD_CONTACTS_REQUEST,
    LOAD_CONTACTS_SUCCESS,
    LOAD_CONTACTS_FAILURE,
    CONTACTS_LIST_EMPTY

} from './contacts-list.actionsTypes';

const main = handleActions(
    {
        [LOAD_CONTACTS_SUCCESS]  : (_state, action) => action.data,
        [CONTACTS_LIST_EMPTY]    : () => []
    },
    []
);

const isLoading = handleActions(
    {
        [LOAD_CONTACTS_REQUEST] : () => true,
        [CONTACTS_LIST_EMPTY]   : () => false,
        [LOAD_CONTACTS_FAILURE] : () => false,
        [LOAD_CONTACTS_SUCCESS] : () => false
    },
    false
);

const error = handleActions(
    {
        [LOAD_CONTACTS_FAILURE]   : (_state,action) => action.data
    },
    null
);
export default combineReducers({
    main,
    isLoading,
    error
})