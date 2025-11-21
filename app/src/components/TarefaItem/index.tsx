import { Text, TouchableOpacity, View } from "react-native";
import { Status, Tarefa } from "../../views/Home";
import styles from "./styles";

interface TarefaItemProps {

  tarefa: Tarefa;
  onVisualizar: () => void;

}

// componente que representa o item da lista de tarefas
const TarefaItem = ({ tarefa, onVisualizar }: TarefaItemProps) => {
  
  return (
    <TouchableOpacity
      style={ [ styles.container, tarefa.status == Status.andamento ? styles.tarefaAndamento : styles.tarefaConcluida ] }
      onPress={ () => {
        // visulizar tarefa
        onVisualizar();
      } }>
      <Text style={ tarefa.status == Status.andamento ? styles.titulo : styles.tituloConcluido }>{ tarefa.titulo }</Text>
      <Text style={ tarefa.status == Status.andamento ? styles.descricao : styles.descricaoConcluido }>{ tarefa.descricao }</Text>
      <View style={ styles.linhaSeparadora } />
      <View style={ styles.containerBaixo }>
        <View style={ styles.containerDataVencimento }>
          <Text style={ styles.textoVencimento }>Vencimento</Text>
          <Text style={ styles.dataVencimento }>{ tarefa.dataLimiteConclusao }</Text>
        </View>
        <Text style={ styles.status }>{ tarefa.status === Status.andamento ? "Andamento" : "Concluído" }</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TarefaItem;