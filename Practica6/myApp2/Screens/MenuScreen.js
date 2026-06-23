/* Zona 1: Importaciones de archivos y componentes*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import Practica10 from './Practica10';
import Presable from './Presable';
import SwitchScreen from './SwitchScreen';



/* Zona 2: Main - Componentes  */

export default function App() {
    const [screen,setScreen]= useState('menu');
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'practica10':
            return <Practica10/>;
        case 'presable':
            return <Presable/>;
        case 'switch':
            return <SwitchScreen/>;
        case 'menu':
            default:
                return (
                    <View>
                        <Text>Aqui va la primer practica de componentes nativos</Text>
                        <Button title="Practica tarejtas" onPress={()=>setScreen('tarjetas')}/>
                        <Button title="Practica Componente1" onPress={()=>setScreen('componente1')}/>
                        <Button title="Practica 10" onPress={()=>setScreen('practica10')}/>
                        <Button title="Practica Pressable" onPress={()=>setScreen('presable')}/>
                        <Button title="Practica Switch" onPress={()=>setScreen('switch')}/>
                    </View>
                );
    }
}


/* Zona 3: Estilos y posicionamiento de los componentes*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }
});
