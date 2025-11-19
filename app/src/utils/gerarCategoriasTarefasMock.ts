import { CategoriaTarefa } from "../views/Home";

const cores: Array<string> = [
  "rgb(192, 57, 43)",
  "rgb(41, 128, 185)",
  "rgb(44, 62, 80)",
  "rgb(142, 68, 173)",
  "rgb(211, 84, 0)"
];

const gerarCategoriasTarefasMock = (): CategoriaTarefa[] => {
  const categorias: CategoriaTarefa[] = [];

  for (let i: number = 0; i < 5; i++) {
    const categoria: CategoriaTarefa = {
      nomeCategoria: "Categoria de teste " + (i + 1),
      quantidadeTarefas: i + 10,
      percentualTarefasConcluidas: i + 45,
      fotosUsuarios: [
        "https://www.bing.com/th/id/OIP.5qSmhXAPzpRf_txZO4l9LAHaE8?w=264&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.fxo90YbD2MESASYI2t87iQHaHa?w=188&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.g-2SRSrdQoQYIZBvHR34TQHaE8?w=263&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      ], 
      cor: cores[ i ]
    }

    categorias.push(categoria);
  }

  return categorias;
}

export default gerarCategoriasTarefasMock;