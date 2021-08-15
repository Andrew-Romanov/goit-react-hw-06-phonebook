import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact');
export const removeContact = createAction('phonebook/removeContact');
export const changeFilter = createAction('phonebook/changeFilter');
