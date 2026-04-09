import React from 'react'

const TransactionCard = ({transaction}) => {
  return (
    <div className='h-20 w-full flex shrink-0 items-center justify-evenly rounded-2xl bg-amber-200 '>
      <h5 className='text-sm w-[50%] wrap-break-word' >{transaction.Name} </h5>
      <h5 className='text-xs'>{transaction.Amount}</h5>
     
    </div>
  )
}

export default TransactionCard
 