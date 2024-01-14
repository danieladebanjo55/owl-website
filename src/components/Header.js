import React from "react";
import owl_log from "../assets/Owl_logo_3-removebg-preview.png";
import { SiWalletconnect } from "react-icons/si";

function Header() {
  return (
    <main className="w-full bg-[#F4CE14]">
      <div className="flex md:flex-row flex-col pb-3 justify-between mx-10 md:mx-5 lg:mx-10 items-center">
        <div className="flex justify-start md:-mx-5 items-center cursor-pointer">
          <img src={owl_log} alt="logo" className="w-24 h-auto" />
          <h1 className="font-extrabold text-2xl uppercase">owl win</h1>
        </div>
        <div className="flex gap-x-5 items-center">
          <div className="headerbtn text-center cursor-pointer">
            How it works?
          </div>

          <div className="headerbtn flex gap-x-2 justify-between items-center cursor-pointer">
            <SiWalletconnect size={24}/><p className="text-sm font-bold text-center">connect wallet</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
