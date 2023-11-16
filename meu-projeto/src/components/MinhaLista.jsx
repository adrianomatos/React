const minhaLista = [
  { id: "1", value: "Abacate" },
  { id: "2", value: "Graviola" },
];

export default function MinhaLista() {
  return minhaLista.map((item) => {
    return (
      <div key={item.id}>
        <h4>{item.value}</h4>
      </div>
    );
  });
}
