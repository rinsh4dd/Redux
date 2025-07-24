import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./Features/Counter/Counter";
import ToDoList from "./Features/ToDoApp/ToDoList";
function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        <ToDoList/>
      </Provider>
    </>
  );
}

export default App;
