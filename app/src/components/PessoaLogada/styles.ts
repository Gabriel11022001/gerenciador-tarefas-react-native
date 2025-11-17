import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginEnd: 10
  },
  nomePessoa: {
    color: "#000",
    fontWeight: 900,
    fontSize: 18
  },
  sejaBemVindo: {
    color: "#57606f",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold"
  }
});

export default styles;