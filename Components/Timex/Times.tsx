'use client'
import React, { useState,useEffect } from "react";

const Times = () => {
  const futureDate = new Date('2023-12-01 00:00:00').getTime();
  const [time, setTime] = useState(calculateTimeRemaining(futureDate));
  function calculateTimeRemaining(targetDate: number) {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
    
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTime(calculateTimeRemaining(futureDate));
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [futureDate]);
  return (
    <div className="list-none">
      <div className="flex gap-7 text-xs font-bold  text-black">
        <li>Day</li>
        <li>Hours</li>
        <li>Minuit</li>
        <li>Second</li>
      </div>
      <div className="flex gap-4 text-2xl text-black font-bold">
        <h2>{time.days}</h2>
        <div>:</div>
        <h2>{time.hours}</h2>
        <div>:</div>
        <h2>{time.minutes}</h2>
         <div>:</div>
        <h2 suppressHydrationWarning>{time.seconds}</h2> 
      </div>
    </div>
  );
};

export default Times;





// const CountdownTimer: React.FC = () => {
//   const futureDate = new Date('2023-11-01 00:00:00').getTime(); // Set your target date and time
//   const [time, setTime] = useState(calculateTimeRemaining(futureDate));

//   function calculateTimeRemaining(targetDate: number) {
//     const now = new Date().getTime();
//     const timeRemaining = targetDate - now;

//     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//     return { days, hours, minutes, seconds };
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(calculateTimeRemaining(futureDate));
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [futureDate]);

//   return (
//     <div>
//       <p>Time remaining:</p>
//       <div>
//         <span>{time.days} days</span>
//         <span>{time.hours} hours</span>
//         <span>{time.minutes} minutes</span>
//         <span>{time.seconds} seconds</span>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;