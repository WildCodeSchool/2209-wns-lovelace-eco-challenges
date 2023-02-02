import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Theme() {
  return (
    <View style={styles.container}>
      <View style={styles.separation}></View>
      <View style={styles.theme}>
        <Text style={styles.title}>Thème</Text>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ad. Sequi</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    height: '20%',
    width: 208,
  },
  separation: {
    width: 180,
    height: 1,
    backgroundColor: "#7BE07E",
    marginLeft: 25
  },
  theme: {
    marginTop: 10,
    justifyContent: "center",
    width: '70%'
  },
  title: {
    fontWeight: "bold",
    fontSize: 12
  },
  bio: {
    fontSize: 10
  }
});