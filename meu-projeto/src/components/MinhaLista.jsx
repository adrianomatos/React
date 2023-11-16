import { useEffect } from "react";
import { useState } from "react";

const minhaLista = [
  { id: "1", value: "Abacate" },
  { id: "2", value: "Graviola" },
];

export default function MinhaLista() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista);
    }
  }, [pesquisa]);

  console.log(pesquisa);

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquise aqui"
      />

      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </div>
  );
}
