import React from "react";
import BgVideo from "../vd.mp4";
import Courses from "./Courses";
const Main = () => {
  return (
    <div>
      <section className="hero relative -z-10 ">
        <video
          muted
          autoPlay
          loop
          src={BgVideo}
          className="w-[100vw] brightness-50"
        ></video>
        <div className="absolute  backdrop-brightness-50 w-full text-center text-white max-md:w-[80vw] max-md:top-[12vh] max-md:left-[10vw] flex items-center flex-col justify-center top-[10vh] h-full ">
          <h2 className="text-4xl max-md:text-xl mb-5">
            Lorem ipsum dolor sit.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            temporibus? Temporibus dolores doloribus perferendis enim?
          </p>
        </div>
      </section>
      <Courses />
    </div>
  );
};

export default Main;
