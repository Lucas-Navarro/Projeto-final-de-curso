import { Text, SafeAreaView, TextInput, TouchableOpacity, Image, View, Alert} from 'react-native';
import estilo from '../css/style';
import {useState} from 'react';
import Firebase from '../factory/autenticador';

export default function EsqueceuSenha({ navigation }) {
  const [email, setEmail] = useState('');

  async function MudarSenha(){
    if(!email.trim()){
    alert('É necessário inserir um e-mail válido');
    return;
    }
    else {
      Firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Foi enviado um email para: ' + email + 'Verifique sua caixa de entrada');
        navigation.navigate('Login');
      })
      .catch((error) => {
        alert('Alguma operação deu errado, tente novamente ou precione voltar', error);
      });
    }
 }

  return (
    <SafeAreaView style={estilo.container}>
    <Image style={estilo.img_login} source={require('../img/mascotesemFundo.png')}/>
    <Text style={estilo.texto}>Redefinir senha</Text>
    <Text style={estilo.paragraph}>Insira seu e-mail para verificação:</Text>
    <TextInput onChangeText={setEmail} value={email} style={estilo.input}placeholder="email@gmail.com"
    keyboardType="email-address" autoCapitalize='none' autoComplete='email'/>
    <TouchableOpacity onPress={MudarSenha} >
      <Text style={estilo.botaoCad}>Enviar</Text>  
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={estilo.link2}>Voltar</Text>
    </TouchableOpacity>
    </SafeAreaView> 
  );
}