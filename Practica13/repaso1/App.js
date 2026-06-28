//zona 1 importación de archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button, SafeAreaView,ScrollView} from 'react-native';
import {Escuela} from './components/Escuela';


//zona 2 main components
export default function App() {
  return (
    <View style={styles.container}>
    <Escuela />
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <Text> Como parte del mundial se les invita a todos los cardenales al concurso de mejores botargas de la upq, los ganadores de este concurso serán premiados dependiendo del lugar en el que hayan teminado: Para el primer lugar tenemos una pc gamer con 16GB de RAM y un procesador i7. para el segundo lugar tenemos una caja con 10 plumas negras, y para el tercer lugar dos bolsas de frijoles isadora.Los ganadores serán escogidos por los profesores de la universidad y se les notificará a los ganadores por correo electrónico. La fecha límite para inscribirse es el 28 de julio del 2026, así que apresúrate y no te quedes fuera de este gran concurso.
        </Text>
         <Button title="inscribirse" onPress={()=>setScreen(<inscripcion />)}/>
      </ScrollView>
    </SafeAreaView>
    </View>
  );

}
//zona 3 styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
  },
  SafeAreaView:{
    flex:1,
    backgroundColor:'#83a5cd',
    marginTop:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,
    overflow:'hidden'
  }
});
