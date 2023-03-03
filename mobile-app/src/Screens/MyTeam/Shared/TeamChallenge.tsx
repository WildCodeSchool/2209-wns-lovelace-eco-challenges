import { StyleSheet, Text, View } from "react-native";
import { Challenge } from "../../../gql/graphql";

type PropType = {
  challengeName: Challenge
}

const TeamChallenge = ({ challengeName }: PropType) => {
  return (
    <View style={styles.challengeCtn}>
      <Text style={styles.challengeTxt}>Challenges en cours</Text>
      <View style={styles.challenge}>
        <View style={styles.name}>
          <Text style={styles.text}>{challengeName.challengeName}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  challengeCtn: {
    height: "35%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  challenge: {
    height: "55%",
    width: '45%',
    borderColor: "#3B8574",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "flex-end"
  },
  challengeTxt: {
    fontWeight: "600",
    fontSize: 12
  },
  name: {
    height: '20%',
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3B8574",
    borderTopWidth: 1,
    backgroundColor: "#7BE07E",
    borderLeftRadius: 5,
    borderRightRadius: 5
  },
  text: {
    fontSize: 10,
    fontWeight: "400",
  }
})

export default TeamChallenge