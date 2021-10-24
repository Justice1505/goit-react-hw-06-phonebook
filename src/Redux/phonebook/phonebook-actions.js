import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addNewContact = createAction(
  'phonebook/addContact',
  (name, number) => {
    return {
      payload: {
        id: uuidv4(),
        name,
        number,
      },
    };
  },
);

export const getAllContacts = createAction('phonebook/getContacts');

export const removeContact = createAction('phonebook/removeContact');

export const findContact = createAction('phonebook/findContact');
