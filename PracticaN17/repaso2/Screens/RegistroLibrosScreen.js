import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function RegistroLibrosScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const mostrarAlerta = (tituloAlerta, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${tituloAlerta}\n\n${mensaje}`);
      return;
    }

    Alert.alert(tituloAlerta, mensaje);
  };

  const limpiarFormulario = () => {
    setTitulo('');
    setAutor('');
    setGenero('');
  };

  const agregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      mostrarAlerta('Alerta', 'Todos los campos son obligatorios.');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros((listaActual) => [nuevoLibro, ...listaActual]);
      limpiarFormulario();
      setGuardando(false);
      mostrarAlerta('Éxito', 'Libro guardado correctamente.');
    }, 4000);
  };

  const renderLibro = ({ item }) => (
    <View style={styles.tarjetaLibro}>
      <Text style={styles.nombreLibro}>{item.titulo}</Text>
      <Text style={styles.detalleLibro}>Autor: {item.autor}</Text>
      <Text style={styles.detalleLibro}>Género: {item.genero}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../assets/bg-libros.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}
        >
          <View style={styles.encabezado}>
            <Text style={styles.titulo}>Catálogo de Libros</Text>
            <Text style={styles.subtitulo}>Agrega tus favoritos y mantenlos organizados</Text>
          </View>

          <View style={styles.formCard}>
            <TextInput
              style={styles.input}
              placeholder="Título del libro"
              placeholderTextColor="#7b8794"
              value={titulo}
              onChangeText={setTitulo}
              editable={!guardando}
            />

            <TextInput
              style={styles.input}
              placeholder="Autor"
              placeholderTextColor="#7b8794"
              value={autor}
              onChangeText={setAutor}
              editable={!guardando}
            />

            <TextInput
              style={styles.input}
              placeholder="Género"
              placeholderTextColor="#7b8794"
              value={genero}
              onChangeText={setGenero}
              editable={!guardando}
            />

            <Pressable
              onPress={agregarLibro}
              disabled={guardando}
              style={({ pressed }) => [
                styles.boton,
                pressed && !guardando ? styles.botonPresionado : null,
                guardando ? styles.botonDesactivado : null,
              ]}
            >
              <Text style={styles.textoBoton}>
                {guardando ? 'Guardando...' : 'Agregar Libro'}
              </Text>
            </Pressable>

            {guardando && (
              <View style={styles.cargando}>
                <ActivityIndicator size="large" color="#2563eb" />
                <Text style={styles.textoCargando}>Guardando libro...</Text>
              </View>
            )}
          </View>

          <Text style={styles.total}>Total de libros: {libros.length}</Text>

          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={renderLibro}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.lista}
            ListEmptyComponent={
              !guardando ? (
                <Text style={styles.listaVacia}>Aún no hay libros registrados.</Text>
              ) : null
            }
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(7, 20, 35, 0.62)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  encabezado: {
    marginBottom: 16,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subtitulo: {
    color: 'rgba(255,255,255,0.84)',
    fontSize: 14,
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    backgroundColor: '#f5f7fb',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 12,
    fontSize: 15,
    color: '#18212f',
    borderWidth: 1,
    borderColor: '#dce2ee',
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  botonPresionado: {
    backgroundColor: '#1d4ed8',
    transform: [{ scale: 0.98 }],
  },
  botonDesactivado: {
    backgroundColor: '#a8a8a8',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  cargando: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 4,
  },
  textoCargando: {
    color: '#1f2937',
    fontWeight: '600',
    marginTop: 8,
  },
  total: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
    alignSelf: 'flex-end',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  lista: {
    paddingBottom: 40,
  },
  listaVacia: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 14,
    padding: 16,
    color: '#334155',
    textAlign: 'center',
  },
  tarjetaLibro: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  nombreLibro: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  detalleLibro: {
    color: '#4b5563',
    fontSize: 14,
  },
});
