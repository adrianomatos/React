import { useEffect, useState } from "react";

const tarefas = [
  { id: "1", title: "Minha 1 tarefa" },
  { id: "2", title: "Minha 2 tarefa" },
  { id: "3", title: "Minha 3 tarefa" },
  { id: "4", title: "Minha 4 tarefa" },
];

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <>
      <h1>Buscando dados com fetch</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div>
              <li key={tarefa.id}>
                {tarefa.title}
                {tarefa.completed ? " - Concluída" : null}
              </li>
            </div>
          );
        })}
      </ol>
    </>
  );
}
