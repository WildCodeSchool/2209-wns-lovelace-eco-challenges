import { View, StyleSheet, Text, Image } from 'react-native';
const Notifs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ctn}>
        <View style={styles.notifsFlex}>
          <Image
            source={require('./exclamation.png')}
            style={styles.img}
          />
          <Text style={styles.notifs}>
            Notifications</Text>
        </View>
        <View style={styles.invitCtn}>
          <View style={styles.imgCtn}>
            <Image
              source={require('./createChallenge.png')}
              style={styles.imgChallenge}
            />
          </View>
          <View style={styles.textCtn}>
            <Text style={styles.texteTitle}>Création challenge Name</Text>
            <Text style={styles.texte}>Retrouver vos challenges et teams dans vos espaces dédiés.</Text>
          </View>
        </View>
        <View style={styles.invitCtn}>
          <View style={styles.imgCtn}>
            <Image
              source={require('../../../../../assets/icons/visagehomme.png')}
              style={styles.imgChallenge}
            />
          </View>
          <View style={styles.textCtn}>
            <Text style={styles.texteTitle}>Invitation</Text>
            <Text style={styles.texte}>Julien t’invites à rejoindre
              sa Team, pour le challenge
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 265,
  },
  notifs: {
    alignItems: "flex-start",
    width: 190
  },
  notifsFlex: {
    flexDirection: 'row'
  },
  img: {
    width: 20,
    height: 20
  },
  ctn: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 250
  },
  invitCtn: {
    alignItems: "center",
    width: 270,
    justifyContent: 'space-around',
    height: 97,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    flexDirection: 'row'
  },
  imgCtn: {
    height: 70
  },
  textCtn: {
    width: '75%',
    height: 60,
    justifyContent: "space-around"
  },
  imgChallenge: {
    width: 40,
    height: 40
  },
  texteTitle: {
    fontSize: 12
  },
  texte: {
    fontSize: 11
  }
});

export default Notifs