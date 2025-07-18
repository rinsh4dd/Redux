const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "1st redux action",
  };
}

//(pervState,action)=>newState
const initialState = {
  numOfCakes: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const strore = createStore(reducer);
console.log("initialState",strore.getState())
strore.subscribe(()=>{
    console.log("updated state",strore.getState())
})
strore.dispatch(buyCake())
strore.dispatch(buyCake())
strore.dispatch(buyCake())
strore.dispatch(buyCake())
 