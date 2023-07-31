import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUserRequest,
  logOutRequest,
  loginRequest,
  registerRequest,
  setToken,
} from 'services/api';

export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async formData => registerRequest(formData)
);

export const loginThunk = createAsyncThunk('user/loginThunk', async formData =>
  loginRequest(formData)
);

export const logOutThunk = createAsyncThunk('user/logOutThunk', async () =>
  logOutRequest()
);

export const refreshUserThunk = createAsyncThunk(
  'user/refreshUserThunk',
  async token => {
    setToken(token);
    currentUserRequest();
  }
);
