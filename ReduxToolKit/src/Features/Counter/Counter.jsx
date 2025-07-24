import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  return (
    <div>
      <div>
        <h2>COUNT:{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          placeholder="Enter Number to Be Added"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }
          
        }
        />
        <button onClick={()=>dispatch(incrementByAmount(amount))}>increment by amount</button>
      </div>
    </div>
  );
}

export default Counter;
