import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { store } from "./ReduxMain/store";
import CakeContainer from "./components/cakeContainer";
import CakeContainerHook from "./components/cakeContainerHook";
import ContainerCake from "./components/practice";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ContainerCake />
      </div>
    </Provider>
  );
}

export default App;
