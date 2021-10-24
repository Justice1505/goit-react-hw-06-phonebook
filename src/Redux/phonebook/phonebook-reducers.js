import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addNewContact,
  getAllContacts,
  removeContact,
  findContact,
} from './phonebook-actions';

const items = createReducer([], {
  [addNewContact]: (state, action) => [...state, action.payload],
  [getAllContacts]: (state, action) => action.payload,
  [removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [findContact]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
