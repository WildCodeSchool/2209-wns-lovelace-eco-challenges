import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Score() {
  return (
    <View style={styles.bloc}>
      <View style={styles.date}>
        <Image
          source={require('../../../../assets/icons/timer.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>fin le</Text>
        <Text style={styles.txt}>XX/XX/XXXX</Text>
      </View>
      <View style={styles.score}>
        <Image
          source={require('../../../../assets/icons/coin.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Ton score est</Text>
        <Text style={styles.txt}>XXX points</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bloc: {
    height: 100,
    flexDirection: 'row'
  },
  date: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '95%',
    width: '50%'
  },
  score: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '50%'
  },
  img: {
    width: 35,
    height: 35
  },
  txt: {
    fontSize: 11
  }
});