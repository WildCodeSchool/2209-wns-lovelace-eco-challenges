import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Space() {
  return (
    <View style={styles.container}>
      <View style={styles.spaceCtn}>
        <Image
          source={require('./maison.png')}
          style={styles.image}
        />
        <Text style={styles.space}>Mon espace</Text>
      </View>
      <View style={styles.nameCtn}>
        <Text style={styles.name}>NOM PRENOM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 428,
    // backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
  },
  spaceCtn: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    width: 300
  },
  nameCtn: {
    backgroundColor: "#3B8574",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 65,
    width: 370
  },
  name: {
    color: "white",
    fontSize: 17,
    // backgroundColor: "blue",
    width: 255,
  },
  image: {
    width: 75,
    height: 75
  },
  space: {
    fontSize: 20
  }
});