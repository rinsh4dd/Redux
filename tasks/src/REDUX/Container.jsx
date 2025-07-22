import { connect } from "react-redux";
import React from "react";
import { buyCake } from "./cakeAction";

function Container(props) {
  return (
    <div>
      <h1>Number Of Cakes :{props.numOfCakes} </h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapStateToDispatch = (dispatch) => {
    return{

        buyCake: () => dispatch(buyCake())
    }
};
export default connect(mapStateToProps, mapStateToDispatch)(Container);
