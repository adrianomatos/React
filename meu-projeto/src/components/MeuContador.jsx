// ESTADO COM HOOKS
import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0); // HOOK

  function aumentar() {
    setContador(contador + 1);
  }
  function diminuir() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h2>Meu Contador - Renderização condicional</h2>
      <h3>Contador: {contador}</h3>

      {contador >= 10 ? <h3>Valor alto!</h3> : <h3>Valor baixo!</h3>}

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
}
