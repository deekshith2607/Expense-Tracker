import React from 'react'
import { useTransaction } from '../Contexts/Transactionprovider'

const Income = () => {
  const {totalIncome} = useTransaction()
  return (
    <div className='w-full sm:w-72 h-auto px-5 py-4 flex flex-col justify-center rounded-2xl shadow bg-amber-200 transition-all duration-200'>
     <h2 className='text-sm sm:text-base font-sans mb-1'>Total Income</h2>
      <p className='text-lg sm:text-xl font-semibold mb-1'>₹ {totalIncome}</p>
      <p className='text-xs sm:text-sm font-serif text-gray-700'>More Info</p>
    </div>
  )
}

export default Income
