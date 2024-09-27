import React, { useState } from 'react';
import { View, Pressable, Image, Animated, StyleSheet, Text, Dimensions } from 'react-native';
import account from '../images/account_icon.png';

export default function Account() {
  const [accountVisible, setAccountVisible] = useState(false);
  const [accountWidth] = useState(new Animated.Value(0)); // Ancho animado

  const toggleAccount = () => {
    if (accountVisible) {
      Animated.timing(accountWidth, {
        toValue: 0, // Volver a 0
        duration: 300,
        useNativeDriver: false,
      }).start(() => setAccountVisible(false));
    } else {
      setAccountVisible(true);
      Animated.timing(accountWidth, {
        toValue: Dimensions.get('window').width * 0.6, // Ajusta el ancho deseado
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleAccount}>
        <Image source={account} style={styles.icon} />
      </Pressable>
      {accountVisible && (
        <Animated.View style={[styles.menu, { width: accountWidth }]}>
          <View style={styles.menuContent}>
            <Pressable style={styles.menuItem}><Text>Perfil</Text></Pressable>
            <Pressable style={styles.menuItem}><Text>Cerrar sesión</Text></Pressable>
            <Pressable style={styles.menuItem}><Text>Configuraciones</Text></Pressable>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  menu: {
    position: 'absolute',
    right: 0,
    top: 50, // Desplazado por debajo del botón
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
    height: Dimensions.get('window').height - 50, // Ocupar toda la altura menos el botón
    overflow: 'hidden',
  },
  menuContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});
