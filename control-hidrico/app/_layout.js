import { StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import TopBar from '../components/TopBar.jsx';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.main_container}>
          <StatusBar style='auto'/>
          <TopBar />
          <Slot />
        </SafeAreaView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#092327',
      position: 'relative', // Asegúrate de que esté en posición relativa
    },
});
