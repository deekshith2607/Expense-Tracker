import React, { useEffect, useState } from "react";
import ToggleTransaction from "./ToggleTransaction";
import Searchbar from "./Searchbar";
import TransactionCard from "./TransactionCard";
import { useTransaction } from "../Contexts/Transactionprovider";

const ShowTransactions = () => {
  const { getIncome, getExpense } = useTransaction();
  const [Type, setType] = useState("Income");
  const [Transactions, setTransactions] = useState([]);
  const [SearchVal, setSearchVal] = useState("");
  const [IncomeData, setIncomeData] = useState([])
  const [ExpenseData, setExpenseData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    
        let i = await getIncome();
        setIncomeData(i)
        let e = await getExpense()
        setExpenseData(e)
    

      
    };

    fetchData();
  }, [Type]);
  const handelToggle = async (toggleType) => {
    setType(toggleType);
  };
  const handleSearch = (val) => {};
  return (
    <div className="h-full w-full p-2  gap-2">
      <ToggleTransaction handelToggle={handelToggle} />
      <Searchbar Searchval={SearchVal} setSearchVal={setSearchVal} />
      <div className="h-[72%] mt-2 w-full flex items-center gap-2 overflow-y-auto justify-start flex-col">
        {(Type == "Income"  && SearchVal && IncomeData?.length
          ? IncomeData.filter((transaction) =>
              transaction.Category.toLowerCase().includes(
                SearchVal.toLowerCase(),
              ),
            )
          : Type == "Expense"  && SearchVal && ExpenseData?.length
          ? ExpenseData.filter((transaction) =>
              transaction.Category.toLowerCase().includes(
                SearchVal.toLowerCase(),
              ),
            ):Type =="Income"?IncomeData:Type =="Expense"?ExpenseData : []
        ).map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default ShowTransactions;
