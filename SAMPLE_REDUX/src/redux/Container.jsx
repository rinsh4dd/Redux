import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./cake/cakeAction";
import { buyIceCream } from "./iceCream/iceCreamAction";

function Container(props) {
  return (
    <div>
      <h1>NUMBER OF CAKES : {props.numOfCakes}</h1>
      <h1>NUMBER OF ICECREAMS : {props.numOfIceCreams}</h1>

      <button onClick={props.buyCake}>BUY CAKE</button>
      <button onClick={props.buyIceCream}>BUY ICECREAM</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    numOfIceCreams: state.iceCream.numOfIceCreams, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),      
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
