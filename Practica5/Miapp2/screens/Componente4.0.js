import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export const Componente40 = () => {
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOLA RN</Text>
      <Text style={styles.subtitle}>ejemplo de varios textinput con state</Text>
      <TextInput
        placeholder="Escribe algo..."
        value={texto}
        onChangeText={setTexto}
        maxLength={20}
        autoCapitalize="words"
        style={styles.input}
      />
      <TextInput
        placeholder="Escribe un numero..."
        value={numero}
        onChangeText={(text) => setNumero(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        maxLength={10}
        style={styles.input}
      />
      <TextInput
        placeholder="Escribe tu correo..."
        value={correo}
        onChangeText={setCorreo}
        maxLength={50}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Escribe tu contraseña..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        maxLength={20}
        style={styles.input}
      />
      <Text style={styles.subtitle}>valores almacenados:</Text>
      <Text style={styles.subtitle}>Texto: {texto}</Text>
      <Text style={styles.subtitle}>Numero: {numero}</Text>
      <Text style={styles.subtitle}>Correo: {correo}</Text>
      <Text style={styles.subtitle}>Password: {password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 12,
    borderRadius: 4,
  },
});
