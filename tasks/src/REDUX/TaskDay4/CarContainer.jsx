import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCar } from "./carAction";
import { BUY_CAR } from "./carType";

function CarContainer() {
  const numOfCars = useSelector((state) => state.numOfCars);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number Of Cars:{numOfCars}</h1>
      <button onClick={()=>dispatch(buyCar())}>BUY CAR</button>
    </div>
  );
}

export default CarContainer;
