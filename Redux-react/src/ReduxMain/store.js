import { createStore } from "redux";
import { CakeReducer } from "./cake/cakeReducer";
export const store = createStore(CakeReducer);
