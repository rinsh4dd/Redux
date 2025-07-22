import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../Redux/cake/cakeAction'
function CakeContainerHook() {
    const numberOfCakes = useSelector(state =>state.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of cakes : {numberOfCakes}</h2>
      <button disabled={numberOfCakes===0} onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
    </div>
  )
}

export default CakeContainerHook
