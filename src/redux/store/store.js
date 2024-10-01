// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import stopwatchReducer from '../slices/stopwatchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stopwatch: stopwatchReducer,
  },
});
