import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './janelasLogin/login';
import EsqueceuSenha from './janelasLogin/resetsenha';
import CadastroUser from './janelasLogin/cadastrouser';
import Splashtela from './janelasLogin/Splash';
import Tlusuario from './janelas/telausuario';
import Aprendizado from './janelas/Aprendizagem';
import Conquistas from './janelas/Conquistas';
import Levels from './janelas/levels';
import Ranking from './janelas/Ranking';
import Usuario from './janelas/usuario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splashtela} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Esqueceusenha" component={EsqueceuSenha} />
        <Stack.Screen name="Cadastrousuario" component={CadastroUser} />
        <Stack.Screen name="telausuario" component={Tlusuario} />
        <Stack.Screen name="Aprendizagem" component={Aprendizado} />
        <Stack.Screen name="Conquistas" component={Conquistas} />
        <Stack.Screen name="levels" component={Levels} />
        <Stack.Screen name="Ranking" component={Ranking} />
        <Stack.Screen name="usuario" component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
