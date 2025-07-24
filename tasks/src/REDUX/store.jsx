import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import cakeReducer from "./cakeReducer";
import logger from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  cakeReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
