import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

type PropType = {
  name: string | undefined
  lastName: string | undefined
}

const Space = ({ name, lastName }: PropType) => {
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
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{lastName}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    height: '30%',
  },
  image: {
    width: 70,
    height: 70
  },
  nameCtn: {
    backgroundColor: "#3B8574",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 45,
    width: 180
  },
  name: {
    color: "white",
    fontSize: 13,
    width: 50,
  },
  space: {
    fontSize: 20
  }
});

export default Space