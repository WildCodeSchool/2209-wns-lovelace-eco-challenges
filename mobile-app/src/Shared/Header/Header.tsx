import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Eco Playground</Text>
        <Text style={styles.subtitle}>Make a better world.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: .08,
    backgroundColor: '#3B8574',
    justifyContent: "center",
    alignItems: "flex-end",
    width: 428,
  },

  navbar: {
    display: "flex",
    width: 290,
  },

  title: {
    color: "white",
    fontSize: 25
  },

  subtitle: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 38
  },

  image: {
    width: 40,
    height: 30,
  }
});