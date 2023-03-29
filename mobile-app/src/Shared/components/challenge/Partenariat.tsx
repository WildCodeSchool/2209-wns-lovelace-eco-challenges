import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Partenariat() {
  return (
    <View style={styles.partenariatCtn}>
      <View style={styles.partenariat}>
        <View style={styles.separation}></View>
        <View style={styles.flex}>
          <Text style={styles.txt}>Partenariat si existant</Text>
          <Image
            source={require('../../../../assets/icons/people.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.separation}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  partenariatCtn: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  partenariat: {
    justifyContent: 'space-around',
    height: 55
  },
  separation: {
    width: 180,
    height: 1,
    backgroundColor: '#7BE07E',
  },
  img: {
    width: 25,
    height: 25,
  },
  txt: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 12
  },
  flex: {
    flexDirection: "row",
    width: 180,
    justifyContent: "space-around"
  }
});