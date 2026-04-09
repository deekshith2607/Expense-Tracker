import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { logout } = useContext(AuthContext);
  logout();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-green-200 to-[#CFDDDD]">
      <div className="flex flex-col items-center justify-center text-center gap-6 px-4 sm:px-10 md:px-20">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-mono font-bold mt-6">
          Expense Tracker
        </h2>

        {/* Welcome Section */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-black font-sans">
            Welcome to Expense Tracker
          </h1>
          <p className="text-lg sm:text-xl text-[#115D5B] mt-4">
            Track your expenses and manage your budget with ease.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            to="/sign-up"
            className="bg-[#115D5B] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0f4b49] transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-[#115D5B] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0f4b49] transition"
          >
            Login
          </Link>
        </div>

        {/* Note */}
        <p className="mt-10 p-3 rounded-xl text-sm bg-green-300 max-w-md">
          [Note] This is the first version of the website. Soon, new updates
          will come and the UI will get improved.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;