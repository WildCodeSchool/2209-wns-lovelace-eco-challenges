import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.pageCtn}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <View style={styles.texte}>
            <Text style={styles.title}>Mes challenges</Text>
            <Text style={styles.subtitle}>En cours</Text>
            <View style={styles.separation} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageCtn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  pages: {
    height: '95%'
  },
  flex: {
    justifyContent: 'space-between',
    height: '100%'
  },
  texte: {
    width: 300,
    height: 70,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15
  },
  separation: {
    width: 60,
    height: 5,
    backgroundColor: "#7BE07E"

  }
});