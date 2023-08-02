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
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;

    if (!token) return thunkAPI.rejectWithValue();
    else {
      setToken(token);
      return currentUserRequest(_, thunkAPI);
    }
  }
);
