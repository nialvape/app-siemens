import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';

export default function Ranking() {
  const [rankingData, setRankingData] = useState([]);
  const [userLine, setUserLine] = useState('A'); // Aquí debes obtener la línea del usuario desde el backend

  // Simulación de datos de ranking
  useEffect(() => {
    const fetchData = () => {
      const data = [
        { linea: 'A', consumo: 1500 },
        { linea: 'B', consumo: 2000 },
        { linea: 'C', consumo: 2500 },
      ];
      setRankingData(data);
    };

    fetchData();
  }, []);

  const firstPlace = rankingData[0]?.linea; // Línea en primer lugar
  const lastPlace = rankingData[rankingData.length - 1]?.linea; // Línea en último lugar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de Consumo</Text>
      <Text>Consulta el ranking de consumo de agua por líneas.</Text>
      <Text>Tu línea se encuentra en el puesto con menor consumo para acceder a mayores beneficios.</Text>

      {userLine === firstPlace && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>¡Felicidades! Tu línea ({userLine}) es la que menos consume.</Text>
        </View>
      )}

      {userLine === lastPlace && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>Atención: Tu línea ({userLine}) está en último lugar en el ranking.</Text>
        </View>
      )}

      <FlatList
        data={rankingData.sort((a, b) => a.consumo - b.consumo)} // Ordena por consumo ascendente
        keyExtractor={(item) => item.linea}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {index + 1}. Línea {item.linea}: {item.consumo} litros
            </Text>
          </View>
        )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alertContainer: {
    backgroundColor: '#ffecb3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9800',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4E8098',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
