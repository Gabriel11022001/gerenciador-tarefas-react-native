import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 20
  },
  opcaoFiltroSemSelecionar: {
    width: "30%",
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "blue",
    borderBottomWidth: 3,
    borderStyle: "solid"
  },
  opcaoFiltroSelecionado: {
    width: "30%",
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textoFiltroSelecionado: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 16
  },
  textoFiltroSemSelecionar: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles;