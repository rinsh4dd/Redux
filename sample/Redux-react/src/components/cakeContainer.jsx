import React from "react";
import { buyCake } from "../Redux/cake/cakeAction";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>NUMBER OF CAKES : {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(CakeContainer);
