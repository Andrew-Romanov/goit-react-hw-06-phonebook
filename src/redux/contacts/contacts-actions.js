import { ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER } from './contacts-types';

export const addContact = value => ({
  type: ADD_CONTACT,
  payload: value,
});

export const removeContact = value => ({
  type: REMOVE_CONTACT,
  payload: value,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
