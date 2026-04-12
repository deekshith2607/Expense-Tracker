import React, { useContext } from "react";
import Income from "../components/Income";
import Expense from "../components/Expense";
import Addtrans from "../components/Addtrans";
import { AuthContext } from "../Contexts/AuthProvider";
import ShowTransactions from "../components/ShowTransactions";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen w-full bg-amber-50 flex flex-col p-4 sm:p-6 md:p-10 font-bold">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold font-sans">Dashboard</h1>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          onClick={logout}
        >
          Log-Out
        </button>
      </div>

      {/* Income & Expense */}
      <div className="flex flex-col sm:flex-row w-full h-auto lg:justify-center lg:items-center gap-4 mb-4">
        <div className="">
          <Income />
        </div>
        <div className="">
          <Expense />
        </div>
      </div>

      {/* Add Transaction */}
      <div className="w-full mb-4">
        <Addtrans />
      </div>

      {/* Transactions List */}
      <div className="flex-1 w-full rounded-2xl border bg-white shadow-lg p-2 overflow-y-auto">
        <ShowTransactions />
      </div>
    </div>
  );
};

export default Dashboard;