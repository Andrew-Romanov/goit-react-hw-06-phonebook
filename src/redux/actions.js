export const addContact = value => ({
  type: 'phonebook/addContact',
  payload: value,
});

export const removeContact = value => ({
  type: 'phonebook/removeContact',
  payload: value,
});

export const changeFilter = value => ({
  type: 'phonebook/changeFilter',
  payload: value,
});
