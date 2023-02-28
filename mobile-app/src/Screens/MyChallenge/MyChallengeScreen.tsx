import { StyleSheet, Text, View } from "react-native";
import InfoChallenge from './Shared/InfoChallenge'
import Score from './Shared/Score'
import Partenariat from './Shared/Partenariat'
import Teams from './Shared/Teams'
import Theme from './Shared/Theme'
import CompletedChallenge from './Shared/CompletedChallenge'

export default function MyChallenge() {
  return (
    <View style={styles.pageCtn}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <View style={styles.texte}>
            <Text style={styles.title}>Mes challenges</Text>
            <Text style={styles.subtitle}>En cours</Text>
            <View style={styles.separation} />
          </View>
          <View style={styles.blocCtn}>
            <View style={styles.bloc}>
              <InfoChallenge />
              <Score />
              <Partenariat />
              <Teams />
              <Theme />
            </View>
          </View>
        </View>
        <CompletedChallenge />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageCtn: {
    flex: 1,
    justifyContent: 'space-around',
  },
  pages: {
    height: '100%',
  },
  flex: {
    height: '79%',
    justifyContent: 'space-around',
  },
  texte: {
    width: 130,
    height: 70,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 52
  },
  separation: {
    width: 60,
    height: 2,
    backgroundColor: "#7BE07E",
    marginRight: 45
  },
  blocCtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  bloc: {
    width: '60%',
    borderColor: "#3B8574",
    borderWidth: 1,
    borderRadius: 10,
    height: 420
  },
});