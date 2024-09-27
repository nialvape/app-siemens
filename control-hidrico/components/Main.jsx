import React from 'react';
import { StyleSheet, Text, View, Pressable,} from 'react-native';
import { Link } from 'expo-router';

export function Main() {

  return (
    <View style={styles.main_container}>
      <View style={styles.nav_container}>
        <Link href="/consumo" asChild style={styles.button}>
        <Pressable>
            <Text>Consumo</Text>
        </Pressable>        
        </Link>
        <Link href="/calidad" asChild style={styles.button}>
        <Pressable style={styles.button}>
            <Text>Calidad</Text>
        </Pressable>        
        </Link>
        <Link href="/status" asChild style={styles.button}>
        <Pressable style={styles.button}>
            <Text>Status</Text>
        </Pressable>        
        </Link>
        <Link href="/consumo" asChild style={styles.button}>
        <Pressable style={styles.button}>
            <Text>Ranking</Text>
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
    justifyContent: 'space-between',
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
  }
});
