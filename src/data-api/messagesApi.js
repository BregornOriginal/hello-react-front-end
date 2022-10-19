import { createAsyncThunk } from '@reduxjs/toolkit';

const randomMessage = createAsyncThunk(
  '/api/messages',
  async () => {
    const response = await fetch('https://floating-shore-32778.herokuapp.com/api/messages', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const variable = await response.json();
    return variable.greetings;
  },
);

export default randomMessage;
