import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CategoriaTarefa from "../../components/CategoriaTarefa";
import FiltroTarefas, { TipoFiltro } from "../../components/FiltroTarefas";
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

const Home = () => {

  const [ carregando, setCarregando ] = useState<boolean>(false);
  const [ categorias, setCategorias ] = useState<Array<CategoriaTarefa>>([]);
  const [ filtroSelecionado, setFiltroSelecionado ] = useState<TipoFiltro | null>(null);

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
  }

  return (
    <Tela>
      <ScrollView>
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
      </ScrollView>
    </Tela>
  );
}

export default Home;