import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAuth, fetchAuthMe, fetchRegister,
} from './thunks';
import { RequestStatus } from '../../constants';

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = RequestStatus.IN_PROGRESS;
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = RequestStatus.SUCCESSFUL;
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = RequestStatus.FAILED;
      state.data = null;
    },
    [fetchRegister.pending]: (state) => {
      state.status = RequestStatus.IN_PROGRESS;
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = RequestStatus.SUCCESSFUL;
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = RequestStatus.FAILED;
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = RequestStatus.IN_PROGRESS;
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = RequestStatus.SUCCESSFUL;
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = RequestStatus.FAILED;
      state.data = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
