import { combineReducers } from "redux";
import { CakeReducer } from "./cake/cakeReducer";
const rootReducer ={
    cake :CakeReducer,
    iceCream:iceCreamReducer
}
export default rootReducer