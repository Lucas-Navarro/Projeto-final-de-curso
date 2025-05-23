import {Text, View } from 'react-native';
import estilo from '../css/style';

export default function Ranking() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Bem-vindo à Tela Ranking</Text>
    </View>
  );
}