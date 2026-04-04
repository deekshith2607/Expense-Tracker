import React from 'react'
import Income from '../components/Income'
import Expense from '../components/Expense'

const Dashboard = () => {
  return (
    <div className='w-screen bg-amber-50 h-screen realtive flex flex-col p-5 items-center  font-bold'>
      <div className='top-0 w-full p-2 items-center justify-between flex  gap-5'>
        <h1 className=' text-3xl font-bold font-sans '>Dashboard</h1>
        <button className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Log-Out</button>
      </div>
      <div className='h-[25%] w-full p-2  flex items-center justify-center gap-2'>
        <div className='w-1/2 h-2/3 '>
             <Income />
        </div>
        <div className='w-1/2 h-2/3 '>
         <Expense />
        </div>
      </div>

        <div className='h-[50%] w-full                 flex items-center justify-center  bg-amber-500 gap-2'>
          <div className='w-full h-full p-5'>
            <h2>chart</h2>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
