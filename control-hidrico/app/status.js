import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';

export default function Status() {
  // Ejemplo de estado del servicio y alertas
  const serviceStatus = {
    active: true, // Cambiar a false para probar el estado "sin servicio"
    message: 'Servicio activo',
  };

  const upcomingAlerts = [
    { id: '1', date: '01/10/2024', time: '09:00', duration: '2 horas' },
    { id: '2', date: '05/10/2024', time: '14:00', duration: '3 horas' },
  ];

  // Definir color basado en el estado del servicio
  const statusColor = serviceStatus.active ? '#4CAF50' : '#F44336'; // Verde si activo, rojo si no

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del Servicio</Text>

      {/* Estado del servicio con el puntito LED */}
      <View style={styles.statusContainer}>
        <View style={[styles.statusLed, { backgroundColor: statusColor }]} />
        <Text style={styles.statusText}>{serviceStatus.message}</Text>
      </View>

      <Text style={styles.subtitle}>Notificaciones sobre cortes de agua y problemas en el suministro:</Text>

      {/* Lista de alertas por futuros cortes */}
      <FlatList
        data={upcomingAlerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alert}>
            <Text style={styles.alertText}>
              Corte programado: {item.date} a las {item.time} - Duración estimada: {item.duration}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.alertText}>No hay alertas de cortes programados</Text>}
      />

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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusLed: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 10,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#D3D3D3',
    marginVertical: 10,
  },
  alert: {
    backgroundColor: '#FFD700',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  alertText: {
    fontSize: 14,
    color: '#0A1F44',
  },
  button: {
    backgroundColor: '#4E8098',
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
