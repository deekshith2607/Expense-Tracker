import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen w-screen bg-[#CFDDDD] p-10 flex items-center justify-center">
      <div className="h-[70%] w-full rounded-lg bg-white shadow-2xl  flex flex-col items-center  gap-4 justify-center">
        <h2 className="text-xl font-mono mt-5 text-[#115D5B] font-bold p-3 rounded-2xl border-2 border-[#115D5B]">Sign-Up</h2>
        <form className="flex flex-col mt-10 gap-4">
          <input 
          required
          
          type="text" 
          placeholder="Enter Your Name"
           className="Input" />
          <input
          required
            type="email"
            placeholder="Enter Your Email"
            className="Input"
          />
          <input
          required
            type="password"
            placeholder="Enter Your Password"
            className="Input"
          />
          <button className="bg-[#115D5B] text-white p-2 rounded-md">
            Sign-Up
          </button>
        </form>
        <h5 className="font-sans">Already have an Account? <Link to="/login" className="text-[#115D5B] font-medium">Login</Link></h5>
      </div>
    </div>
  );
};

export default Signup;
