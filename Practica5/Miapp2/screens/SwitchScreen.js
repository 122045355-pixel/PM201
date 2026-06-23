import React,{useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function SwitchScreen() {
    const [Encendido,setEncendido] = useState(false);

    return(
        <View style={[styles.container, {backgroundColor: Encendido ? '#222' : '#fff'}]}>
            <Text style={[{color: Encendido ? '#fff' : '#222'}]}>
                {
                Encendido ? 'Modo ooscuro activado' : 'Modo oscuro desactivado'}
            </Text>
            <Switch
                value={Encendido}
                onValueChange={setEncendido}
                trackColor={{false:'#767577', true:'#81b0ff'}}
                thumbColor={Encendido ? '#2196F3' : '#f4f3f4'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        }});