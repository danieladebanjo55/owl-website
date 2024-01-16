import React, { useEffect, useState } from "react";

function Countdown({ drawDate }) {
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = drawDate - now;

    if (distance <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex">
      <div className=" bg-yellow-400 h-20 text-black font-bold mx-[5px]">
        <div className="w-[80px] h-[50px] bg-[#222] grid place-items-center text-white text-[36px]">
          {timeLeft.hours}
        </div>
        <p className="m-[1px] text-center font-kokoro">Hours</p>
      </div>
      <div className="time bg-yellow-400 h-20 text-black font-bold mx-[5px]">
        <div className="w-[80px] h-[50px] bg-[#222] grid place-items-center text-white text-[36px]">
          {timeLeft.minutes}
        </div>
        <p className="m-[1px] text-center font-kokoro">Minutes</p>
      </div>
      <div className="time bg-yellow-400 h-20 text-black font-bold mx-[5px]">
        <div className="w-[80px] h-[50px] bg-[#222] grid place-items-center text-white text-[36px]">
          {timeLeft.seconds}
        </div>
        <p className="m-[1px] text-center font-kokoro">Seconds</p>
      </div>
    </div>
  );
}

export default Countdown;
