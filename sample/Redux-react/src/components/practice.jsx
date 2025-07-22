import React from "react";
import { buyAllCake,addCake,buyCake } from "../ReduxMain/cake/cakeAction";
import { connect } from "react-redux";

function ContainerCake(props) {
  return (
    <div>
      <h2>NUMBER OF CAKES : {props.numberOfCakes}</h2>
      <button onClick={props.addCake}>ADD CAKE</button>
      <button onClick={props.buyCake}>BUY CAKE</button>
      <button onClick={props.buyAllCake}>BUY ALL CAKE</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
    buyAllCake: () => dispatch(buyAllCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCake);
