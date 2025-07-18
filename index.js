//Redux Imported
const redux = require("redux");

//creating store from redx library
const createStore = redux.createStore;
const combineReducers = redux.combineReducers
//action type constant declare
const BUY_CAR = "BUY_CAR";
const BUY_BIKE = "BUY_BIKE";

//action creator object when try to buy car just need to pass  this object as dispatch
function buycar() {
  return {
    type: BUY_CAR,
    info: "First Reduc Action",
  };
}
function buybike() {
  return {
    type: BUY_BIKE,
    info: "First Reduc Action",
  };
}

//initial state of state means, current starting value of  cars

const initialCarState = {
  numberOfCars: 10,
};

const initialBikeState = {
  numberOfBikes: 20,
};

//reducer function : this will handle actions to change the state
function BikeReducer  ( state = initialBikeState, action ) {
  switch (action.type) {
    case BUY_BIKE:
      return {
        ...state, //if there is more properties on initial state object it will stays same only changes numberOfCars
        numberOfBikes: state.numberOfBikes - 1,
      };
    default: {
      return state;
    }
  }
};

function CarReducer  ( state = initialCarState, action ) {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state, //if there is more properties on initial state object it will stays same only changes numberOfCars
        numberOfCars: state.numberOfCars - 1,
      };
    default: {
      return state;
    }
  }
};


const combinedStore = combineReducers({
    car:CarReducer,
    bike:BikeReducer
})
//creating store
const store = createStore(combinedStore);

//prinitng initial value of store
console.log("initial value :", store.getState());
//
const unsubscribe = store.subscribe(() => {
  console.log("updated Store :", store.getState());
});
store.dispatch(buycar());
store.dispatch(buycar());
store.dispatch(buycar());
store.dispatch(buybike());
store.dispatch(buybike());
store.dispatch(buybike());
   