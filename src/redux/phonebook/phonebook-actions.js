import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phonebook/addContact', data => ({
  payload: {
    id: uuidv4(),
    ...data,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
