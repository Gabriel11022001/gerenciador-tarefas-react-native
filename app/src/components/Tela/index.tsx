import { SafeAreaView } from "react-native-safe-area-context";

const Tela = ({ children }: any) => {

  return (
    <SafeAreaView style={ { flex: 1, padding: 20, backgroundColor: "#f1f2f6" } }>
      { children }
    </SafeAreaView>
  );
}

export default Tela;