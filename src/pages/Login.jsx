import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { login } = useContext(AuthContext);
  const handellogin = (e) => {
    e.preventDefault();

    login(Email, password);
    setEmail("");
    setpassword("");
  };

  return (
    <div className="h-screen w-screen  bg-[#CFDDDD] flex flex-col items-center justify-center p-10">
      <div className="h-[70%] w-full rounded-lg bg-white shadow-2xl  flex flex-col items-center  gap-4 justify-center">
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
export default Login;
