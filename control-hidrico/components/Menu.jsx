import React, { useState } from 'react';
import { View, Pressable, Image, Animated, StyleSheet, Text, Dimensions } from 'react-native';
import menu from '../images/menu_icon.png';

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuWidth] = useState(new Animated.Value(0)); // Ancho animado

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuWidth, {
        toValue: 0, // Volver a 0
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuWidth, {
        toValue: Dimensions.get('window').width * 0.6, // Ajusta el ancho deseado
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleMenu}>
        <Image source={menu} style={styles.icon} />
      </Pressable>
      {menuVisible && (
        <Animated.View style={[styles.menu, { width: menuWidth }]}>
          <View style={styles.menuContent}>
            <Pressable style={styles.menuItem}><Text>Opción 1</Text></Pressable>
            <Pressable style={styles.menuItem}><Text>Opción 2</Text></Pressable>
            <Pressable style={styles.menuItem}><Text>Opción 3</Text></Pressable>
            <Pressable style={styles.menuItem}><Text>Opción 4</Text></Pressable>
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
    left: 0,
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
