import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewContactRequest,
  contactsRequest,
  deleteContactRequest,
} from 'services/api';

export const getContacts = createAsyncThunk('contacts/getContacts', () =>
  contactsRequest()
);

export const addUser = createAsyncThunk('contacts/addUser', contactData =>
  addNewContactRequest(contactData)
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  contactId => deleteContactRequest(contactId)
);
