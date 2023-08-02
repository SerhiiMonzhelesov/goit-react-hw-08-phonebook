import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshUserThunk,
  registerThunk,
} from '../Thunk/userThunk';

const initialState = {
  userData: null,
  token: null,
  // isLoading: false,
  // error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOutThunk.fulfilled, state => {
        // state.isLoading = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.userData = action.payload;
      }),
});

export const userReducer = userSlice.reducer;
