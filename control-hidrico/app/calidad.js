import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Calidad() {
  const currentWaterQuality = {
    estado: 'Agua potable apta para consumo',

    color: '#4CAF50',
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calidad del Agua</Text>
      <View style={[styles.statusContainer, { backgroundColor: currentWaterQuality.color }]}>
        <Text style={styles.statusText}>{currentWaterQuality.estado}</Text>
      </View>
      <Text style={styles.note}>
        Estos datos se obtienen a través de un medidor TDS en el tanque general.
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
    backgroundColor: '#092327',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0F7FA',
    marginBottom: 20,
  },
  statusContainer: {
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  note: {
    fontSize: 14,
    color: '#B2EBF2',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0097A7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
