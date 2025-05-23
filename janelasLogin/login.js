import { Text, SafeAreaView, TextInput, TouchableOpacity, Image, View, Alert} from 'react-native';
import estilo from '../css/style';
import {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import Firebase from '../factory/autenticador';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

   function Acesso(){
     Firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        navigation.navigate('telausuario');
      })
      .catch((error) => {
        alert('Usuario não cadastrado');
      });
 }

  return (
    <SafeAreaView style={estilo.container}>
    <Image style={estilo.img_login} source={require('../img/mascotesemFundo.png')}/>
    <Text style={estilo.texto}>Login</Text>

    <Text style={estilo.paragraph}>Nome de usuário ou email:</Text>
    <TextInput onChangeText={setEmail} value={email} style={estilo.input}placeholder="email@gmail.com"/>
    <Text style={estilo.paragraph}>Senha:</Text>
    <TextInput onChangeText={setSenha} value={senha} style={estilo.input}placeholder="Digite sua Senha" secureTextEntry={!showPassword}/>
         <TouchableOpacity
          style={estilo.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={27}
            color="#000"
          />
        </TouchableOpacity>
        
    <View style={estilo.links}>
      <View>
      <TouchableOpacity
            onPress={() => navigation.navigate('Esqueceusenha')}>
            <Text style={estilo.link}>Esqueci minha senha</Text>
          </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastrousuario')}>
            <Text style={estilo.link}>Não possuo cadastro</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('telausuario')}>
        <Text style={estilo.botaoLogin}>Login</Text>  
      </TouchableOpacity>
    </View>
    </SafeAreaView> 
  );
}
