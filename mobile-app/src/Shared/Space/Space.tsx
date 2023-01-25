import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Space() {
  return (
    <View style={styles.container}>
      <Text>heyYou</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 225,
    width: 428,
    backgroundColor: "blue"
  },
});