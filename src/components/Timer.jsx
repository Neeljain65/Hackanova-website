import React, { useState, useEffect } from "react";

function Timer() {
  const totalTimeInSeconds = 10 * 24 * 60 * 60; // 10 days in seconds
  const savedTime = localStorage.getItem("timeLeft");

  // Initialize state from localStorage or default to 10 days
  const [timeLeft, setTimeLeft] = useState(
    savedTime ? Math.max(0, Number(savedTime)) : totalTimeInSeconds
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          const newTime = prev - 1;
          localStorage.setItem("timeLeft", newTime); // Update localStorage
          return newTime;
        }
        clearInterval(timer); // Stop timer when it hits 0
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="flex items-center justify-center rounded-lg">
      <div className="p-6 text-center bg-clip-padding backdrop-filter bg-gray-600 backdrop-blur-lg bg-opacity-10 shadow-md rounded-lg border border-gray-100">
        <h1 className="text-2xl font-bold mb-4">Registration Starts In</h1>
        <div className="flex gap-4 justify-center ">
          <div className="h-12 w-12 bg-white rounded-sm flex items-center justify-center text-lg font-bold">
            {days}
          </div>
          <div className="h-12 w-12 bg-white rounded-sm flex items-center justify-center text-lg font-bold">
            {hours}
          </div>
          <div className="h-12 w-12 bg-white rounded-sm flex items-center justify-center text-lg font-bold">
            {minutes}
          </div>
          <div className="h-12 w-12 bg-white rounded-sm flex items-center justify-center text-lg font-bold">
            {secs}
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="text-sm text-gray-500">Days</div>
          <div className="text-sm text-gray-500">Hours</div>
          <div className="text-sm text-gray-500">Minutes</div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
