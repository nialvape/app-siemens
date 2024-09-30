import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';

export default function Consumo() {
  const [datos, setDatos] = useState({
    linea: 'A',
    consumoActual: 0,  // en litros
    consumoAnterior: 0, // en litros
    incremento: 0, // porcentaje de cambio
  });
  const [loading, setLoading] = useState(true); // Estado de carga
  const apiUrl = 'http://localhost:3001/buildings/1/lines/A'; // Cambia esto según tu endpoint

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Suponiendo que la API devuelve un objeto con las propiedades requeridas
        setDatos({
          linea: data.line, // Asegúrate de que la API devuelva el nombre de la línea
          consumoActual: data.consumptionCurrent,
          consumoAnterior: data.consumptionPrevious,
          incremento: 0, // Se calculará más adelante
        });
      } catch (error) {
        console.error('Error al obtener datos de consumo:', error);
      } finally {
        setLoading(false); // Cambiar estado de carga
      }
    };

    fetchDatos();
  }, [apiUrl]);

  useEffect(() => {
    // Cálculo del porcentaje de incremento o decremento
    if (datos.consumoAnterior > 0) {
      const incrementoPorcentaje = ((datos.consumoActual - datos.consumoAnterior) / datos.consumoAnterior) * 100;
      setDatos((prevDatos) => ({
        ...prevDatos,
        incremento: incrementoPorcentaje.toFixed(2),
      }));
    }
  }, [datos.consumoActual, datos.consumoAnterior]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4E8098" />
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo de Agua - Línea {datos.linea}</Text>
      <Text>Consumo del mes actual: {datos.consumoActual} litros</Text>
      <Text>Consumo del mes anterior: {datos.consumoAnterior} litros</Text>
      <Text>
        {datos.incremento >= 0
          ? `Incremento en consumo: +${datos.incremento}%`
          : `Decremento en consumo: ${datos.incremento}%`}
      </Text>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Volver al Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4E8098',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
