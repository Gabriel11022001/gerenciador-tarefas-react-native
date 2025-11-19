import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export enum TipoFiltro {

  hoje,
  todos,
  completados

}

interface FiltroTarefasProps {

  nomesFiltros: Array<TipoFiltro>;
  filtrar: (tipoFiltro: TipoFiltro) => void;
  selecionado: TipoFiltro;

}

const FiltroTarefas = ({ nomesFiltros, filtrar, selecionado }: FiltroTarefasProps) => {

  const getNomeTipoFiltro = (tipoFiltro: TipoFiltro): string => {

    if (tipoFiltro == TipoFiltro.hoje) {

      return "Hoje";
    }

    if (tipoFiltro == TipoFiltro.todos) {

      return "Todos";
    }

    return "Completos";
  }

  return (
    <View style={ styles.container }>
      { nomesFiltros.map((tipoFiltro: TipoFiltro) => {

        return <TouchableOpacity 
          style={ selecionado == tipoFiltro ? styles.opcaoFiltroSemSelecionar : styles.opcaoFiltroSelecionado }
          onPress={ () => {
            filtrar(tipoFiltro);
          } }>
            <Text style={ selecionado == tipoFiltro ? styles.textoFiltroSelecionado : styles.textoFiltroSemSelecionar }>{ getNomeTipoFiltro(tipoFiltro) }</Text>
        </TouchableOpacity>
      }) }
    </View>
  );
}

export default FiltroTarefas;