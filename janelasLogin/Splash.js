import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    },3000); // Reduzi o tempo para 3 segundos
  }, []);

  return (
    <View style={estilo.splash} >
      {/* Adicionei uma imagem de fundo */}
      <View style={estilo.container}>
      <Image style={estilo.mascote} source={require('../img/mascotesemFundo.png')} />
      {/* Adicionei um indicador de carregamento */}
      <ActivityIndicator size="large" color="#ffffff"  />
      </View>
      <Image style={estilo.logo} source={require('../img/skylaLogo.png')} />
    </View>
  );
};
const estilo = StyleSheet.create({
  splash:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#00367A'
  },
  container:{
    marginTop: 200
  },
  mascote:{
    margin: 50,
    borderRadius: 10,
  },
  logo:{
    width: 100,
    height: 100,
  }
});

export default Splash;