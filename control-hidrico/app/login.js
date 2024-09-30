import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomInputButton from '../components/CustomInputButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Hook para la navegación

  const handleLogin = async () => {
    // Validación simple
    if (email === '' || password === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      // Lógica de inicio de sesión usando la nueva ruta de login
      const response = await axios.post('http://localhost:3001/login', {
        user_name: email, // Ajusta si tu backend espera un nombre de usuario en lugar de un correo
        user_password: password,
      });

      if (response.data) {
        Alert.alert('Inicio de sesión exitoso');
        navigation.navigate('Home'); // Redirige a la pantalla principal
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      
      <CustomTextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      
      <CustomTextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      <CustomInputButton title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092327',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 700,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
