import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { RiGoogleFill } from "@remixicon/react";

const Signup = () => {
  const { signup, googleSignIn } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, name, password);
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full bg-[#CFDDDD] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl flex flex-col items-center gap-6 p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-[#115D5B] p-3 rounded-2xl border-2 border-[#115D5B] mt-4">
          Sign-Up
        </h2>

        <form className="flex flex-col gap-4 w-full mt-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#115D5B]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#115D5B]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#115D5B]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-[#115D5B] text-white py-2 rounded-lg hover:bg-[#0f4b49] transition font-medium">
            Sign-Up
          </button>
        </form>

        <button
          className="w-full sm:w-auto bg-[#115D5B] text-white px-4 py-2 flex items-center justify-center gap-2 rounded-lg hover:bg-[#0f4b49] transition"
          onClick={googleSignIn}
        >
          <RiGoogleFill size={20} />
          Sign-Up with Google
        </button>

        <h5 className="text-sm sm:text-base font-sans">
          Already have an account?{" "}
          <Link to="/login" className="text-[#115D5B] font-medium hover:underline">
            Login
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;