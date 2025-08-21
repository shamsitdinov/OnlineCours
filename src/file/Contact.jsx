import React from "react";
import img1 from "../assets/miles-burke-idhx-MOCDSk-unsplash.jpg";
const Contact = () => {
  return (
    <div className="pt-[10vh] pb-5 min-h-[100vh]  bg-gray-600">
      <div className="text-white flex items-center my-10 h-[10vh] justify-center flex-col">
        <h1 className="text-5xl font-serif text-center">Contact Us</h1>
        <h2 className="text-xl font-mono text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum.</h2>
      </div>

      <div className="flex justify-between items-center w-[95%] mx-auto  max-sm:flex-col max-md:flex-col max-lg:flex-col ">
        <div className=" border-2 p-5  flex h-[68%] items-center  border-white rounded-md  w-[47%] max-sm:w-full max-md:w-full max-lg:w-full ">
          <img className="brightness-50 -full " src={img1} alt="" />
        </div>
        <form className=" w-[47%] h-[68vh]  max-sm:w-full max-md:w-full max-lg:w-full  ">
          <fieldset className="border-2 p-5 rounded-md max-md:h-full h-full w-full gap-x-2 flex flex-wrap">
            <legend
              className="capitalize ml-10 font
          -serif text-white text-3xl"
            >
              contact us
            </legend>
            <input required className="border-2 w-2/5 bg-transparent text-white px-5  border-white  rounded-md  h-10" type="text" placeholder="Username " />
            <input required className="border-2 w-2/5 bg-transparent text-white px-5  border-white  rounded-md  h-10" type="email" placeholder="@email " />
            <textarea required name="" id="" placeholder="Message..." className="w-4/5  px-2 text-white bg-transparent border-2 rounded-md resize-none"></textarea>

            <button className=" max-sm:w-1/2 z-30 h-10 top-10 w-[10vw] border-2 rounded-md font-bold text-white relative capitalize after:-z-20 after:absolute after:h-1 after:w-1 after:bg-green-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-md">send</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
