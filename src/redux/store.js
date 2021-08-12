import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { v4 as uuidv4 } from 'uuid';

const contactsFromLocalStorage = JSON.parse(localStorage.getItem('contacts'));
const initialState = contactsFromLocalStorage
  ? {
      contacts: {
        items: [...contactsFromLocalStorage],
        filter: '',
      },
    }
  : {
      contacts: {
        items: [],
        filter: '',
      },
    };

console.log('contactsFromLocalStorage', contactsFromLocalStorage);
console.log('initialState', initialState);

// createStore(reducer, [preloadedState], [enhancer]);
// const reducer = (state = initialState, action) => {
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'phonebook/addContact':
      // console.log('Add contact: ', payload);
      let increasedContacts = [
        ...state.contacts.items,
        { id: uuidv4(), name: payload.name, number: payload.number },
      ];
      localStorage.setItem('contacts', JSON.stringify(increasedContacts));
      return {
        ...state,
        contacts: {
          ...state.contacts,
          // items: [...state.contacts.items, { id: uuidv4(), name: payload.name, number: payload.number }],
          items: increasedContacts,
          filter: state.contacts.filter,
        },
      };
    // return state;

    case 'phonebook/removeContact':
      // console.log('Remove contact: ', payload);
      const reducedContacts = state.contacts.items.filter(
        contact => contact.id !== payload,
      );
      localStorage.setItem('contacts', JSON.stringify(reducedContacts));
      return {
        ...state,
        contacts: {
          ...state.contacts,
          // items: [...state.contacts.items, { id: uuidv4(), name: payload.name, number: payload.number }],
          items: reducedContacts,
          filter: state.contacts.filter,
        },
      };
    // return state;

    case 'phonebook/changeFilter':
      // return state.contacts.filter = payload;
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items,
          filter: payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
