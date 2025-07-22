import React from "react";
import { buyAllCake,addCake,buyCake } from "../ReduxMain/cake/cakeAction";
import { connect } from "react-redux";

function ContainerIceCream(props) {
  return (
    <div>
      <h2>NUMBER OF ICECREAM : {props.numberOfIceCream}</h2>
      <button onClick={props.buyIceCream}>BUY CAKE</button>
     
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.numberOfIceCream, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyIceCream()),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerIceCream);
