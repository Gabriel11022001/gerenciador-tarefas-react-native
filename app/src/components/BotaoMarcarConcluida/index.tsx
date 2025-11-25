import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface BotaoMarcarConcluidaProps {

  marcarConcluidaClick: () => void;

}

const BotaoMarcarConcluida = (props: BotaoMarcarConcluidaProps) => {

  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ () => {
          props.marcarConcluidaClick
        } } style={ styles.botao } >
        <Text style={ styles.textoBotao }>Marcar como concluído</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: "80%",
    padding: 20,
    borderRadius: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase"
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 100
  }
});

export default BotaoMarcarConcluida;