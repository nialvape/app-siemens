import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export function Home() {
  return (
    <View style={styles.main_container}>
      <View style={styles.nav_container}>
        {/* Botón de Consumo */}
        <Link href="/consumo" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Consumo</Text>
          </Pressable>
        </Link>
        
        {/* Botón de Calidad */}
        <Link href="/calidad" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Calidad</Text>
          </Pressable>
        </Link>

        {/* Botón de Status */}
        <Link href="/status" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Status</Text>
          </Pressable>
        </Link>

        {/* Botón de Ranking */}
        <Link href="/ranking" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Ranking</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  nav_container: {
    width: '100%',
    maxWidth: 800,
    height: '100%',
    paddingTop: 110,
    paddingBottom: 130,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  button: {
    backgroundColor: '#4E8098',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
