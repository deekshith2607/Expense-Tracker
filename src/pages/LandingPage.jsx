import React from "react";
import image from "../assets/image.jpg";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="h-screen  w-full relative  flex items-center  justify-center">
      <div className="h-full w-full flex items-center flex-col gap-10 bg- bg-linear-to-b from-green-200 to-[#CFDDDD]">
        <div className=" p-5   ">
          <h2 className="text-2xl font-mono font-bold ">Expense Tracker</h2>
        </div>
        <div className="h-[20vh] w-full p-10">
          <h1 className="text-4xl  font-bold text-black font-sans">
            Welcome to Expense Tracker...
          </h1>
          <p className="text-lg font-mono text-[#115D5B] mt-5">
            Track your expenses and manage your budget with ease.
          </p>
        </div>

        <div className="flex items-start p-10 mt-10 justify-start w-full gap-5">
            <Link to="/sign-up" className="bg-[#115D5B] text-white p-3 rounded-md">
            Get Started
          </Link>
          <Link to="/login" className="bg-[#115D5B] text-white p-3 rounded-md">
            Login
          </Link>
          
        </div>
       <p className="p-5 m-5 rounded-xl text-sm absolute bg-green-300 bottom-0">[Note] This is the first version of the website. Soon, new updates will come and the UI will get improved. </p>
      </div>
    
    </div>
  );
};

export default LandingPage;
