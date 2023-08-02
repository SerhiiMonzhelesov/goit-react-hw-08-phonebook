import { createSlice } from '@reduxjs/toolkit';
import { addUser, getContacts, removeContact } from '../Thunk/phonebookThunk';

const initialState = {
  users: [],
  filter: '',
  // isLoading: false,
  // error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        // state.contacts.isLoading = false;
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // state.contacts.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        // state.contacts.isLoading = false;
        state.users = state.users.filter(user => user.id !== action.payload.id);
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
