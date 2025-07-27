import React from "react";
import { useState } from "react";
import Footer from "./file/Footer";
import Navbar from "./file/Navbar";
import HTMLCourses from "./Courses/HTMLCourses";
import CSSCourses from "./Courses/CSSCourses";
import JSCourses from "./Courses/JSCourses";
import ReactCourses from "./Courses/ReactCourses";
import ReduxCourses from "./Courses/ReduxCourses";
import TypeScriptCourses from "./Courses/TypeScriptCorses";
import TailwindCourses from "./Courses/TailwindCourses";
import BoothstrapCourses from "./Courses/BoothstrapCourses";
import Contact from "./file/Contact";
import Register from "./file/Register";
import Login from "./file/Login";
import Main from "./file/Main";
import { Route, Routes } from "react-router-dom";


export function App() {
  let [showClasses, setShowClasses] = useState(false);
  // let [ourCourses, setOurCourses] = useState<CoursesProps[]>(courses);
  let [showRegister, setShowRegister] = useState(true);
  let [showLogin, setShowLogin] = useState(false);
  let [showNavbar, setShowNavbar] = useState(false);

  const showListClasses = (num) => (num === 1 ? setShowClasses(true) : setShowClasses(false));

  const changeRegister = () => {
    setShowRegister(!showRegister);
  };
  const changeLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="h-screen">
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} showListClasses={showListClasses} setShowClasses={setShowClasses} showClasses={showClasses} changeRegister={changeRegister} changeLogin={changeLogin} />
      <Routes>
        <Route path="/html" element={<HTMLCourses />} />
        <Route path="/css" element={<CSSCourses />} />
        <Route path="/js" element={<JSCourses />} />
        <Route path="/reactjs" element={<ReactCourses />} />
        <Route path="/redux" element={<ReduxCourses />} />
        <Route path="/ts" element={<TypeScriptCourses />} />
        <Route path="/tailwindcss" element={<TailwindCourses />} />
        <Route path="/bootstrap" element={<BoothstrapCourses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} changeRegister={changeRegister} />} />
        <Route path="/login" element={<Login setShowRegister={setShowRegister} setShowLogin={setShowLogin} changeLogin={changeLogin} />} />
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </div>
  
  );
}

export default App;
