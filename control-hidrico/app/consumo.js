import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function Consumo() {
  const [datos, setDatos] = useState({
    linea: 'A',
    consumoActual: 2500,
    consumoAnterior: 2200,
    incremento: 0,
  });

  useEffect(() => {
    const incrementoPorcentaje = ((datos.consumoActual - datos.consumoAnterior) / datos.consumoAnterior) * 100;
    setDatos((prevDatos) => ({
      ...prevDatos,
      incremento: incrementoPorcentaje.toFixed(2),
    }));
  }, [datos.consumoActual, datos.consumoAnterior]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/building/1/A');
        if (!response.ok) {
          throw new Error('Error al obtener datos de consumo');
        }
        const data = await response.json();
        setDatos({
          linea: data.line,
          consumoActual: data.consumptionCurrent,
          consumoAnterior: data.consumptionPrevious,
          incremento: ((data.consumptionCurrent - data.consumptionPrevious) / data.consumptionPrevious) * 100,
        });
      } catch (error) {
        Alert.alert('Error', `Error al obtener datos de consumo: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  const getColorForIncrement = () => {
    if (datos.incremento > 0) {
      return styles.incrementNegative;
    } else if (datos.incremento < 0) {
      return styles.incrementPositive;
    } else {
      return styles.incrementNeutral;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo de Agua - Línea {datos.linea}</Text>
      <Text style={styles.text}>Consumo del mes actual: {datos.consumoActual} litros</Text>
      <Text style={styles.text}>Consumo del mes anterior: {datos.consumoAnterior} litros</Text>
      <Text style={[styles.incrementText, getColorForIncrement()]}>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E8098',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
  incrementText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  incrementNegative: {
    color: '#F44336',
  },
  incrementPositive: {
    color: '#4CAF50',
  },
  incrementNeutral: {
    color: '#FFC107',
  },
  button: {
    backgroundColor: '#4E8098',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
