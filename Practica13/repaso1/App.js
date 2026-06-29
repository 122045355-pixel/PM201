import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';

import { Escuela } from './components/Escuela';
import Inscripcion from './screens/inscripcion';

export default function App() {

  const [screen, setScreen] = useState('inicio');

  switch (screen) {

    case 'inscripcion':
      return <Inscripcion />;

    case 'inicio':
    default:
      return (
        <View style={styles.container}>
          <Escuela />

          <SafeAreaView style={styles.SafeAreaView}>
            <ScrollView>
              <Text style={styles.titulo}>Información del Evento</Text>

              <Text style={styles.parrafo}>
                Como parte del mundial se les invita a todos los cardenales al concurso de mejores botargas de la upq, los ganadores de este concurso serán premiados dependiendo del lugar en el que hayan teminado: Para el primer lugar tenemos una pc gamer con 16GB de RAM y un procesador i7. para el segundo lugar tenemos una caja con 10 plumas negras, y para el tercer lugar dos bolsas de frijoles isadora. Los ganadores serán escogidos por los profesores de la universidad y se les notificará a los ganadores por correo electrónico. La fecha límite para inscribirse es el 28 de julio del 2026, así que apresúrate y no te quedes fuera de este gran concurso.
              </Text>

              <View style={styles.boton}>
                <Button
                  title="Inscribirse"
                  onPress={() => setScreen('inscripcion')}
                  color="#d32f2f"
                />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f7ff',
    flexDirection: 'column',
  },

  SafeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#0b63d4',
    borderWidth: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0b63d4',
    textAlign: 'center',
    marginBottom: 12,
  },
  parrafo: {
    fontSize: 16,
    color: '#0b2b66',
    lineHeight: 22,
    marginBottom: 14,
  },
  boton: {
    marginTop: 10,
    marginBottom: 18,
  },
});