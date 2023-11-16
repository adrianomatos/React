// ESTADO COM HOOKS
import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador+1);
  }

  return (
    <div>
      <h2>Meu Contador</h2>
      <h3>{contador}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}
