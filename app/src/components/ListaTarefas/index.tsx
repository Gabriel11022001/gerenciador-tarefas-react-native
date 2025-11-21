import { FlatList } from "react-native";
import { Tarefa } from "../../views/Home";
import TarefaItem from "../TarefaItem";

interface ListaTarefasProps {

  tarefas: Array<Tarefa>;
  onVisualizar: (idTarefaVisualizar: number) => void;

}

// componente que representa a lista de tarefas
const ListaTarefas = ({ tarefas, onVisualizar }: ListaTarefasProps) => {

  return (
    <FlatList
      data={ tarefas }
      renderItem={ ({ item }) => {

        return <TarefaItem tarefa={ item } onVisualizar={ () =>{
          onVisualizar(item.id);
        } } />
      } }
      keyExtractor={ tarefa => tarefa.id } />
  );
}

export default ListaTarefas;