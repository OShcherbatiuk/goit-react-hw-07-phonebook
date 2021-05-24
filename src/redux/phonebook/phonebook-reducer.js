import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const isNoUnique = state.find(contact => contact.name === payload.name);
    if (isNoUnique) {
      alert(`${payload.name} is alredy in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
