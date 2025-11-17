import { Image, Text, View } from "react-native";
import styles from "./styles";

type PessoaLogadaProps = {

  nomePessoa: string;
  fotoPessoa: string;

}

// componente para apresentar a foto e nome da pessoa logada
const PessoaLogada = (pessoaLogadaProps: PessoaLogadaProps) => {

  return (
    <View style={ styles.container }>
      <Image source={ {
          uri: pessoaLogadaProps.fotoPessoa
        } }
        style={ styles.foto } />
      <View>
        <Text style={ styles.nomePessoa }>{ pessoaLogadaProps.nomePessoa }</Text>
        <Text style={ styles.sejaBemVindo }>Seja bem vindo { pessoaLogadaProps.nomePessoa }</Text>
      </View>
    </View>
  );
}

export default PessoaLogada;