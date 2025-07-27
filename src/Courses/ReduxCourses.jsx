import React, { useState } from "react";
import { CSS, JS, Reactjs, Redux } from "../dataCourses";
import { SiRedux } from "react-icons/si";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { classes, courses } from "../data";
import { Link } from "react-router-dom";

const ReduxCourses = () => {
  let [lesson, setLesson] = useState(Redux);
  let [courseIndex, setCourseIndex] = useState(0);
  let [currentVideo, setCurrentVideo] = useState(Redux[courseIndex]);
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
    <div className="grid max-md:overflow-x-hidden grid-cols-10 max-md:grid-cols-1 px-5 pt-[13vh] gap-5 min-h-[100vh]">
      <div className="p-2 max-md:w-[95vw] my-0 mx-auto pb-10">
        <h2 className="text-center flex justify-center gap-4 items-center font-extrabold">
          {currentVideo.author} <SiRedux className="text-4xl" />
        </h2>
        <div className="overflow-auto h-[78vh]">
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
            <GrLinkPrevious
              onClick={() => nextVideo("")}
              className="cursor-pointer bg-gray-700 w-[50px] h-[50px] max-md:w-8 max-md:h-8 rounded-full p-2 text-white hover:-translate-y-1 duration-500"
            />
          ) : (
            ""
          )}
          <h3 className="max-md:text-xl max-md:w-8/12 text-center">
            {currentVideo.title}
          </h3>
          {courseIndex !== lesson.length - 1 ? (
            <GrLinkNext
              onClick={() => nextVideo("next")}
              className="cursor-pointer bg-gray-700 w-[50px] h-[50px] rounded-full p-2 text-white hover:-translate-y-1 duration-500 max-md:w-8 max-md:h-8"
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center max-md:grid max-md:grid-cols-5 max-md:gap-2 max-md:px-5  gap-10">
          {allCourses.map((item, index) => (
            <Link to={`/${item.title.toLowerCase()}`}>
              {" "}
              <button className="bg-sky-400 rounded-full w-[7vw] hover:-translate-y-1 duration-500 max-md:p-3 max-md:w-[17vw] max-md:text-sm ">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReduxCourses;
