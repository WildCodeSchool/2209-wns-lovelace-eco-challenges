import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Profil from './src/Pages/Profil/Profil';
// import Perso from './src/Pages/Perso/Perso'
import Naviguate from './src/components/Naviguate'
import Header from './src/Shared/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pages}>
        {/* <Perso /> */}
        <Profil />
      </View>
      <View style={styles.naviguate}>
        <Naviguate />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  naviguate: {
    justifyContent: 'flex-end',
  },
  pages: {
    flex: 0.87,
  }
})