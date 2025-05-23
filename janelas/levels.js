import {Text, View } from 'react-native';
import estilo from '../css/style';

export default function Levels() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Bem-vindo à Tela Levels</Text>
    </View>
  );
}