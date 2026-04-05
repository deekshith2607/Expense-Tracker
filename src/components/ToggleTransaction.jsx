import React, { useState } from "react";

const ToggleTransaction = () => {
  const [Income, setIncome] = useState(true);
  const [Expense, setExpense] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start gap-4 ">
      <div className="flex w-auto items-center justify-center gap-4">
        <button className={`px-5 py-3 rounded-2xl ${Income ? 'bg-green-500' : 'bg-indigo-100'}`}
        onClick={()=>{
          setIncome(true)
          setExpense(false)
        }}>Income</button>
        <button className={`px-5 py-3 rounded-2xl ${Expense ? 'bg-red-500' : 'bg-indigo-100'}`}
        onClick={()=>{
          setIncome(false)
          setExpense(true)
        }}>Expense</button>
      </div>

      <div>
        {Income && <h1> All Income</h1>}
        {Expense && <h1> All Expense</h1>}
      </div>
    </div>
  );
};

export default ToggleTransaction;
