import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { RiGoogleFill } from "@remixicon/react";
import { auth } from "../utilities/firebaseConfig";

const Loging = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { login, googleSignIn, logout, user } = useContext(AuthContext);
  const handellogin = async (e) => {
    e.preventDefault();
    if (user) {
      navigate("/dashboard");
    } else {
      try {
        await login(Email, password);
        setEmail("");
        setpassword("");
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  

  return (
    <div className="min-h-screen w-full bg-[#CFDDDD] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl flex flex-col items-center gap-6 p-6 sm:p-10">
        <h2 className="text-xl font-mono mt-5 text-[#115D5B] font-bold p-3 rounded-2xl border-2 border-[#115D5B]">
          Login
        </h2>
        <form onSubmit={handellogin} className="flex flex-col mt-10 gap-4">
          <input
            type="email"
            className="Input"
            value={Email}
            required
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="Input"
            value={password}
            required
            placeholder="Enter Your Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="bg-[#115D5B] text-white p-2 rounded-md">
            Login
          </button>
        </form>
        <button
          className="bg-[#115D5B] text-white p-2 rounded-md flex items-center gap-2"
          onClick={googleSignIn}
        >
          <RiGoogleFill />
          Login with Google
        </button>

        <h4>
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-[#115D5B] underline">
            Register
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default Loging;
