import React from "react";
import { courses } from "../data";
import { Element } from "react-scroll";

const Courses = () => {
  return (
   <Element name="cour">
     <section className=" bg-gray-300 courses text-center py-8">
      <h2 className="text-3xl max-md:text-xl mb-8 uppercase tracking-widest font-mono">
        Our Courses
      </h2>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 w-[90vw] my-0 mx-auto max-lg:grid-cols-2">
        {courses.map((item, index) => (
          
          <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="hover:scale-105 animate-pulse-slow hover:animate-none duration-300 relative h-[30vh] cursor-pointer flex justify-center items-center flex-col text-white rounded-md p-2"
            >
              <a className="w-full h-full" href={item.title.toLowerCase()}>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-sm w-10/12">{item.description}</p>
              <span className="bg-green-800 p-1 rounded-md absolute top-2 right-2">
                {item.duration}
              </span>
         </a>
            </div>
        ))}
      </div>
    </section>
   </Element>
  );
};

export default Courses;
