import React, {useState } from "react";
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
  
  return (
    <>
    {loading && <LoadingScreen />}
      <main className={`w-full md:px-5 lg:px-10 overflow-hidden`}>
        
        <div className="flex w-full h-full md:flex-row flex-col justify-between items-center lg:pt-10">
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
                <a href="/" className="">
                  <span className="relative z-10 flex justify-center items-center py-5">
                    <LuSend size={28} />
                  </span>
                  <span className=""></span>
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  <span className="relative z-10 flex justify-center items-center py-5">
                    <SlSocialTwitter size={28} />
                  </span>
                  <span className=""></span>
                </a>
              </li>
              <li className="">
                <a href="/" className="">
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
