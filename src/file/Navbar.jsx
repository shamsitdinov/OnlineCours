import React from "react";
import Logo from "../assets/startum.png";
import { classes, navbar } from "../data";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = ({ showNavbar, setShowNavbar, showListClasses, setShowClasses, showClasses, changeRegister, changeLogin }) => {
  return (
    <div>
      <nav className=" backdrop-blur-md backdrop-brightness-50 fixed list-none z-10  items-center flex h-[10vh] px-20 justify-between w-full mx-auto my-0 max-md:px-5 max-lg:px-5">
        <a href="/">
          <img src={Logo} alt="EDU" className="w-28 animate-spin-slow hover:scale-105 duration-500 cursor-pointer" />
        </a>

        <ul className={!showNavbar ? "flex gap-16 z-10 max-md:hidden " : " bg-slate-400 flex gap-16 z-10 max-md:absolute max-md:right-0 max-md:top-[20vh] max-md:w-full max-md:h-[30vh] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-10   max-sm:w-full max-sm:justify-end max-sm:flex-col max-sm:items-end max-sm:backdrop-blur-md "}>
          <nav className=" text-white  px-6 py-4 flex items-baseline space-x-6 relative max-sm:flex-col max-sm:gap-10">
            <a className="h-full w-full" href="/">
              <Link to="home" smooth={true} duration={500} href="/" className="hover:text-gray-300">
                Home
              </Link>
            </a>
            <div className=" group relative max-sm:static  ">
              <li className=" cursor-pointer hover:text-gray-300 py-5">
                <Link to="cour" smooth={true} duration={500} className=" scroll-smooth flex items-center gap-2">
                  Courses
                  <IoChevronDown className="mt-1" />
                </Link>
              </li>

              <div className="absolute hidden duration-500 delay-300 group-hover:block  py-5 flex-wrap max-sm:right-[120px] max-sm:top-0 text-start max-sm:w-[70vw] max-sm:bg-transparent  mt-0  text-black  rounded z-10 max-sm:left ">
                <div className="flex duration-500 translate-x-3 w-[40vw] max-sm:w-[70vw]  rounded-md text-white px-3 flex-wrap h-full">
                  {classes.map((item, index) => (
                    <div className="grid grid-cols-2 w-[50%] py-2 space-y-5 " key={index}>
                      <a
                        className="
  transition-all hover:object-scale-down relative "
                        href={item.toLowerCase()}
                      >
                        {item}
                        <div
                          className="transition-all w-0 peer-hover:w-full h-[5px] bg-white absolute
      top-8 ease-out
      "
                        ></div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>

            <a href="/about" className="hover:text-gray-300">
              FAQ
            </a>
          </nav>
        </ul>
        <ul onMouseOver={() => setShowClasses(true)} onMouseOut={() => setShowClasses(false)} className={showClasses ? "absolute opacity-100 translate-y-0 backdrop-blur-md  top-[10vh] duration-500 bg-slate-800  grid left-[35vw] p-4 grid-cols-2 max-md:absolute max-md:left-[10vw] max-md:top-[20vh]" : " backdrop-blur-lg absolute opacity-0 left-[35vw] -top-[50vh] "}></ul>
        <div className="">
          <a href="/login">
            <button className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">Sign In</button>
          </a>
        </div>
        {showNavbar ? <IoIosCloseCircleOutline onClick={() => setShowNavbar(false)} className="text-3xl cursor-pointer hidden text-white max-md:block" /> : <FaBarsStaggered onClick={() => setShowNavbar(true)} className="text-3xl text-white cursor-pointer hidden max-md:block" />}
      </nav>
    </div>
  );
};

export default Navbar;
