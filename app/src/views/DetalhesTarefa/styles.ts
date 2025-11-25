import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  botaoRetornar: {
    marginTop: 50
  },
  tituloTelaDetalhes: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20
  },
  descricaoTarefa: {
    color: "#000",
    marginTop: 10,
    fontSize: 20
  },
  separador: {
    width: "100%",
    backgroundColor: "rgb(189, 195, 199)",
    marginTop: 20,
    height: 1,
    elevation: 1,
    opacity: 0.9
  },
  containerStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between"
  },
  textoStatus: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  status: {
    color: "#000",
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "rgb(189, 195, 199)",
    opacity: 0.7,
    fontSize: 16,
    fontWeight: "bold"
  },
  dataLimiteConclusao: {
    color: "blue",
    fontWeight: 900,
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20
  }
});

export default styles;