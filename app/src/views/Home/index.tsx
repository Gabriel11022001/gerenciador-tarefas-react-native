import { ScrollView } from "react-native";
import PessoaLogada from "../../components/PessoaLogada";
import Tela from "../../components/Tela";
import Titulo from "../../components/Titulo";

const Home = () => {

  return (
    <Tela>
      <ScrollView>
        { /** nome e foto da pessoa logada */ }
        <PessoaLogada nomePessoa="Gabriel Rodrigues" fotoPessoa="https://tse2.mm.bing.net/th/id/OIP.CsC304Xa0Ct_yfyqgaEXCAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Titulo titulo="Categorias" />
      </ScrollView>
    </Tela>
  );
}

export default Home;