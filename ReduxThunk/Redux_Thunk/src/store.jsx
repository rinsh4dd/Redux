import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import userReducer from "./Users/userReducer";
import {thunk} from "redux-thunk";
import logger from "redux-logger";

 const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store