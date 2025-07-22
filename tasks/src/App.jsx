import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./REDUX/store";
import Container from "./REDUX/Container";

function App() {
  return (
    <>
      <Provider store={store}>
      <Container />
      </Provider >
    </>
  );
}

export default App;
