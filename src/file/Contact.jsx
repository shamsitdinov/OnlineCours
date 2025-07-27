import React from "react";
import img1 from "../assets/miles-burke-idhx-MOCDSk-unsplash.jpg";
const Contact = () => {
  return (
    <div className="pt-[10vh] pb-5 min-h-[100vh] bg-gray-600">
      <div className="text-white flex items-center mt-10 h-[10vh] justify-center flex-col">
        <h1 className="text-5xl font-serif text-center">Contact Us</h1>
        <h2 className="text-xl font-mono text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum.
        </h2>
      </div>

      <form className="gap-x-10 w-[95vw] h-[90vh] mx-auto grid xl:grid-cols-2 pt-[10vh]">
        <div className=" border-2 mt-[17px] p-5 flex items-center h-full border-white  w-full">
          <img className="brightness-50" src={img1} alt="" />
        </div>

        <fieldset className="border-2 max-md:h-full h-full p-5 w-full gap-x-2 flex flex-wrap">
          <legend
            className="capitalize ml-10 font
          -serif text-white text-3xl"
          >
            contact us
          </legend>
          <blockquote>

          </blockquote>
          <input
            required
            className="border-2 w-2/5 bg-transparent text-white px-5 placeholder:text-white border-white  rounded-sm  h-10"
            type="text"
            placeholder="Username "
          />
          <input
            required
            className="border-2 w-2/5 bg-transparent text-white px-5 placeholder:text-white border-white  rounded-sm  h-10"
            type="email"
            placeholder="@email "
          />
          <textarea
            required
            name=""
            id=""
            placeholder="Message..."
            className="w-4/5 placeholder:text-white px-2 text-white bg-transparent border-2 resize-none"
          ></textarea>

          <button className=" z-30 h-10 top-10 w-[10vw] bg-gray-400 rounded-md text-white relative capitalize after:-z-20 after:absolute after:h-1 after:w-1 after:bg-green-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-md">
            send
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
