import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: {value: number} = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = initialState.value;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;
