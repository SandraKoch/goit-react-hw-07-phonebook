import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addingSuccess,
  deletingSuccess,
  addingInProgress,
  addingError,
  deletingInProgress,
  deletingError,
} from './contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64e8bf7799cf45b15fe013ca.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    const contacts = response.data;
    dispatch(fetchingSuccess(contacts));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export const addNewContact =
  ({ name, phone }) =>
  async dispatch => {
    try {
      dispatch(addingInProgress());
      const newContact = {
        name,
        phone,
        id: nanoid(),
      };
      await axios.post('/contacts', newContact);
      dispatch(addingSuccess(newContact));
    } catch (error) {
      dispatch(addingError(error.message));
    }
  };

export const deleteContact = id => async dispatch => {
  try {
    dispatch(deletingInProgress());
    await axios.delete(`/contacts/${id}`);
    dispatch(deletingSuccess(id));
  } catch (error) {
    dispatch(deletingError(error.message));
  }
};
