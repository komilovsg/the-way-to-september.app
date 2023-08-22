import React, { useState, useEffect } from 'react';

const App = () => {
const [countdown, setCountdown] = useState(null);

useEffect(() => {
const getRemainingTime = () => {
const targetDate = new Date('September 8, 2023 18:00:00');
const now = new Date();

const remainingTime = targetDate - now;

const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

const countdown = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

return countdown;
};

setCountdown(getRemainingTime());

const interval = setInterval(() => {
setCountdown(getRemainingTime());
}, 1000);

return () => clearInterval(interval);
}, []);

return (
  <div className='flex justify-center items-center h-screen'>
  <div className='text-center'>
  <h1 className='mb-4'>Счетчик до 8 сентября 2023 года, 18:00 осталось</h1>
  {countdown && <h2>{countdown}</h2>}
  </div>
  </div>
  );
  };
  
  export default App;