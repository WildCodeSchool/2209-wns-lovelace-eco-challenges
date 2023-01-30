import { View, StyleSheet, Text, ImageBackground } from 'react-native';

export default function Notifs() {
  return (
    <View style={styles.container}>
      <View style={styles.ctn}>
        <Text style={styles.notifs}>Notifications</Text>
        <View style={styles.invitCtn}>
          <View style={styles.invitation}>
            <Text>Création challenge Name</Text>
            <Text>Retrouver vos challenges et teams dans vos espaces dédiés.</Text>
          </View>
        </View>
        <View style={styles.invitCtn}>
          <View style={styles.invitation}>
            <Text>Invitation</Text>
            <Text>Julien t’invites à rejoindre
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
    display: "flex",
    // backgroundColor: "red"
  },
  notifs: {
    display: 'flex',
    alignItems: "flex-start",
    width: 190
  },
  ctn: {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 250
  },
  invitCtn: {
    height: 100,
  },
  invitation:
  {
    alignItems: "center",
    width: 250,
    justifyContent: 'space-around',
    height: 97,
    backgroundColor: "#F5F5F5",
    borderRadius: 5
  }
});