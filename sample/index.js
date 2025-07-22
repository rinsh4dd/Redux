// //Redux Imported
// const redux = require("redux");
// const ReduxLogger = require('redux-logger')
// //creating store from redx library
// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers
// const applyMiddleware = redux.applyMiddleware
// const logger = ReduxLogger.createLogger()
// //action type constant declare
// const BUY_CAR = "BUY_CAR";
// const BUY_BIKE = "BUY_BIKE";

// //action creator object when try to buy car just need to pass  this object as dispatch
// function buycar() {
//   return {
//     type: BUY_CAR,
//     info: "First Reduc Action",
//   };
// }
// function buybike() {
//   return {
//     type: BUY_BIKE,
//     info: "First Reduc Action",
//   };
// }

// //initial state of state means, current starting value of  cars

// const initialCarState = {
//   numberOfCars: 10,
// };

// const initialBikeState = {
//   numberOfBikes: 20,
// };

// //reducer function : this will handle actions to change the state
// function BikeReducer  ( state = initialBikeState, action ) {
//   switch (action.type) {
//     case BUY_BIKE:
//       return {
//         ...state, //if there is more properties on initial state object it will stays same only changes numberOfCars
//         numberOfBikes: state.numberOfBikes - 1,
//       };
//     default: {
//       return state;
//     }
//   }
// };

// function CarReducer  ( state = initialCarState, action ) {
//   switch (action.type) {
//     case BUY_CAR:
//       return {
//         ...state, //if there is more properties on initial state object it will stays same only changes numberOfCars
//         numberOfCars: state.numberOfCars - 1,
//       };
//     default: {
//       return state;
//     }
//   }
// };

// const rootReducer = combineReducers({
//     car:CarReducer,
//     bike:BikeReducer
// })
// //creating store
// const store = createStore(rootReducer,applyMiddleware(logger));

// //prinitng initial value of store
// console.log("initial value :", store.getState());
// //
// const unsubscribe = store.subscribe(() => {

// });
// store.dispatch(buycar());
// store.dispatch(buycar());
// store.dispatch(buycar());
// store.dispatch(buybike());
// store.dispatch(buybike());
// store.dispatch(buybike());

const redux = require("redux");
const createStore = redux.createStore;
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
};

function increment() {
  return {
    type: INCREMENT,
  };
}
function decrement() {
  return {
    type: DECREMENT,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("initial Count is", store.getState());
store.subscribe(() => {
  console.log("UPDATED STATE:", store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
