import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginEnd: 5,
    marginTop: 5,
    marginBottom: 5,
    marginStart: 5,
    elevation: 3
  },
  cardTopo: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  nomeCategoria: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 900,
    marginTop: 10,
    marginBottom: 10
  },
  quantidadeTarefas: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500
  },
  containerIcone: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cardBaixo: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  cardBaixoConteudo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  foto: {
    width: 38,
    height: 38,
    borderRadius: 100,
    marginEnd: 3
  },
  containerFoto: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  percentualPerticipacao: {
    fontSize: 20,
    fontWeight: 900,
    color: "#000"
  },
  progressoFundo: {
    width: "100%",
    height: 20,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "rgb(189, 195, 199)"
  },
  progresso: {
    borderRadius: 10,
    height: 20
  }
});

export default styles;