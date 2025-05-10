import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './featured/counter/CounterSlice'
const App = () => {

  const [amount,setAmount] = useState(0)
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  const handleIncrementClick = ()=>{
      dispatch(increment())
  }

  const handleDecrementClick = ()=>{
    dispatch(decrement())
  }

  const handleResetClick = ()=>{
    dispatch(reset());
  }

  const handleAmountClick = ()=>{
    dispatch(incrementByAmount(amount))
  }
  console.log(count);
  
  return (
    <div className='text-2xl flex flex-col gap-5'>
        <button onClick={handleIncrementClick}>+</button>
        <p>count:{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleResetClick}> Reset</button>

        <input type="Number" 
        value={amount}    
        placeholder='enter amount'
        onChange={(e)=>setAmount(e.target.value)}
        />

        <button onClick={handleAmountClick}>Inc By Amount</button>
    </div>
  )
}

export default App
