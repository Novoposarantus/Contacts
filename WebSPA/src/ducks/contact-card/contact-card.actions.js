import { request, requestTypes } from "../api";
import { config } from '../../constants';

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
} from "./contact-card.actionsTypes";

const emptyContact = {
  Name: '',
  Surname: '',
  PhoneNumber: '',
  Email: ''
};

export const loadContact = async (dispatch, id) => {
  if (!id) {
    dispatch({
        type: LOAD_CONTACT_SUCCESS,
        data: {...emptyContact}
    });
    return;
  }

  dispatch({ type: LOAD_CONTACT_REQUEST });
  try {
    const url = `${config.contacts}/${id}`;
    const data = await request(url, requestTypes.get);
    dispatch({
        type: LOAD_CONTACT_SUCCESS,
        data
    });
  } catch (error) {
    dispatch({ type: LOAD_CONTACT_FAILURE });
  }
};

export const saveContact = async (dispatch, contact)  => {
    dispatch({ type: SAVE_CONTACT_REQUEST });
  
    try {
      const data = await request(config.contacts, requestTypes.post, contact);
      dispatch({
          type: SAVE_CONTACT_SUCCESS,
          data
      });
    } catch (error) {
      dispatch({ type: SAVE_CONTACT_FAILURE });
    }
};

export const updateContact = async (dispatch, contact) => {
    dispatch({ type: EDIT_CONTACT_REQUEST });
  
    try {
      const data = await request(config.contacts, requestTypes.put, contact);
      dispatch({
          type: EDIT_CONTACT_SUCCESS,
          data
      });
    } catch (error) {
      dispatch({ type: EDIT_CONTACT_FAILURE });
    }
};

export const deleteContact = async (dispatch, id) => {
    dispatch({ type: DELETE_CONTACT_REQUEST });
  
    try {
      const url = `${config.contacts}/${id}`;
      await request(url, requestTypes.delete);
      dispatch({
          type: DELETE_CONTACT_SUCCESS
      });
    } catch (error) {
      dispatch({ type: DELETE_CONTACT_FAILURE });
    }
};

export const clearContactData = dispatch => () => {
  dispatch({ type:CLEAR_CONTACT_DATA });
}

