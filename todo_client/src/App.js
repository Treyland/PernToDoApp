import React from "react";
import './App.css';

//components
import InputTodo from "./Components/InputTodo";
import ListTodos from "./Components/ListTodo";

function App() {
  return (
    <div className = "container">
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
