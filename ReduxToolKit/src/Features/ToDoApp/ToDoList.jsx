import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./ToDoSlice";

function ToDoList() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
console.log(todos)
  const handleClick = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div>
      <div>
        <h2>TODO APP</h2>
        <input
          type="text"
          value={text}
          placeholder="Enter Task"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>ADD TASK</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Clear</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
