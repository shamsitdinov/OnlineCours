import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = ({
  changeRegister,
  setShowRegister,
  setShowLogin, }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    try {
      e.preventDefault();
      let user = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Already email exist");
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-[84vh] bg-myColor z-20 pt-[72px]">
      <form
        onSubmit={register}
        action=""
        className="bg-slate-800 rounded-md  text-white shadow-lg shadow-white h-[70vh] w-[30vw] px-10 py-8 flex flex-col gap-4 justify-center items-center max-md:w-[70vw] "
      >
        <h2 className="text-3xl max-md:text-2xl uppercase tracking-widest">
          Sign Up
        </h2>
        <input
          className="p-3 w-full outline-none text-lg bg-transparent placeholder:text-gray-400 text-white border-white border-b-2 "
          type="text"
          name=""
          placeholder="Name"
          id=""
        />
        <input
          className="p-3 w-full outline-none text-lg bg-transparent placeholder:text-gray-400 text-white border-white border-b-2 "
          type="email"
          name=""
          placeholder="Email"
          id=""
        />
        <input
          className="p-3 w-full outline-none text-lg bg-transparent placeholder:text-gray-400 text-white border-white border-b-2 "
          type="password"
          name=""
          placeholder="Password"
          id=""
        />
        <input
          className="p-3 w-full outline-none text-lg bg-transparent placeholder:text-gray-400 text-white border-white border-b-2 "
          type="password"
          name=""
          placeholder="Confirm Password"
          id=""
        />
        <div className="flex items-center self-start gap-5">
          <input className="w-4 h-4" id="agree" type="checkbox" />
          <label>I agree</label>
        </div>
        <button
          className="bg-green-600 text-white p-3 rounded-md uppercase cursor-pointer w-full"
          type="submit"
        >
          sign up
        </button>
        <Link
          to="/login"
          onClick={() => {
            setShowLogin(true);
            setShowRegister(false);
          }}
          className="text-white self-start underline"
        >
          Already have account?
        </Link>
      </form>
      <IoIosCloseCircleOutline
        onClick={changeRegister}
        className="absolute text-4xl top-[12vh] right-[30vw] cursor-pointer text-black 
        max-md:right-[5vw] max-md:top-[10vh] max-lg:right-[15vw]"
      />
    </div>
  );
};

export default Register;
