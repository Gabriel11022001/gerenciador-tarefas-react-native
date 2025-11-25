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

export type EquipeTarefa = {

  membros?: Array<MembroEquipeTarefa>;

}

export type MembroEquipeTarefa = {

  nomeMembro: string;
  foto: string;

}

export type Tarefa = {

  id: number;
  titulo: string;
  categoriaTarega: CategoriaTarefa;
  descricao: string;
  status: Status;
  dataLimiteConclusao: string;
  equipeTarefa?: EquipeTarefa;

}

const Home = ({ navigation }: any) => {

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
        status: i % 2 == 0 ? Status.andamento : Status.concluido,
        equipeTarefa: {
          membros: [
            {
              nomeMembro: "Membro de teste 1",
              foto: "https://cdn.pixabay.com/photo/2018/03/17/12/12/portrait-3233851_960_720.jpg"
            },
            {
              nomeMembro: "Membro de teste 2",
              foto: "https://th.bing.com/th/id/R.44e62c64304fed40bdc426f02759ef4a?rik=Vz1TOGBs5LSlTA&riu=http%3a%2f%2fwww.bellutti.com.br%2farquivos%2fimg_equipe%2fhomem-de-negocios-novo-consideravel-na-camisa-e-nos-monoculos-8574-628-%5b27-05-22%5d%5b12-54-05%5d.webp&ehk=HMuXXiQQXfDG1z9fTH3OeOx2daJYSCEN3hsGF5ysLGM%3d&risl=&pid=ImgRaw&r=0"
            },
            {
              nomeMembro: "Membro de teste 3",
              foto: "https://www.sas.com/content/dam/SAS/images/personas/man-glasses-laptop.jpg/_jcr_content/renditions/cq5dam.thumbnail.319.319.png"
            }
          ]
        }
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

    navigation.navigate("datalhesTarefa", { idTarefaVisualizar: idTarefaVisualizar, tarefas: tarefas });
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