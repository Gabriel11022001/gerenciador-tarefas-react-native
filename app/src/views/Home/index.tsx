import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CategoriaTarefa from "../../components/CategoriaTarefa";
import FiltroTarefas, { TipoFiltro } from "../../components/FiltroTarefas";
import ListaTarefas from "../../components/ListaTarefas";
import PessoaLogada from "../../components/PessoaLogada";
import Tela from "../../components/Tela";
import Titulo from "../../components/Titulo";
import gerarCategoriasTarefasMock from "../../utils/gerarCategoriasTarefasMock";

export type CategoriaTarefa = {

  nomeCategoria: string;
  quantidadeTarefas: number;
  percentualTarefasConcluidas: number;
  cor: string;
  fotosUsuarios: Array<string>;

}

export enum Status {

  concluido,
  andamento

}

export type Tarefa = {

  id: number;
  titulo: string;
  categoriaTarega: CategoriaTarefa;
  descricao: string;
  status: Status;
  dataLimiteConclusao: string;

}

const Home = () => {

  const [ carregando, setCarregando ] = useState<boolean>(false);
  const [ categorias, setCategorias ] = useState<Array<CategoriaTarefa>>([]);
  const [ filtroSelecionado, setFiltroSelecionado ] = useState<TipoFiltro | null>(null);
  const [ tarefas, setTarefas ] = useState<Array<Tarefa>>([]);

  const gerarTarefasTesteMock = (): Array<Tarefa> => {
    const tarefasMock: Array<Tarefa> = [];

    for (let i: number = 0; i < 100; i++) {
      const tarefaTeste: Tarefa = {
        id: i + 1,
        titulo: `Tarefa de teste ${ i + 1 }`,
        categoriaTarega: categorias[ 0 ],
        dataLimiteConclusao: "11/02/2026",
        descricao: "Descrição da tarefa de teste",
        status: i % 2 == 0 ? Status.andamento : Status.concluido
      }

      tarefasMock.push(tarefaTeste);
    }

    return tarefasMock;
  }

  // listar as categorias de tarefas
  const carregarCategoriasTarefas = async () => {
    setCarregando(true);

    try { 
      setCategorias(gerarCategoriasTarefasMock());
    } catch (e) {
      console.error("Erro ao tentar-se listar as categorias de tarefas: " + e);
    } finally {
      setCarregando(false);
    }

  }

  useEffect(() => {
    carregarCategoriasTarefas();
    filtrarTarefas(TipoFiltro.hoje);
  }, []);
  
  // redirecionar o usuário para a tela para visualizar a tarefa
  const visulizarTarefasCategoria = (categoria: CategoriaTarefa): void => {

    try {

    } catch (e) {
      console.error("Erro ao tentar-se redirecionar a tela para visualizar as tarefas por categoria: " + e);
    }

  }

  // filtrar tarefas por tipo
  const filtrarTarefas = (tipoFiltro: TipoFiltro): void => {
    setFiltroSelecionado(tipoFiltro);

    let tarefasFiltro: Array<Tarefa> = [];
    const tarefasMock: Array<Tarefa> = gerarTarefasTesteMock();

    if (tipoFiltro == TipoFiltro.hoje) {
      // buscar somente as tarefas de hoje
    } else if (tipoFiltro == TipoFiltro.todos) {
      // buscar todas as tarefas
      tarefasFiltro = tarefasMock;
    } else {
      // buscar as tarefas completadas
      tarefasFiltro = tarefasMock.filter((tarefaValidar: Tarefa) => {

        return tarefaValidar.status == Status.concluido;
      });
    }

    setTarefas(tarefasFiltro);
  }

  // visualizar tarefa
  const visualizarTarefa = (idTarefaVisualizar: number): void => {
    console.log("Visualizar tarefa de id: " + idTarefaVisualizar);
  }

  return (
    <Tela>
      <ScrollView showsVerticalScrollIndicator={ false }>
        { /** nome e foto da pessoa logada */ }
        <PessoaLogada nomePessoa="Gabriel Rodrigues" fotoPessoa="https://tse2.mm.bing.net/th/id/OIP.CsC304Xa0Ct_yfyqgaEXCAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Titulo titulo="Categorias" />
        { /** ScrollView listando as categorias das tarefas */ }
        <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } >
          { categorias.map((categoria: CategoriaTarefa) => {

            return <CategoriaTarefa 
              categoriaNome={ categoria.nomeCategoria }
              cor={ categoria.cor }
              fotosUsuariosCategoriasTarefas={ categoria.fotosUsuarios }
              percentualTarefasConcluidas={ categoria.percentualTarefasConcluidas }
              quantidadeTarefasCategoria={ categoria.quantidadeTarefas }
              onClickVisualizarTarefasCategoria={ () => {
                visulizarTarefasCategoria(categoria);
              } } />
          }) }
        </ScrollView>
        <Titulo titulo="Minhas tarefas" />
        { /** filtro de tarefas */ }
        <FiltroTarefas 
          nomesFiltros={ [ TipoFiltro.hoje, TipoFiltro.todos, TipoFiltro.completados ] } 
          filtrar={ (tipoFiltro: TipoFiltro) => {
            filtrarTarefas(tipoFiltro);
          } }
          selecionado={ filtroSelecionado != null ? filtroSelecionado : TipoFiltro.hoje } />
        <ListaTarefas tarefas={ tarefas } onVisualizar={ (idTarefaVisualizar: number) => {
          visualizarTarefa(idTarefaVisualizar);
        } } />
      </ScrollView>
    </Tela>
  );
}

export default Home;