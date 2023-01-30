import { Image, StyleSheet, Text, View } from "react-native";

export default function Challenge() {
  return (
    <View style={styles.challengeCtn}>
      <View style={styles.chall}>
        <View style={styles.challenge}>
          <Text style={styles.txt}>Lancer un Challenge</Text>
        </View>
      </View>
      <View style={styles.rubriqueCtn}>
        <View style={styles.rubrique}>
          <Text style={styles.rubriqueTxt}>Mes Challenges
            {/* <Image
              source={require('./fleche2.png')}
              style={styles.img}
            /> */}
          </Text>
        </View>
        <View style={styles.rubrique}>
          <Text style={styles.rubriqueTxt}>Mes Teams</Text>
        </View>
        <View style={styles.rubrique}>
          <Text style={styles.rubriqueTxt}>Personnalisation profil</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  challengeCtn: {
    height: 170,
    display: "flex",
    justifyContent: "space-around",
  },
  chall: {
    width: 390,
    display: 'flex',
    alignItems: "center"
  },
  challenge: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B8574",
    borderRadius: 10,
    height: 35,
    width: 170,
  },
  txt: {
    color: "white",
  },
  img: {
    width: 2,
    height: 2
  },
  rubriqueCtn: {
    height: 120,
    width: 390,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  rubriqueTxt: {
    width: 130,
    marginLeft: 60
  },
  rubrique: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 32,
    alignItems: "flex-start",
    justifyContent: "center",
  }
});