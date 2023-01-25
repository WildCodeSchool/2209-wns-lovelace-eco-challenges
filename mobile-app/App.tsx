import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Perso from './src/Pages/Perso/Perso'

export default function App() {
  return (
    <View style={styles.container}>
      <Perso />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
