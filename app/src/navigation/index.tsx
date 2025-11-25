import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalhesTarefa from '../views/DetalhesTarefa';
import Home from '../views/Home';

const Navigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        { /** tela home */ }
        <Stack.Screen name="home" component={ Home } options={ { headerShown: false } } />
        <Stack.Screen name="datalhesTarefa" component={ DetalhesTarefa } options={ { headerShown: false } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;