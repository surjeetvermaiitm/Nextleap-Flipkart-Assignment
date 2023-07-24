
import React, { useState, useRef } from 'react';
import './style.css';

export default const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleResume = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">
        <span>{(timeElapsed / 1000).toFixed(2)} seconds</span>
      </div>
      <div className="controls">
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        {isRunning && <button onClick={handleResume}>Resume</button>}
      </div>
    </div>
  );
};




