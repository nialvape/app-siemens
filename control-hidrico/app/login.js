import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomInputButton from '../components/CustomInputButton';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validación simple
    if (email === '' || password === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Lógica de inicio de sesión (puedes reemplazarla por API o autenticación real)
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Inicio de sesión exitoso');
    } else {
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
