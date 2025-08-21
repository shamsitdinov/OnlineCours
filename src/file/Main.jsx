import React from "react";
import BgVideo from "../vd.mp4";
import Courses from "./Courses";
import { Element } from "react-scroll";
const Main = () => {
  return (
    <Element name="home">
      <section className="hero relative -z-10 ">
        <video
          muted
          autoPlay
          loop
          src={BgVideo}
          className="w-[100vw] brightness-50"
        ></video>
        <div className="absolute backdrop-brightness-  w-full text-center text-white max-md:w-[80vw] max-md:top-[12vh] max-md:left-[10vw] flex justify-center items-center flex-col  top-[10vh] min-h-[120vh] ">
          <h2 className="text-5xl font-mono max-md:text-xl mb-5">
            Start UM Online Course  
          </h2>
          <p>
          learn programming with us
          </p>
        </div>
      </section>
      <Courses />
    </Element>
  );
};

export default Main;
