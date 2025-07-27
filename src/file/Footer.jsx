import React from "react";
import Logo from "../assets/logo.png";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex max-md:w-[100%] max-md:flex-col max-md:gap-10 justify-between items-center bg-slate-700 min-h-[16vh] text-white py-5 px-20">
      <p>&copy; All rights reserved {new Date().getFullYear()}</p>
      <img src={Logo} alt="Logo" className="animate-ping-slow w-28  cursor-pointer" />
      <div className="flex gap-5 text-xl">
        <FaYoutube className="cursor-pointer animate-bounce-slow animate-bounce" />
        <FaTelegram className="cursor-pointer animate-bounce" />
        <FaInstagram className="cursor-pointer animate-bounce" />
        <FaLinkedinIn className="cursor-pointer animate-bounce" />
        <FaXTwitter className="cursor-pointer animate-bounce" />
      </div>
    </footer>
  );
};

export default Footer;
