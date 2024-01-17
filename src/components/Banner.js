import React, { useState } from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import LoadingScreen from "./Loadingscreen";
import Countdown from "./Countdown";
import Sound from "react-sound";
import TheOtherSide from "../assets/music3.mp3";
import { Switch } from "@material-tailwind/react";

function Banner({ participants, bagPrice }) {
  const [loading, setLoading] = useState(false);
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [isSoundOn, setIsSoundOn] = useState(true);
  // Set the draw date to your desired date and time
  const drawDate = new Date("Jan 16, 2024 9:10:00").getTime();

  const handleSongFinishedPlaying = () => {
    // Handle song finished playing logic
    setPlayStatus(Sound.status.STOPPED);
  };
  const handleToggleSound = () => {
    setIsSoundOn((prevIsSoundOn) => !prevIsSoundOn);
    if (!isSoundOn) {
      setPlayStatus(Sound.status.STOPPED);
    } else {
      setPlayStatus(Sound.status.PLAYING);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <main className={`w-full md:px-5 lg:px-10 overflow-hidden`}>
        <div className="flex w-full h-[100dvh]   flex-col justify-between items-center">
          <div className="w-full flex h-[30dvh] flex-col items-center mt-5 mb-2">
            <div className="flex flex-col h-full items-center ">
              <span className=" font-semibold font-kokoro pb-5 md:pb-10 text-center text-2xl lg:text-4xl text-white">
                Participate to win
              </span>
              <h1 className="text-[#F4CE14] md:text-7xl text-5xl  font-kumar">
                ${bagPrice}
              </h1>
            </div>
            <div className="button mt-4 mb-5 font-kokoro font-extrabold text-2xl">
              Play now
              <div className="button-h"></div>
              <div className="button-v"></div>
            </div>
          </div>
          <div className="flex flex-col  h-[78dvh] md:h-[60dvh] gap-x-5 items-center pt-5 md:pt-14 justify-start">
            <span className="font-kokoro font-bold text-white text-2xl">
              Next Draw in
            </span>
            <div className="mt-5 md:mb-3 mb-2">
              {<Countdown drawDate={drawDate} />}
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:justify-between absolute bottom-2 md:bottom-0 right-0 px-4 w-full">
          <div className="text-2xl font-bold flex lg:gap-2 lg:flex-row flex-col lg:items-center items-center  justify-start text-[#F4CE14] mx-10 md:mx-0">
            <span className="text-2xl text-white font-kokoro">
              Previous winner{" "}
            </span>

            <span className="text-[#F4CE14] font-kokoro text-sm py-2 lg:pt-[20px]">
              0x53b13a6D43f647D788411Abfd28D229C274AfBF9
            </span>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex items-center space-x-15">
              <li className="">
                <a href="/" className="">
                  <span className="relative z-10 flex justify-center items-center py-3">
                    <PiTelegramLogo size={20} />
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

              {/* <div className="text-white mt-2 border-gray-400 border border-sold text-center pt-2 mb-1 rounded-full w-[40px] h-[40px]">
            <button onClick={handleToggleSound}>
              {isSoundOn ? 'On' : 'Off'}
            </button>
          </div> */}
          <div className=" flex gap-x-3 items-center font-kokoro font-bold text-xl text-yellow-400">
          <span className="font-kokoro font-bold text-xl text-yellow-400">Sound On</span>
              <Switch
                id="custom-switch-component"
                ripple={false}
                className="h-full w-full checked:bg-[#2ec946]"
                containerProps={{
                  className: "w-11 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
                onClick={handleToggleSound}
              />
              <Sound
                url={TheOtherSide}
                playStatus={playStatus}
                playFromPosition={0}
                onFinishedPlaying={handleSongFinishedPlaying}
              />
              </div>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Banner;
