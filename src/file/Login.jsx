import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({
  changeLogin,
  setShowRegister,
  setShowLogin,
} ) => {
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
    <div className="flex justify-center items-center w-full h-[84vh] bg-myColor z-20 pt-[10vh]">
      <form
        onSubmit={logIn}
        action=""
        className="bg-slate-900 rounded-md  text-white shadow-lg shadow-white  min-h-[40vh] w-[30vw] px-10 py-16 flex flex-col gap-4 justify-center items-center max-md:w-[70vw] max-xl:w-[60vw] "
      >
        <h2 className="text-3xl max-md:text-2xl uppercase tracking-widest">
          Sign In
        </h2>

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

        <button
          className="bg-green-600 text-white p-3 rounded-md uppercase cursor-pointer w-full"
          type="submit"
        >
          sign in
        </button>
        <Link
          to="/register"
          onClick={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          className="text-white self-start underline"
        >
          Don't you have an account?
        </Link>
      </form>
      <IoIosCloseCircleOutline
        onClick={changeLogin}
        className="absolute text-4xl z-10 top-[15vh] right-[30vw] cursor-pointer text-slate-900 
        max-md:right-[5vw] max-md:top-[15vh] max-lg:right-[15vw]"
      />
    </div>
  );
};

export default Login;
