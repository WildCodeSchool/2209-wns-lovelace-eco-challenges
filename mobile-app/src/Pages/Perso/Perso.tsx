import { View, StyleSheet } from 'react-native';
import Header from '../../Shared/Header/Header';
import Space from '../../Shared/Space/Space';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Space />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.94,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});