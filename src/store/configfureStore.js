import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '../redux/messageAction';

const rootReducer = {
  messages: messageSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
