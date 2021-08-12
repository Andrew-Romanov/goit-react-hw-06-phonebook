import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER } from './contacts-types';

const contactsFromLocalStorage = JSON.parse(localStorage.getItem('contacts'));

const itemsReducer = (
  state = contactsFromLocalStorage ?? [],
  { type, payload },
) => {
  switch (type) {
    case ADD_CONTACT:
      let increasedContacts = [
        ...state,
        { id: uuidv4(), name: payload.name, number: payload.number },
      ];
      localStorage.setItem('contacts', JSON.stringify(increasedContacts));
      return increasedContacts;

    case REMOVE_CONTACT:
      const reducedContacts = state.filter(contact => contact.id !== payload);
      localStorage.setItem('contacts', JSON.stringify(reducedContacts));
      return reducedContacts;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
