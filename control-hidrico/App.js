import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { Main } from './components/Main';

export default function App() {


  return (
    <View style={styles.main_container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({

  main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#092327',
  },

});
