

const redux = require("redux");

const createStore = redux.createStore;
const BUY_CAR = "BUY_CAR";

function buycar() {
  return {
    type: "BUY_CAR",
    info: "First Reduc Action",
  };
}

const initialState = {
  numberOfCars: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("initial value :", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated Store :", store.getState());
});
 store.dispatch(buycar())
 store.dispatch(buycar())
 store.dispatch(buycar())
 store.dispatch(buycar())
 store.dispatch(buycar())