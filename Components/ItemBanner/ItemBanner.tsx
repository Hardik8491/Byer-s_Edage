'use client'
import React, { useState,useEffect } from "react";

const ItemBanner = () => {
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
    <div className="mx-[135px] py-10 ">
    <div className=" px-[135px] bg-black flex flex-row items-center justify-between ">
      <div className="flex flex-col gap-2">
        <p>Categories</p>
        <span className="text-white text-2xl font-bold  ">
          Enhance Your Music Experience
        </span>
        <div>
          <div className="list-none">
            <div className="flex gap-3 text-2xl py-4 text-black font-bold">
              <li className=" h-[62px] w-[62px] bg-white flex flex-col text-xs  items-center justify-center rounded-full ">
                <span>{time.hours}</span>
                <span>Hours</span>
              </li>
              <li className=" h-[62px] w-[62px]  bg-white flex flex-col text-xs  items-center justify-center rounded-full ">
                <span>{time.days}</span>
                <span>Day</span>
              </li>
              <li className=" p-2  bg-white flex flex-col text-xs  items-center justify-center rounded-full ">
                <span>{time.minutes}</span>
                <span>Minutes</span>
              </li>
              <li className=" p-2  bg-white flex flex-col text-xs  items-center justify-center rounded-full ">
                <span>{time.seconds}</span>
                <span>Second</span>
              </li>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#00FF66] px-8 rounded-md py-3">
            Buy Now!
          </button>
        </div>
      </div>
      <div className=" shadow-md p-4 inline-block">
        <img src="jbl-sp.png" alt="" className="cursor-pointer" />
      </div>
    </div>
    </div>
  );
};

export default ItemBanner;
