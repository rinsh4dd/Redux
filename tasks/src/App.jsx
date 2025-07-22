import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./REDUX/TaskDay4/taskStore"; 
import Container from "./REDUX/Container";
import CarContainer from "./REDUX/TaskDay4/CarContainer";

function App() {
  return (
    <>
      <Provider store={store}>
      {/* <Container /> */}
      <CarContainer/>
      </Provider >
    </>
  );
}

export default App;
