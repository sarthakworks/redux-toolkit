import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 0, // time in seconds
  isRunning: false, // to track if the stopwatch is running
};

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    start: (state) => {
      state.isRunning = true;
    },
    stop: (state) => {
      state.isRunning = false;
    },
    reset: (state) => {
      state.time = 0;
      state.isRunning = false;
    },
    tick: (state) => {
      if (state.isRunning) {
        state.time += 1; // increment time by 1 second
      }
    },
  },
});

export const { start, stop, reset, tick } = stopwatchSlice.actions;

export default stopwatchSlice.reducer;
