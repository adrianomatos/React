import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";

function App() {
  return (
    <>
      <h1>Components e Props</h1>
      <MeuComponente />
      <MeuBotao conteudo="Me clique" />
      <MeuBotao conteudo="Outro conteúdo" />

      <h1>Eventos alterando Estados com Hooks</h1>
      <MeuContador />

      <h1>Listas e chaves</h1>
      <MinhaLista />

    </>
  );
}

export default App;
