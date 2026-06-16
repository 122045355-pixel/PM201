//zona 1 importación de archivos
import { StatusBar } from 'expo-status-bar';
import {component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {Perfil} from '../components/Perfil';

//zona 2 main components
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetaverde} nombre='Emiliano Figueroa' carrera='ISC' materia='Programación Movil' cuatri='9no'/>
  
      <Perfil style={styles.tarjetaroja} nombre='ROberto' carrera='Si' materia='Programación Movil' cuatri='8vo'/>

      <Perfil style={styles.tarjetaverde} nombre='Emiliano Figueroa2' carrera='ISC' materia='Programación Movil' cuatri='9no'/>

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
    justifyContent: 'space-evenly',
    flexDirection:'row',
  },
  tarjetaverde:{backgroundColor:'green',},
  tarjetaroja:{backgroundColor:'red',},
});
