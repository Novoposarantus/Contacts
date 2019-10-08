import { request, requestTypes } from "../api";
import { config } from '../../constants';

import {
    LOAD_CONTACTS_REQUEST,
    LOAD_CONTACTS_SUCCESS,
    LOAD_CONTACTS_FAILURE,
    CONTACTS_LIST_EMPTY
} from "./contacts-list.actionsTypes";

export const loadContacts = async dispatch => {
  dispatch({ type: LOAD_CONTACTS_REQUEST });
  try {
    const data = await request(config.contacts, requestTypes.get);
    const isDataEmpty = data.length === 0;
    if (isDataEmpty) dispatch({ type: CONTACTS_LIST_EMPTY });
    else
      dispatch({
        type: LOAD_CONTACTS_SUCCESS,
        data
      });
  } catch (error) {
    dispatch({ type: LOAD_CONTACTS_FAILURE });
  }
};