import React, { useState, useRef } from 'react';
// import './Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setTime(prev => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="timer-container">
      <h2 className="timer-display">Time: {time}</h2>
      <div className="flex gap-[10px]">
  <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded">
    Start
  </button>
  <button onClick={stopTimer} className="bg-red-500 text-white px-4 py-2 rounded">
    Stop
  </button>
  <button onClick={resetTimer} className="bg-yellow-500 text-white px-4 py-2 rounded">
    Reset
  </button>
</div>

    </div>
  );
}

export default Timer;
