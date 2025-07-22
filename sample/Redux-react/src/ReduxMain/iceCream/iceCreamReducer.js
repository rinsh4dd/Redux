const initialState = {
  numberOfIceCream: 0,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      state;
  }
};
