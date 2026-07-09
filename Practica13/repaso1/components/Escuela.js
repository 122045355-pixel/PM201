import { View, Text, Image, StyleSheet } from 'react-native';

export const Escuela = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={require('../assets/OIP.jpg')} />
      <Text style={styles.titulo}>Inscripción a Evento de la universidad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
},
  titulo: {
    fontSize: 30,
    color: 'blue',
  },
  imagen: {
    width: 100,
    height: 100,
  },
});