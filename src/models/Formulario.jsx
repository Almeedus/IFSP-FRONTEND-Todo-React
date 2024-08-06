import React, { useState } from "react";

export default function Formulario({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="nome da tarefa"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
