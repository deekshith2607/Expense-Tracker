import React from 'react'
import ToggleTransaction from './ToggleTransaction'

const ShowTransactions = () => {
    const handelToggle = ()=>{

    }
  return (
    <div className='h-full w-full p-5  gap-2'>
      <ToggleTransaction handelToggle={handelToggle} />
    </div>
  )
}

export default ShowTransactions
