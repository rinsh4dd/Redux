import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/ToDoApp/ToDoSlice"
const store = configureStore({
  reducer: {
   todos:todoReducer,
  },
});
export default store;