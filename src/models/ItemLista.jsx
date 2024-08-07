import React from "react";

function ItemLista({ todo, toggleComplete }) {
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => toggleComplete(todo.id)}
    >
      {todo.todo}
    </li>
  );
}

export default ItemLista;
