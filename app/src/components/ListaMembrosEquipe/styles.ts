import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#ffff",
    borderColor: "rgb(189, 195, 199)",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 6,
    marginBottom: 6,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center"
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginEnd: 10
  },
  nomeMembro: {
    color: "#000",
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 10
  },
  emailMembro: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles;