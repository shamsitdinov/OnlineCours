import React from "react";
import Logo from "../assets/startum.png";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex max-md:w-[100%] max-md:flex-col max-md:gap-10 justify-between items-center bg-gray-900 min-h-[10vh] text-white  px-20">
      <img src={Logo} alt="Logo" className="animate-ping-slow w-28  cursor-pointer" />
      <p>&copy; All rights reserved {new Date().getFullYear()}</p>

      <div class=" flex gap-6 max-w-full">
        <button class="p-3 h-11 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden">
          <FaLinkedinIn className="cursor-pointer text-xl " />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <div class="relative z-10"></div>
        </button>
        <button class="p-3 h-11 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/60 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden">
          <FaInstagram className="cursor-pointer text-xl " />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <div class="relative z-10"></div>
        </button>

        <button class="p-3 h-11 rounded-full backdrop-blur-lg border border-blue-500/50 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden">
          <FaTelegram className="cursor-pointer text-xl  " />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <div class="relative z-10"></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
