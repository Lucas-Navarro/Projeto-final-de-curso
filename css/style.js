import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    fontFamily: 'Poppins, sans-serif',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00367A',
    padding: 8,
    textAlign: 'center',
  },
  img_login:{
    display: 'block',
    marginHorizontal: 100,
    width:180,
    height: 180,
    alignItems: 'center',
  },
  texto:{
    textTransform: 'uppercase',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  },
  paragraph:{
    paddingHorizontal:10,
    color: '#ffffff',
  },
  link:{
    paddingHorizontal:10,
    color: '#ffffff',
    textDecoration: 'underline',
  },
  link2:{
    paddingHorizontal:10,
    color: '#ffffff',
    textAlign: 'center',
    textDecoration: 'underline',
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    border: '1px solid #000',
  },
  botaoLogin:{
    fontWeight: 'bold',
    marginLeft: 75,
    padding: 10,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 10,
    backgroundColor: '#FD4296',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  botaoCad:{
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FD4296',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  links:{
    alignItems: 'center',
    flexDirection: 'row'
  },
  eyeIcon: {
    position: 'fixed',
    top: 531,
    left: 325,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

export default estilo;