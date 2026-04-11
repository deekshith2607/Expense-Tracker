import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Update from './Update'
import { TransactionContext } from '../Contexts/Transactionprovider'


const TransactionCard = ({transaction}) => {
  const [open, setopen] = useState(false)
  const { deleteTransaction } = useContext(TransactionContext)

  const deleteTrans = async ()=>{
    try{
      deleteTransaction(transaction.id) 
      window.location.reload()
    }
    catch(err){
      alert(err)
    }
  }
  
  return (
    <div className='h-20 w-full flex shrink-0 items-center justify-around  rounded-2xl bg-amber-200 '>
      <h5 className='text-sm  wrap-break-word' >{transaction.Name} </h5>
      <h5 className='text-xs'>{transaction.Amount}</h5>
      <button className='bg-blue-300 px-2 flex items-center justify-center py-1 text-xs font-medium rounded-xl md:text-sm md:px-4 md:py-2 md:font-bold ' onClick={()=>{
        setopen(true)
      }}>Update</button>
      { open? <Update transaction={transaction} onClose={()=>{
        setopen(false)
      }}/> : null}
     <button className='bg-red-300 px-2 flex items-center justify-center py-1 text-xs font-medium rounded-xl md:text-sm md:px-4 md:py-2 md:font-bold '
     onClick={deleteTrans}>Delete</button>
    </div>
  )
}

export default TransactionCard
 