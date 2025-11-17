import { Text } from "react-native";
import styles from "./styles";

type TituloProps = {

  titulo: string;

}

// componente para representar o título da tela
const Titulo = ({ titulo }: TituloProps) => {

  return <Text style={ styles.titulo }>
    { titulo }
  </Text>
}

export default Titulo;