import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BotaoMarcarConcluida from "../../components/BotaoMarcarConcluida";
import ListaMembrosEquipe from "../../components/ListaMembrosEquipe";
import Tela from "../../components/Tela";
import Titulo from "../../components/Titulo";
import { MembroEquipeTarefa, Status, Tarefa } from "../Home";
import styles from "./styles";

// tela que representa a tela de detalhes de tarefa
const DetalhesTarefa = ({ navigation, route }: any) => {

  const [ tarefa, setTarefa ] = useState<Tarefa | null>(null);

  // buscar tarefa pelo id
  const buscarDadosTarefa = async () => {

    try {
      
      if (route.params.idTarefaVisualizar && route.params.tarefas) {
        const tarefaVisualizar: Tarefa = route.params.tarefas.find(t => t.id == route.params.idTarefaVisualizar);
        
        setTarefa(tarefaVisualizar);
      }

    } catch (e) {
      // apresentar um alerta de erro
      console.log("Erro visualizar tarefa: " + e);
    }

  }

  useEffect(() => {
    // buscar tarefa pelo id
    buscarDadosTarefa();
  }, []);

  // obter os membros da tarefa
  const getMembros = (tarefa: Tarefa | null): Array<{ nome: string, foto: string, email: string }> => {

    if (!tarefa) {

      return [];
    }

    if (tarefa.equipeTarefa && tarefa.equipeTarefa.membros) {

      return tarefa.equipeTarefa.membros.map((mb: MembroEquipeTarefa, indice: number) => {

        return {
          nome: mb.nomeMembro,
          foto: mb.foto,
          email: `email${ indice }@teste.com`
        };
      });
    }

    return [];
  }

  // marcar tarefa como concluída
  async function marcarTarefaConcluido() {

    try {

    } catch (e) {
      console.error("Erro ao tentar-se marcar a tarefa como concluída: " + e);
      // apresentar um alerta de erro para o usuário
    }

  }

  return (
    <Tela>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <TouchableOpacity
          style={ styles.botaoRetornar }
          onPress={ () => {
            // retornar
            navigation.goBack();
          } }>
          <MaterialIcons name="arrow-back" color="#000" size={ 40 } />
        </TouchableOpacity>
        { /** título da tarefa */ }
        <Text style={ styles.tituloTelaDetalhes }>{ tarefa?.titulo }</Text>
        <Text style={ styles.descricaoTarefa }>{ tarefa?.descricao }</Text>
        <View style={ styles.separador } />
        <View style={ styles.containerStatus }>
          <Text style={ styles.textoStatus }>Status</Text>
          <Text style={ styles.status }>{ tarefa?.status == Status.andamento ? "Andamento" : "Concluído" }</Text>
        </View>
        <Text style={ styles.dataLimiteConclusao }>{ tarefa?.dataLimiteConclusao }</Text>
        <Titulo titulo="Membros do time" />
        <ListaMembrosEquipe membros={ getMembros(tarefa) } />
        { tarefa?.status != Status.concluido && <BotaoMarcarConcluida marcarConcluidaClick={ () => {
          // marcar a tarefa como concluído
        } } /> }
      </ScrollView>
    </Tela>
  );
}

export default DetalhesTarefa;