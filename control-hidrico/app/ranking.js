import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';

export default function Ranking() {
  const [rankingData, setRankingData] = useState([]);
  const [userLine, setUserLine] = useState('A');

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

  const firstPlace = rankingData[0]?.linea;
  const lastPlace = rankingData[rankingData.length - 1]?.linea;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de Consumo</Text>
      <Text style={styles.subtitle}>Consulta el ranking de consumo de agua por líneas.</Text>
      <Text style={styles.subtitle}>Tu línea se encuentra en el puesto con menor consumo para acceder a mayores beneficios.</Text>

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
        data={rankingData.sort((a, b) => a.consumo - b.consumo)}
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
    backgroundColor: '#092327',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0F7FA',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#B2EBF2',
    marginVertical: 5,
    textAlign: 'center',
  },
  alertContainer: {
    backgroundColor: '#004D40',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  item: {
    backgroundColor: '#00796B',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: '#FFFFFF',
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
