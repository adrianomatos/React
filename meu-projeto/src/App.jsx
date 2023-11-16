import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";


function App() {
  return (
    <>
      <h1>Components e Props</h1>
      <MeuComponente />
      <MeuBotao conteudo="Me clique" />
      <MeuBotao conteudo="Outro conteúdo" />

      <h1>Eventos alterando Estados com Hooks</h1>
      <MeuContador />
    </>
  );
}

export default App;
