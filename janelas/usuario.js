import {Text, View, SafeAreaView, Image } from 'react-native';
import telas from '../css/style';

export default function Usuario() {
  return (
    <SafeAreaView style={telas.container}>
      <Image style={telas.img_login} source={require('../img/cara.png')}/>
    </SafeAreaView>
  );
}