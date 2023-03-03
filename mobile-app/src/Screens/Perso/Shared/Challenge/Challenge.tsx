import { Image, StyleSheet, Text, View } from "react-native";

export default function Challenge() {
  return (
    <View style={styles.challengeCtn}>
      <View style={styles.chall}>
        <View style={styles.challenge}>
          <Text style={styles.txt}>Lancer un challenge</Text>
          <Image
            source={require('./golf.png')}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.rubriqueCtn}>
        <View style={styles.rubrique}>
          <Text style={styles.rubriqueTxt}>Mes Challenges</Text>
          <Image
            source={require('./fleche2.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.rubrique}>
          <Text style={styles.rubriqueTxt}>Mes Teams</Text>
          <Image
            source={require('./fleche2.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.rubrique}>
          <Text style={styles.rubriqueTxt}>Personnalisation profil</Text>
          <Image
            source={require('./fleche2.png')}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  challengeCtn: {
    height: 170,
    justifyContent: "space-around",
  },
  chall: {
    width: 390,
    alignItems: "center"
  },
  challenge: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#3B8574",
    borderRadius: 10,
    height: 35,
    width: 170,
    flexDirection: "row",
  },
  txt: {
    color: "white",
  },
  img: {
    width: 18,
    height: 18,
  },
  rubriqueCtn: {
    height: 120,
    width: 390,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  rubriqueTxt: {
    width: 150,
  },
  rubrique: {
    height: 32,
    justifyContent: "space-evenly",
    flexDirection: "row"
  }
});