import React, { useState } from "react";
import { useTransaction } from "../Contexts/Transactionprovider";

const AddTranSactionPage = () => {
  const [CategorySelected, setCategorySelected] = useState(false);
  const [TypeSelected, setTypeSelected] = useState(false);
  const { addTransaction } = useTransaction();

  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState("");
  const [Category, setCategory] = useState("");
  const [Type, setType] = useState("");

  const transactionData = { Name, Amount, Category, Type };

  const SumbitTrans = async (e) => {
    e.preventDefault();
    await addTransaction(transactionData);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-amber-50 px-4">
      <form className="w-full max-w-md relative flex flex-col items-center justify-center gap-4 bg-amber-50 p-6 rounded-2xl shadow-lg">
        <h1 className="px-4 py-3 bg-green-400 font-bold text-2xl rounded-2xl w-full text-center">
          Add Transaction
        </h1>

        <input
          type="text"
          placeholder="Name of Transaction"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setAmount(e.target.value)}
          value={Amount}
        />

        {/* Category */}
        <input
          type="text"
          placeholder="Category"
          readOnly
          className="w-full px-4 py-2 border rounded-lg cursor-pointer outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setCategorySelected(true)}
          value={Category}
        />
        <div
          className={`absolute top-[60%] left-1/2 transform -translate-x-1/2 w-full max-w-xs rounded-xl shadow-lg border bg-white overflow-hidden z-50 ${
            CategorySelected ? "block" : "hidden"
          }`}
        >
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
            Select Category
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {[
              "Salary",
              "Freelance",
              "Investment",
              "Food",
              "Transportation",
              "Entertainment",
              "Utilities",
            ].map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition"
                onClick={() => {
                  setCategory(item);
                  setCategorySelected(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Type */}
        <input
          type="text"
          placeholder="Select type of Transaction"
          readOnly
          className="w-full px-4 py-2 border rounded-lg cursor-pointer outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setTypeSelected(true)}
          value={Type}
        />
        <div
          className={`absolute top-[80%] left-1/2 transform -translate-x-1/2 w-full max-w-xs rounded-xl shadow-lg border bg-white overflow-hidden z-50 ${
            TypeSelected ? "block" : "hidden"
          }`}
        >
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
            Select Type
          </div>
          <ul>
            {["Income", "Expense"].map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition"
                onClick={() => {
                  setType(item);
                  setTypeSelected(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={SumbitTrans}
        >
          Add Transaction
        </button>
      </form>

      <button
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default AddTranSactionPage;