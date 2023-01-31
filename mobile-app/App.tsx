import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import Perso from './src/Pages/Perso/Perso'
import Naviguate from './src/components/Naviguate'
import Header from './src/Pages/Perso/Shared/Header/Header';
import MyChallenge from './src/Pages/MyChallenge/MyChallenge'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pages}>
        {/* <Perso /> */}
        <MyChallenge />
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