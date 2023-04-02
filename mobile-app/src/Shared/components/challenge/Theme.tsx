import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Challenge } from "../../../gql/graphql";

type PropType = {
  challenge?: Challenge
}

const Theme = ({ challenge }: PropType) => {
  return (
    <View style={styles.container}>
      <View style={styles.separation}></View>
      <View style={styles.theme}>
        <Text style={styles.title}>Thème</Text>
        <Text style={styles.bio}>{challenge?.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    right: 40,
    bottom: 10,
    alignItems: 'center',
    height: '20%',
    width: 208,
  },
  separation: {
    width: 220,
    height: 1,
    backgroundColor: "#7BE07E",
    marginLeft: 80,
    bottom: 10,
  },
  theme: {
    justifyContent: "center",
    width: '70%'
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    bottom: 3
  },
  bio: {
    fontSize: 10,
    width: 245,
    bottom: 2
  }
});

export default Theme