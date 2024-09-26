import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Main() {

    
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View style={styles.top_bar}>

        </View>

        <View style={styles.nav_container}>
            <StatusBar style="auto" />
            <Pressable style={styles.button}>
                <Text>Consumo</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text>Calidad</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text>Status</Text>
            </Pressable>        
        </View>        
    </View>
  );
}

const styles = StyleSheet.create({

  main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#092327',
  },

  top_bar: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff'
  },

  nav_container: {
    backgroundColor: '#000',
    width: '100%',
    maxWidth: 800,
    height: 600,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent:'space-between',
  },

  button: {
    backgroundColor: '#4E8098',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
