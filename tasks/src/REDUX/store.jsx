import { legacy_createStore as createStore, applyMiddleware } from "redux";
import cakeReducer from "./cakeReducer";
import logger from "redux-logger";

const store = createStore(
  cakeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(logger))
    : applyMiddleware(logger)
);
export default store;
