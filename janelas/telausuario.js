
import {NavigationContainer} from 
'@react-navigation/native';

import{createBottomTabNavigator}
from '@react-navigation/bottom-tabs';

import{MaterialCommunityIcons}
from '@expo/vector-icons';
import estilo from '../css/style';

import Ranking from './Ranking';
import Usuario from './usuario';
import Conquistas from './Conquistas';
import Levels from './levels';
import Aprendizado from './Aprendizagem';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    
      <Tab.Navigator
      initialRouteName="Ranking"
        tabBarOptions={{activeTintColor:'#f00'}}>
      <Tab.Screen name="Ranking"
        component={Ranking}/>
      <Tab.Screen name="Usuario" 
        component={Usuario}/>
      <Tab.Screen name="Conquistas"
        component={Conquistas}/>
      <Tab.Screen name="Levels" 
        component={Levels}/>
        <Tab.Screen name="Aprendizado" 
        component={Aprendizado}/>

      </Tab.Navigator>

  );
}
