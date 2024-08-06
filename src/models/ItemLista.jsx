export const tarefas = [];

export default function ItemLista({ tarefas, onExcluir }) {
  const tarefaListada = tarefas.map((tarefa, index) => (
    <li key={index}>
      {tarefa} <button onClick={() => onExcluir(index)}>Excluir</button>
    </li>
  ));

  return (
    <div>
      <ol>{tarefaListada}</ol>
    </div>
  );
}
