import React from "react";
import { useNavigate } from "react-router-dom";

const Addtrans = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full p-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <button
        className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white text-sm sm:text-base rounded-md hover:bg-green-600 transition-all duration-200"
        onClick={() => navigate("/add")}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default Addtrans;