import { Text, View, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image
              style={styles.img}
              source={require('../../../../assets/icons/earth.png')}
        />
        <View>
          <Text style={styles.title}>Eco Playground</Text>
          <Text style={styles.subtitle}>Make a better world.</Text>
        </View>
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
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    color: "white",
    fontSize: 25,
  },

  subtitle: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 38
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 15
  },

});