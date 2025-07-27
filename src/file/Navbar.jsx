import React from "react";
import Logo from "../assets/logo.png";
import { classes, navbar } from "../data";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = ({ showNavbar, setShowNavbar, showListClasses, setShowClasses, showClasses, changeRegister, changeLogin }) => {
  return (
    <nav className="bg-slate-800 fixed list-none z-10 text-white items-center flex h-[10vh] px-20 justify-between w-full mx-auto my-0 max-md:px-5 max-lg:px-5">
      <Link to="/">
        <img src={Logo} alt="EDU" className="w-28 animate-spin-slow hover:scale-105 duration-500 cursor-pointer" />
      </Link>

      <ul className={!showNavbar ? "flex gap-16 z-10 max-md:hidden" : "flex gap-16 z-10  max-md:absolute max-md:bg-slate-800 max-md:right-0 max-md:top-[10vh] max-md:w-full max-md:h-[40vh] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-10 max-md:text-center  max-sm:w-full max-sm:justify-end max-sm:flex-col max-sm:items-end "}>
        <nav className=" text-white  px-6 py-4 flex items-baseline space-x-6 relative max-sm:flex-col max-sm:gap-10">
          <Link  to="/" className="hover:text-gray-300">
            Home
          </Link>
          <div className="group relative max-sm:static ">
            <li className="hover:text-gray-300 py-5">
              <Link to="/course">Courses</Link>
            </li>

            <div className="absolute hidden group-hover:block  py-5 flex-wrap max-sm:right-20 max-sm:top-0 text-start  text-black mt-0 rounded  w-[300px] z-10">
              <div className="flex w-[50vw] flex-wrap h-full">
              {classes.map((item, index) => (
                 <div className="  duration-700 p-3 w-[50%]" key={index}>
                  <a className=" border-b-2 text-white" href={item.toLowerCase()}>{item}</a>,
                </div>
              ))}
              </div>
            </div>
          </div>
          <a href="/about" className="hover:text-gray-300">
            Contact
          </a>

          <a href="/contact" className="hover:text-gray-300">
            FAQ
          </a>
        </nav>
      </ul>
      <ul onMouseOver={() => setShowClasses(true)} onMouseOut={() => setShowClasses(false)} className={showClasses ? "absolute opacity-100 translate-y-0  top-[10vh] duration-500 bg-slate-800  grid left-[35vw] p-4 grid-cols-2 max-md:absolute max-md:left-[10vw] max-md:top-[20vh]" : "absolute opacity-0 left-[35vw] -top-[50vh] "}></ul>
      <div className=" flex max-md:flex ">
        <li className="" to="/register">
          <button
            onClick={changeRegister}
            className=" max-md:w-[30vw]  max-md:h-10 min-w-[5vw] border-2 left-[31px] border-green-600  max-md:pl-12  duration-300 bg-white max-lg:pl-6 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-700 before:to-green-200 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0
        "
          >
            Sign Up
          </button>
        </li>
        <li to="/login">
          <button
            onClick={changeLogin}
            className=" max-md:w-[30vw]  max-md:h-10 min-w-[5vw] border-2  max-md:pl-12  duration-300 bg-green-600 max-lg:pl-6 relative py-2 px-8 text-white text-base font-bold nded-full overflow-hidden  rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-300 before:to-white before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0
          "
          >
            Sign In
          </button>
        </li>
      </div>
      {showNavbar ? <IoIosCloseCircleOutline onClick={() => setShowNavbar(false)} className="text-3xl cursor-pointer hidden max-md:block" /> : <FaBarsStaggered onClick={() => setShowNavbar(true)} className="text-3xl cursor-pointer hidden max-md:block" />}
    </nav>
  );
};

export default Navbar;

//        //
//        {navbar.map((item, index) => (
//         // <li to={`/${item.toLowerCase()}`}>
//         //   <li className="cursor-pointer max-md:w-[10vw] border-b-2 border-solid border-slate-800 hover:border-white duration-300" onMouseOver={() => showListClasses(index)} key={index}>
//         //     {index === 1 ? (
//         //       <select disabled className="bg-transparent  text-white">
//         //         <option>
//         //           {/* <Link to={`/${item.toLowerCase()}`}>{item}</Link> */}
//         //         </option>
//         //       </select>
//         //     ) : (
//         //       <span>{item}</span>
//         //     )}
//         //   </li>
//         // </li>
//       ))}
// //
