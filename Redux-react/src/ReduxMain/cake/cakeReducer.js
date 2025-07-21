import { ADD_CAKE, BUY_ALL_CAKE, BUY_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 20,
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case BUY_ALL_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case ADD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };

    default:
      return state;
  }
};
