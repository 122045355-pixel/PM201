//zona 1 importación de archivos
import { StatusBar } from 'expo-status-bar';
import {component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

//zona 2 main components
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil nombre='Emiliano Figueroa' carrera='ISC' materia='Programación Movil' cuatri='9no'/>
      <Perfil nombre='ROberto' carrera='Si' materia='Programación Movil' cuatri='8vo'/>

      <StatusBar style="auto" />
    </View>
  );
}
//zona 3 styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
