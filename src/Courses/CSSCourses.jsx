import React, { useState } from "react";
import { CSS } from "../dataCourses";
import { FaCss3Alt } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { classes, courses } from "../data";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";

const CSSCourses = () => {
  let [lesson, setLesson] = useState(CSS);
  let [courseIndex, setCourseIndex] = useState(0);
  let [currentVideo, setCurrentVideo] = useState(CSS[courseIndex]);
  let [allCourses, setAllCourses] = useState(courses);

  const selectedPL = (itemName) => {
    allCourses.forEach((item, index) => {
      if (item.title === itemName) {
        setLesson(CSS);
      }
    });
  };

  const selectCourse = (num) => {
    lesson.forEach((item, index) => {
      if (num === index) {
        setCurrentVideo(item);
        setCourseIndex(index);
      }
    });
  };
  const nextVideo = (dir) => {
    if (dir === "next") {
      setCourseIndex(courseIndex + 1);
      selectCourse(courseIndex + 1);
    } else {
      setCourseIndex(courseIndex - 1);
      selectCourse(courseIndex - 1);
    }
  };

  return (
    <div className=" w-full max-md:overflow-x-hidden grid-cols-2 max-md:grid-cols-1 px-5 pt-[13vh] gap-5 min-h-[100vh]">
        <Link to="/">
        <IoCaretBackCircleOutline className="text-5xl absolute top-3 text-white ml-5 z-20" />
      </Link>
        <h2 className="text-center flex  gap-4 items-center font-extrabold">
          <FaCss3Alt className="text-4xl" /> {currentVideo.author}
        </h2>
        <div className="grid grid-cols-[1fr,3fr] w-full">
        <div className="overflow-auto h-[70vh]">
          {lesson.map((item, index) => (
            <div
              onClick={() => selectCourse(index)}
              className={
                courseIndex === index
                  ? "flex bg-green-400 duration-300 hover:bg-slate-600 my-2 rounded-md text-white items-center cursor-pointer justify-between p-2 overflow-auto"
                  : "flex bg-slate-400 duration-300 hover:bg-slate-600 my-2 rounded-md text-white items-center cursor-pointer justify-between p-2 overflow-auto"
              }
              key={index}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      <div className="pb-6 max-md:row-start-1 max-md:row-end-2 ">
        <iframe
          className="w-full h-[70vh] max-md:h-[50vh]"
          src={`https://www.youtube.com/embed/${currentVideo.link}?list=PLpDyZ4xZcDg_aAzP6pDD1PRsYCSdheveS`}
          title="HTMLda dasturlash | 2. Kirish"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="my-5 flex justify-between mx-10 items-center text-3xl">
          {courseIndex !== 0 ? (
            <IoCaretBackCircleOutline
              onClick={() => nextVideo("")}
              className="cursor-pointer hover:-translate-y-1 text-7xl duration-500"
            />
          ) : (
            ""
          )}
          <h3 className="max-md:text-xl w-[30vw] select-none max-md:w-8/1 text-center">
            {currentVideo.title}
          </h3>
          {courseIndex !== lesson.length - 1 ? (
            <IoCaretForwardCircleOutline
              onClick={() => nextVideo("next")}
              className="cursor-pointer hover:-translate-y-1 text-7xl duration-500 "
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center h-[10vh] w-full max-md:grid max-md:grid-cols-5 max-md:gap-2 max-md:px-5  gap-5">
          {allCourses.map((item, index) => (
            <Link to={`/${item.title.toLowerCase()}`}>
              {" "}
              <button className="w-28 text-white h-10  bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CSSCourses;
