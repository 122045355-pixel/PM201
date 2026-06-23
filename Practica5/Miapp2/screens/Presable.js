import React, { useState } from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';

export default function Presable() {
    const [contador, setCount] = useState(0);
    const [mensaje,setMEnsaje] = useState('');

    return (
        <View style={styles.container}>
            <Text> Componente Pressable</Text>
            <Pressable
                onPress={() => {setCount(contador + 1);}}
                onLongPress={() => {setCount(0);setMEnsaje('contador reiniciado');}}
                onPressIn={() => {setMEnsaje('presionando');}}
                onPressOut={() => {setMEnsaje('soltando');}}
                style={({ pressed }) => [styles.button, pressed ? styles.botonpresionado : styles.botonnormal]}>
                <Text style={styles.textoboton}>Presioname</Text>
            </Pressable>
            <Text style={styles.texto}>Contador: {contador}</Text>
            <Text style={styles.texto}>{mensaje}</Text>
            <Text>manten presionado el botón para reiniciar el contador</Text>
        </View>
    );
    }
    const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    boton: {
        padding: 15,
        borderRadius: 10,
        width: 180,
        alignItems: 'center'
    },

    textoBoton: {
        color: 'white',
        fontWeight: 'bold'
    }

});
