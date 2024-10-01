// src/components/Stopwatch.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, reset, tick } from '../redux/slices/stopwatchSlice';

export const Stopwatch = () => {
  const time = useSelector((state) => state.stopwatch.time);
  const isRunning = useSelector((state) => state.stopwatch.isRunning);
  const dispatch = useDispatch();

  // Use useEffect to create an interval that dispatches tick every second
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => {
      clearInterval(interval); // Cleanup interval on unmount or when isRunning changes
    };
  }, [isRunning, dispatch]);

  // Format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div>
      <h1>Stopwatch: {formatTime(time)}</h1>
      <button onClick={() => dispatch(start())} disabled={isRunning}>
        Start
      </button>
      <button onClick={() => dispatch(stop())} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
