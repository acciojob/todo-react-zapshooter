import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);   // ✅ fixed here
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="button" onClick={addTask}>
          Add Todo
        </button>
      </div>

      <Todo todos={todos} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
