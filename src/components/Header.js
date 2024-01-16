import React from "react";
import owl_log from "../assets/Owl_logo_3-removebg-preview.png";
import { SiWalletconnect } from "react-icons/si";

function Header() {
  return (
    <main className="w-full bg-[#F4CE14]">
      <div className="flex md:flex-row pb-2 md:pb-0 flex-col justify-between mx-10 md:mx-5 lg:mx-10 items-center">
        <div className="flex justify-start md:-mx-5 items-center cursor-pointer">
          <img src={owl_log} alt="logo" className="w-[60px] md:w-[70px] h-auto" />
          <h1 className="font-kokoro font-extrabold text-xl md:text-2xl uppercase">owlwin protocol</h1>
        </div>
        <div className="flex gap-x-5 items-center">
          <div className="headerbtn text-center cursor-pointer font-kokoro text-xs">
            How it works?
          </div>

          <div className="headerbtn flex gap-x-2 justify-between items-center cursor-pointer">
            <SiWalletconnect size={18}/><p className="font-kokoro text-xs font-bold text-center">connect wallet</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
