//zona 1 importación de archivos
import { StatusBar } from 'expo-status-bar';
import {component} from 'react';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1ra from './Componente1ra';
import Practica10 from './Practica10';
import Presable from './Presable';
import SwitchScreen from './SwitchScreen';
import { Componente40 } from './Componente4.0';
import  ComponenteAlerta   from './componenteAlerta';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';


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
        case 'presable':
          return <Presable />;
        case 'switch':
          return <SwitchScreen />;
        case 'Componente40':
          return <Componente40 />;
        case 'componenteAlerta':
          return <ComponenteAlerta />;
        case 'flatlist':
          return <FlatListScreen />;
        case 'sectionlist':
          return <SectionListScreen />;
       case 'menu': 
        default:

         return (
          <View>
             <Text>Menú de prácticas</Text>
                <Button title='Practica Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
                <Button title="Practica 10" onPress={()=>setScreen('practica10')}/>
                <Button title='Practica Componente 1ra' onPress={()=>setScreen('componente1ra')}></Button>
                <Button title="Practica Pressable" onPress={()=>setScreen('presable')}/>
                <Button title="Practica Switch" onPress={()=>setScreen('switch')}/>
                <Button title="Practica TextInput" onPress={()=>setScreen('Componente40')}/>
                <Button title="Practica Alert" onPress={()=>setScreen('componenteAlerta')}/>
                <Button title="Practica FlatList" onPress={()=>setScreen('flatlist')}/>
                <Button title="Practica SectionList" onPress={()=>setScreen('sectionlist')}/>









          </View>
         );
     
  return (
       
    <View>
        <Text>1ra práctica de componentes nativos</Text>
    </View>
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
