import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type CategoriaTarefaProps = {

  categoriaNome: string;
  quantidadeTarefasCategoria: number;
  percentualTarefasConcluidas: number;
  fotosUsuariosCategoriasTarefas: Array<string>;
  cor: string;
  onClickVisualizarTarefasCategoria: () => void;

}

// componente que representa a categoria de uma tarefa
const CategoriaTarefa = ({
  categoriaNome,
  quantidadeTarefasCategoria,
  percentualTarefasConcluidas,
  fotosUsuariosCategoriasTarefas,
  cor,
  onClickVisualizarTarefasCategoria
}: CategoriaTarefaProps) => {

  return (
    <TouchableOpacity style={ styles.container } onPress={ onClickVisualizarTarefasCategoria } >
      <View style={ [ styles.cardTopo, { backgroundColor: cor } ] }>
        <View style={ [ styles.containerIcone, {
          backgroundColor: "transparent",
          opacity: 0.5
        } ] }>
          <MaterialIcons name="category" color="#fff" size={ 30 } />
        </View>
        <Text style={ styles.nomeCategoria }>{ categoriaNome }</Text>
        <Text style={ styles.quantidadeTarefas }>{ quantidadeTarefasCategoria.toString() + " Tarefas" }</Text>
      </View>
      <View style={ styles.cardBaixo }>
        <View style={ styles.cardBaixoConteudo }>
          <View style={ styles.containerFoto }>
            { fotosUsuariosCategoriasTarefas.map((foto: string) => {

              return <Image style={ styles.foto } source={ { uri: foto.trim() } } />
            }) }
          </View>
          <Text style={ styles.percentualPerticipacao }>{ `${ percentualTarefasConcluidas }%` }</Text>
        </View>
        <View style={ styles.progressoFundo }>
          <View style={ [ styles.progresso, { backgroundColor: cor, width: `${ percentualTarefasConcluidas }%` } ] } />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CategoriaTarefa;