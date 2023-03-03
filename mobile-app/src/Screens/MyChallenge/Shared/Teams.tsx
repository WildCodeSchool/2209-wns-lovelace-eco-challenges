import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Team } from "../../../gql/graphql";

type PropType = {
  teamName: Team
}
const Teams = ({ teamName }: PropType) => {
  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <Text style={styles.txt}>Teams</Text>
      </View>
      <View style={styles.carroussel}>
        <View style={styles.name}>
          <Text style={styles.nameTxt}>{teamName.teamName}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  teams: {
    height: 40,
    justifyContent: 'space-around',
  },
  carroussel: {
    borderColor: "#3B8574",
    borderWidth: 1,
    height: 70,
    width: 70,
    justifyContent: "flex-end",
    borderRadius: 5
  },
  txt: {
    fontSize: 12
  },
  name: {
    width: 70,
    height: 15,
    borderColor: "#3B8574",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nameTxt: {
    fontSize: 10
  }
});

export default Teams