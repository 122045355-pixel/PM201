//zona 1 importación de archivos
import { StatusBar } from 'expo-status-bar';
import {component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';


//zona 2 main components
export default function App() {
  return (
    <view>
        <Text>1ra práctica de componentes nativos</Text>
    </view>
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
});
