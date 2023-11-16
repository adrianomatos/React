import { useState } from "react";
import "./styles.css";
import styles from './button.module.css'

export default function App() {
  const [contador, setContador] = useState(0); // HOOK

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      {contador}
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
    </div>
  );
}
