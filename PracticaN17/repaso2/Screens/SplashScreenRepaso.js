import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreenRepaso() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/splash-book.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.texto}>Repaso 2</Text>
        <Text style={styles.subtitulo}>Gestión de libros y catálogo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071423',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    backgroundColor: '#10253b',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 8,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  texto: {
    fontSize: 24,
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#9fb3c8',
    textAlign: 'center',
  },
});
