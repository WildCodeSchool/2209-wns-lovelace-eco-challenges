import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Friends() {
  return (
    <View style={styles.carrousselCtn}>
      <View style={styles.carroussel}>
        <View style={styles.ctn}></View>
        <View style={styles.ctn}></View>
        <View style={styles.ctn}></View>
      </View>
      <View>
        <Text>3/10</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carrousselCtn: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center"
  },
  carroussel: {
    height: "60%",
    width: "75%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  ctn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 35
  }
});