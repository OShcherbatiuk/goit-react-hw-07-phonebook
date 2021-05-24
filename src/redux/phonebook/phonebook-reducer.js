import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './phonebook-types';
import actions from './phonebook-actions';

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const isNoUnique = state.find(contact => contact.name === payload.name);
//       if (isNoUnique) {
//         alert(`${payload.name} is alredy in contacts`);
//         return state;
//       } else {
//         return [...state, payload];
//       }
//     // eslint-disable-next-line no-fallthrough
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

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

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
