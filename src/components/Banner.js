import React, { useEffect, useState } from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { RiDiscordLine } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import LoadingScreen from "./Loadingscreen";
import SkewedButton from "./SkewedButton";
import Countdown from "./Countdown";

function Banner() {
  const [loading, setLoading] = useState(true);
  // Set the draw date to your desired date and time
  const drawDate = new Date("Jan 15, 2024 18:00:00").getTime();
  

 

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);
  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prevTime) => prevTime + 1);
  //   }, 1000); // Update every 1000 milliseconds (1 second)

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);

  // // Format the time to HH:MM:SS
  // const formatTime = (seconds) => {
  //   const hours = Math.floor(seconds / 3600);
  //   const minutes = Math.floor((seconds % 3600) / 60);
  //   const remainingSeconds = seconds % 60;

  //   // Add leading zeros
  //   const formattedHours = hours.toString().padStart(2, "0");
  //   const formattedMinutes = minutes.toString().padStart(2, "0");
  //   const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  //   return (
  //     <div className="flex gap-x-2 items-center">
  //       <div className="flex flex-col items-center">
  //         <span className="bg-gray-600 mx-2">{formattedHours}:</span>
  //         <span className="text-sm">Hours</span>
  //       </div>
  //       <div className="flex flex-col items-center">
  //         <span className="bg-gray-600 mx-2">{formattedMinutes}:</span>
  //         <span className="text-sm">Minutes</span>
  //       </div>
  //       <div className="flex flex-col items-center">
  //         <span className="bg-gray-600 mx-2">{formattedSeconds}</span>
  //         <span className="text-sm">Seconds</span>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <>
      <main className={`w-full lg:h-full md:px-5 lg:px-10`}>
        {/* {loading && <LoadingScreen />} */}
        {/* {!loading && <AnimatedBackground />} */}

        <div className="flex w-full h-1/2 md:flex-row flex-col justify-between items-center lg:pt-10">
          <div className="lg:w-2/5 flex flex-col md:items-start items-center my-10">
            <h1 className="font-semibold  text-center md:text-start text-3xl lg:text-4xl text-white">
              <span className="text-[#F4CE14]">Participate to win </span>
              $200,000
            </h1>
            <div className="button my-5 lg:my-5 font-extrabold text-2xl">
              Play
              <div className="button-h"></div>
              <div className="button-v"></div>
            </div>
          </div>
          <div className="lg:w-[60%] flex md:justify-end">
            <div className="flex md:flex-row flex-col gap-y-5 gap-x-5 items-center justify-between">
              <SkewedButton />

              <div className="">
                {<Countdown drawDate={drawDate}/>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center md:justify-between py-5 lg:pt-32 md:pt-28">
          <div className="text-2xl font-bold flex lg:gap-2 lg:flex-row flex-col lg:items-center items-center  justify-start text-[#F4CE14] mx-10 md:mx-0">
            <span className="underline text-3xl">Previous Winner </span>

            <span className="text-white text-sm py-2 lg:pt-[20px]">
              0x53b13a6D43f647D788411Abfd28D229C274AfBF9
            </span>
          </div>

          <div className="flex items-center justify-center">
            <ul className="flex items-center space-x-15">
              <li className="">
                <a href="#" className="">
                  <span className="relative z-10 flex justify-center items-center py-5">
                    <LuSend size={28} />
                  </span>
                  <span className=""></span>
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  <span className="relative z-10 flex justify-center items-center py-5">
                    <SlSocialTwitter size={28} />
                  </span>
                  <span className=""></span>
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  <span className="relative z-10 flex justify-center items-center py-5">
                    <RiDiscordLine size={28} />
                  </span>
                  <span className=""></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Banner;
