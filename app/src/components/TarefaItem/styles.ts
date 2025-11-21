import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "rgb(189, 195, 199)",
    borderWidth: 1,
    borderStyle: "solid"
  },
  tarefaAndamento: {
    backgroundColor: "#fff"
  },
  tarefaConcluida: {
    backgroundColor: "#f1f2f6"
  },
  titulo: {
    color: "#000",
    fontWeight: 900,
    fontSize: 20
  },
  tituloConcluido: {
    color: "#000",
    fontWeight: 900,
    fontSize: 20,
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: "#000"
  },
  descricao: {
    color: "#000",
    fontSize: 16,
    marginTop: 5
  },
  descricaoConcluido: {
    color: "#000",
    fontSize: 16,
    marginTop: 5,
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: "#000"
  },
  linhaSeparadora: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    backgroundColor: "rgb(189, 195, 199)"
  },
  containerBaixo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  containerDataVencimento: {
    flexDirection: "row",
    alignItems: "center"
  },
  textoVencimento: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginEnd: 10
  },
  dataVencimento: {
    color: "blue",
    fontSize: 16
  },
  status: {
    color: "#000",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fafafa",
    textAlign: "center",
    fontSize: 20,
    borderColor: "#f1f1f1",
    borderStyle: "solid",
    borderWidth: 1,
    opacity: 0.7
  }
});

export default styles;