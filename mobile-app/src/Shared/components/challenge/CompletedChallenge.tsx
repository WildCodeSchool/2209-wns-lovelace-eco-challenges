import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Team } from "../../../gql/graphql";

type PropType = {
  name: Team
}

const CompletedChallenge = ({ name }: PropType) => {
  return (
    <View style={styles.bloc}>
      <View style={styles.textCtn}>
        <Text style={styles.termine}>Terminés</Text>
        <View style={styles.separation} />
      </View>
      <View style={styles.blocCtn}>
        <View style={styles.challengeCtn}>
          <View style={styles.challenge}>
            <View style={styles.name}>
              <Text style={styles.nameTxt}>{name.teamName}</Text>
            </View>
          </View>
          <View style={styles.challenge}>
            <View style={styles.name}>
              <Text style={styles.nameTxt}>{name.teamName}</Text>
            </View>
          </View>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  bloc: {
    height: 250,
    width: 390,
    alignItems: "center"
  },
  textCtn: {
    marginTop: 5,
    alignItems: "flex-start",
    width: 300,
    justifyContent: "space-around",
    height: 30
  },
  blocCtn: {
    width: 300,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  challengeCtn: {
    height: '100%',
    width: 225,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  challenge: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderColor: "#3B8574",
    borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    top: 30
  },
  termine: {
    left: 110
  },
  separation: {
    width: 80,
    height: 2,
    backgroundColor: "#7BE07E",
    marginRight: 45,
    left: 100
  },
  name: {
    width: 80,
    borderColor: "#3B8574",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nameTxt: {
    fontSize: 10,
  }
});

export default CompletedChallenge