//zona 1 importación de archivos
import { StatusBar } from 'expo-status-bar';
import {component} from 'react';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1ra from './Componente1ra';
import Practica10 from './Practica10';

//zona 2 main components
export default function App() {
     const [screen, setScreen] = useState('menu');
     switch(screen){
       case 'tarjetas':
         return <TarjetasScreen />;
       case 'componente1ra':
         return <Componente1ra />;
       case 'practica10':
         return <Practica10 />;
       case 'menu': 
        default:

         return (
          <view>
             <Text>Menú de prácticas</Text>
                <Button title='Practica Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
                <Button title="Practica 10" onPress={()=>setScreen('practica10')}/>
                <Button title='Practica Componente 1ra' onPress={()=>setScreen('componente1ra')}></Button>







          </view>
         );
     
  return (
       
    <view>
        <Text>1ra práctica de componentes nativos</Text>
    </view>
  );//return

 }//switch

}//función

//zona 3 styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row',
  },
});
