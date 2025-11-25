import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";

type ListaMembrosEquipeProps = {

  membros: Array<{ nome: string, foto: string, email: string }>;

}

// componente que representa o membro da equipe da tarefa
const ListaMembrosEquipe = ({ membros }: ListaMembrosEquipeProps) => {

  return (
    <FlatList
      data={ membros }
      renderItem={ ({ item }) => {

        return <View style={ styles.card }>
          <Image source={ { uri: item.foto } } style={ styles.foto } />
          <View>
            <Text style={ styles.nomeMembro }>{ item.nome }</Text>
            <Text style={ styles.emailMembro }>{ item.email }</Text>
          </View>
        </View>
      } }
      keyExtractor={ membroEquipe => membroEquipe.email } />
  );
}

export default ListaMembrosEquipe;