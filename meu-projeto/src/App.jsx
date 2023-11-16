import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";

function App() {
  return (
    <>
      <h1>Components e Props</h1>
      <MeuComponente />
      <MeuBotao conteudo="Me clique" />
      <MeuBotao conteudo="Outro conteúdo" />
    </>
  );
}

export default App;
