import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import bg from "../assets/pexels-quang-nguyen-vinh-222549-2131801.jpg";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const Login = ({ changeLogin, setShowRegister, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logIn = async (e) => {
    try {
      e.preventDefault();
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      localStorage.setItem("token", user.accesToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/info");
    } catch (error) {
      console.log(error);
      alert("Your password is wrong");
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-[84vh] bg-myColor z-20 pt-[10vh]" style={{ backgroundImage: `url(${bg})`, backgroundClip: "cover", backgroundSize: "cover" }}>
      <form onSubmit={logIn} action="" className=" backdrop-blur-md rounded-md  text-white shadow-inner shadow-white  min-h-[40vh] w-[30vw] px-10 py-16 flex flex-col gap-4 justify-center items-center max-md:w-[70vw] max-xl:w-[60vw] ">
        <h2 className="text-3xl max-md:text-2xl uppercase tracking-widest">Sign In</h2>
        <p>
          Don't have an account?{" "}
          <Link to="register" className="text-green-500 underline">
            Register?
          </Link>
        </p>

        <input className="p-3 w-full outline-none text-lg bg-transparent placeholder:text-gray-400 text-white border-white border-b-2 " type="email" name="" placeholder="Email" id="" />
        <input className="p-3 w-full outline-none text-lg bg-transparent placeholder:text-gray-400 text-white border-white border-b-2 " type="password" name="" placeholder="Password" id="" />

        <button className="bg-green-600 text-white p-3 rounded-md uppercase cursor-pointer w-full" type="submit">
          sign in
        </button>
      </form>
      <Link to="/">
        <IoCaretBackCircleOutline
          onClick={changeLogin}
          className="absolute text-white text-4xl z-10 top-[15vh] left-[30vw] cursor-pointer 
        max-md:right-[5vw] max-md:top-[15vh] max-lg:right-[15vw]"
        />
      </Link>
    </div>
  );
};

export default Login;
