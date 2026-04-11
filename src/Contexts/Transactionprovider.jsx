import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { db } from "../utilities/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  
} from "firebase/firestore";
import { AuthContext } from "./AuthProvider";
import { useSearchParams } from "react-router-dom";

export const TransactionContext = createContext();
export const useTransaction = () => {
  return useContext(TransactionContext);
};

const Transactionprovider = ({ children }) => {
  const [Income, setIncome] = useState([]);
  const [Expense, setExpense] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const { user } = useContext(AuthContext);
  // Add transaction to firebase
  const addTransaction = async (transactionData) => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    try {
      const docRef = await addDoc(
        collection(db, "users", user.uid, "transactions"),
        {
          ...transactionData,
          createdAt: Timestamp.now(),
        },
      );

      alert(
        "Transaction Added Successfully . Press Back To ReturnTo DashBoard ",
      );
    } catch (error) {
      alert("Error adding transaction: ", error);
    }
  };
  //Update transaction
    const update = async (docId,updatedData)=>{
      const updateRef = doc(db , "users" ,user.uid,"transactions",docId)

      try{
        await updateDoc(updateRef,{
          Name: updatedData.Name,
          Amount: updatedData.Amount,
          category: updatedData.Category,
          Type: updatedData.Type
        })
        const success = getDoc(updateRef)
        return success
        
      }
      catch(err){
       alert(err)
      }

    }

    //Delete
      const deleteTransaction  = async (id)=>{
       try{
        await deleteDoc(doc(db,"users" , user.uid,"transactions",id))
        // Update local state after deletion
        setIncome(prev => prev.filter(t => t.id !== id))
        setExpense(prev => prev.filter(t => t.id !== id))
        window.location.reload()
      } catch(err){
        alert(err)
      }
      }

  // Get income transactions from firebase
  const getIncome = async () => {
    if (!user) {
      console.log("User not logged in");
      return;
    }
    const q = query(
      collection(db, "users", user.uid, "transactions"),
      where("Type", "==", "Income"),
    );

    try {
      const querySnapshot = await getDocs(q);

      const incomeData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIncome(incomeData);
      return incomeData;
    } catch (error) {
      console.error("Error getting income transactions: ", error);
    }
  };


  //   Get expense from firebase
  const getExpense = async () => {
    if (!user) {
      console.log("User not logged in");
      return;
    }
    const q = query(
      collection(db, "users", user.uid, "transactions"),
      where("Type", "==", "Expense"),
    );
    try {
      const querySnapshot = await getDocs(q);

      const expenseData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExpense(expenseData);
      return expenseData;
    } catch (error) {
      console.error("Error getting expense transactions: ", error);
    }
  };
  (useEffect(() => {
    setTotalIncome(Income.reduce((sum, t) => sum + Number(t.Amount), 0));
  }),
    [Income]);

  (useEffect(() => {
    setTotalExpense(Expense.reduce((sum, t) => sum + Number(t.Amount), 0));
  }),
    [Expense]);
  return (
    <TransactionContext.Provider
      value={{
        addTransaction,
        getIncome,
        getExpense,
        totalIncome,
        totalExpense,
        update,
        deleteTransaction 
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default Transactionprovider;
