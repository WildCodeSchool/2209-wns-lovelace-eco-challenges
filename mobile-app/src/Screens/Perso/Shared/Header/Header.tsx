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
    backgroundColor: '#3B8574',
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  },

  navbar: {
    display: "flex",
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