import { Text, SafeAreaView, TextInput, TouchableOpacity, Image, View} from 'react-native';
import estilo from '../css/style';
import {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {auth, conexao} from '../factory/firebase';

export default function CadastroUser({ navigation }) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  function inserirUsuario(){
    auth
    .createUserWithEmailAndPassword(email, senha)
    .then(() => {
      conexao.collection('tbusuario').add({
        nome: user,
        email: email,
        senha: senha
      });
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      setUser('');
      setEmail('');
      setSenha('');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email já existente, tente outro');
      } else if (error.code === 'auth/invalid-email') {
        alert('Email inválido, inserido incorretamente');
      } else {
        alert(error.message);
       }
    });
  }


  return (
    <SafeAreaView style={estilo.container}>
    <Image style={estilo.img_login} source={require('../img/cara.png')}/>
    <Text style={estilo.texto}>Cadastro de usuário</Text>
    <Text style={estilo.paragraph}>Nome de usuário:</Text>
    <TextInput onChangeText={setUser} value={user} style={estilo.input}placeholder="Nome de usuário"/>
    <Text style={estilo.paragraph}>E-mail:</Text>
    <TextInput onChangeText={setEmail} value={email} style={estilo.input}placeholder="email@gmail.com"/>
    <Text style={estilo.paragraph}>Senha:</Text>
    <TextInput onChangeText={setSenha} value={senha} style={estilo.input}placeholder="*********" secureTextEntry={!showPassword}/>
             <TouchableOpacity
          style={estilo.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={27}
            color="#000"
          />
        </TouchableOpacity>
    <Text style={estilo.paragraph}>Digite a senha novamente:</Text>
    <TextInput style={estilo.input}placeholder="*********" secureTextEntry={!showPassword}/>
  
    <View>
    <TouchableOpacity onPress={() => {inserirUsuario();}}>
      <Text style={estilo.botaoCad}>Cadastrar</Text>  
    </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={estilo.link2}>Voltar</Text>
    </TouchableOpacity>
    </SafeAreaView> 
  );
}
