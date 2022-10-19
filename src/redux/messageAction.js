import { createSlice } from '@reduxjs/toolkit';
import randomMessage from '../data-api/messagesApi';

const initialState = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(randomMessage.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      message: action.payload,
    }));
  },
});

export const randomMessageRedux = messageSlice.actions;
export default messageSlice;
