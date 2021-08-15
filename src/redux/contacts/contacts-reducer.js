import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { addContact, removeContact, changeFilter } from './contacts-actions';

const contactsFromLocalStorage = JSON.parse(localStorage.getItem('contacts'));

const itemsReducer = createReducer(contactsFromLocalStorage ?? [], {
  [addContact]: (state, action) => {
    const increasedContacts = [
      ...state,
      {
        id: uuidv4(),
        name: action.payload.name,
        number: action.payload.number,
      },
    ];
    localStorage.setItem('contacts', JSON.stringify(increasedContacts));
    return increasedContacts;
  },

  [removeContact]: (state, action) => {
    const reducedContacts = state.filter(
      contact => contact.id !== action.payload,
    );
    localStorage.setItem('contacts', JSON.stringify(reducedContacts));
    return reducedContacts;
  },
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
