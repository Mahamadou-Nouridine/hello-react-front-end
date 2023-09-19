import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from './middleware';

const initialState = {
  greeting: '',
  error: null,
  isLoading: true,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        greeting: payload.text,
      }))
      .addCase(fetchGreeting.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export const { actions, reducer } = greetingSlice;
