import React from 'react'

const Expense = () => {
  return (
   <div className='w-full h-full px-5 py-3 flex flex-col  justify-center rounded-2xl shadow bg-amber-200'>
      <h2 className='text-sm font-sans'>Total Expense</h2>
      <p className='text-lg'>₹ 0.00</p>
      <p className='text-xs font-serif'>More Info</p>
    </div>
  )
}

export default Expense
