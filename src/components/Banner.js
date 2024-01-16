import React, {useState } from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { RiDiscordLine } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import LoadingScreen from "./Loadingscreen";
import SkewedButton from "./SkewedButton";
import Countdown from "./Countdown";

function Banner() {
  const [loading, setLoading] = useState(true);
  // Set the draw date to your desired date and time
  const drawDate = new Date("Jan 16, 2024 9:10:00").getTime();
  
  return (
    <>
    {loading && <LoadingScreen />}
      <main className={`w-full md:px-5 lg:px-10 overflow-hidden`}>
        
        <div className="flex w-full h-[100dvh]   flex-col justify-between items-center">
          <div className="w-full flex h-[30dvh] flex-col items-center mt-5 mb-2">
            <div className="flex flex-col h-full items-center ">

            <span className="font-semibold font-kokoro pb-5 md:pb-10 text-center text-2xl lg:text-4xl text-white">
            Participate to win</span>
              <h1 className="text-[#F4CE14] md:text-7xl text-5xl  font-kumar"> $200,000</h1>
              
            
            </div>
            <div className="button mt-4 mb-5 font-kokoro font-extrabold text-2xl rounded-2xl">
              Play
              <div className="button-h"></div>
              <div className="button-v"></div>
            </div>
          </div>
         
            <div className="flex flex-col h-[78dvh] md:h-[50dvh] gap-x-5 items-center justify-start">
              <SkewedButton />

              <div className="mt-5 md:mb-3 mb-2">
                {<Countdown drawDate={drawDate}/>}
              </div>

            </div>
             
         
        </div>
        <div className="flex md:flex-row flex-col items-center md:justify-between absolute bottom-5 md:bottom-0 right-0 px-4 w-full">
          <div className="text-2xl font-bold flex lg:gap-2 lg:flex-row flex-col lg:items-center items-center  justify-start text-[#F4CE14] mx-10 md:mx-0">
            <span className="underline text-2xl text-white font-kokoro">Previous Winner </span>
               
            <span className="text-[#F4CE14] font-kokoro text-sm py-2 lg:pt-[20px]">
              0x53b13a6D43f647D788411Abfd28D229C274AfBF9
            </span>
          </div>

          <div className="flex items-center justify-center">
            <ul className="flex items-center space-x-15">
              <li className="">
                <a href="/" className="">
                  <span className="relative z-10 flex justify-center items-center py-3">
                  <PiTelegramLogo size={20}/>
                  </span>
                  <span className=""></span>
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  <span className="relative z-10 flex justify-center items-center py-3">
                    <SlSocialTwitter size={20} />
                  </span>
                  <span className=""></span>
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  <span className="relative z-10 flex justify-center items-center py-3">
                    <RiDiscordLine size={20} />
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
