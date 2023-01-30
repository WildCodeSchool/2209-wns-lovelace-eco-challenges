import React from "react";
import { Text, View, StyleSheet, Image, BackHandler } from "react-native";

export default function Space() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./maison.png')}
        style={styles.image}
      />
      <Text style={styles.space}>Mon espace</Text>
      {/* <Image
        source={require('./visageIcone.png')}
        style={styles.imageVisage}
      /> */}
      <View style={styles.nameCtn}>
        <Text style={styles.name}>NOM PRENOM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: 180,
  },
  image: {
    width: 70,
    height: 70
  },
  nameCtn: {
    backgroundColor: "#3B8574",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 45,
    width: 180
  },
  name: {
    color: "white",
    fontSize: 13,
    width: 100,
  },
  space: {
    fontSize: 20
  }
});