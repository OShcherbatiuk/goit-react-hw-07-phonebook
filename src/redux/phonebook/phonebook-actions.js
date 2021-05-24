// import actionTypes from './phonebook-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const addContact = data => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     ...data,
//   },
// });

const addContact = createAction('phonebook/addContact', data => ({
  payload: {
    id: uuidv4(),
    ...data,
  },
}));

// const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: id,
// });

const deleteContact = createAction('phonebook/deleteContact');

// const changeFilter = value => ({
//   type: actionTypes.FILTER,
//   payload: value,
// });

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
