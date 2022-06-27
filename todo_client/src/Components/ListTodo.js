import React , { useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function
  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      }); 

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message)  
    }
  };

 //get todos function
  const getTodos = async() => {
    try {
      const response = await fetch("http://localhost:5000/todos")  
      const jsonData = await response.json()

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getTodos();
  }, []);

  return(
    <div>
      <table>
        <thead>
          <tr className="todoHeaders">
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {/*<tr>
          <td>Trey</td>
          <td>Blanding</td>
          <td>Treyland</td>   
        </tr>*/}
        {todos.map(todo => (
          <tr className="todoRow" key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>
                <EditTodo todo={todo} />
            </td>
            <td>
              <button id="deleteButton" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
)};

export default ListTodos;