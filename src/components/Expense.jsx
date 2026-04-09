import React, { useEffect, useState } from 'react'
import { useTransaction } from '../Contexts/Transactionprovider'

const Expense = () => {
  const { totalExpense } = useTransaction()
  const [TotalExpense, setTotalExpense] = useState(0)

  useEffect(() => {
    setTotalExpense(totalExpense || 0)
  }, [totalExpense])

  return (
    <div className='w-full sm:w-72 h-auto px-5 py-4 flex flex-col justify-center rounded-2xl shadow bg-amber-200 transition-all duration-200'>
      <h2 className='text-sm sm:text-base font-sans mb-1'>Total Expense</h2>
      <p className='text-lg sm:text-xl font-semibold mb-1'>₹ {TotalExpense}</p>
      <p className='text-xs sm:text-sm font-serif text-gray-700'>More Info</p>
    </div>
  )
}

export default Expense