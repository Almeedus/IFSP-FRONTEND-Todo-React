import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import ItemLista from "./models/ItemLista";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setTodos(response.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <ItemLista
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
