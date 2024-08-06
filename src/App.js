import React, { useState } from "react";
import ItemLista from "./models/ItemLista";
import Formulario from "./models/Formulario";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const excluirTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Formulario onAdd={adicionarTarefa} />
      <ItemLista tarefas={tarefas} onExcluir={excluirTarefa} />
    </div>
  );
}
