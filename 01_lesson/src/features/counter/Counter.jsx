import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByValue } from './counterSlice';

export default function Counter() {
  const [incrementValue, setIncrementValue] = useState(0);
  const addValue = Number(incrementValue) || 0;
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  const resetAll = () => {
    dispatch(reset());
    setIncrementValue(0);
  }
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button> 
        </div>
        <input 
            type="text"
            value={incrementValue}
            onChange={(e)=> setIncrementValue(e.target.value)}
        />
        <div>
            <button onClick= {()=> dispatch(incrementByValue(addValue))}>Increment by value</button>
            <button onClick= {()=> resetAll()}>Reset All</button>
        </div>
    </section>
  )
}
