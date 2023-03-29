import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Challenge } from "../../../gql/graphql";
import Partenariat from "./Partenariat";
import Score from "./Score";
import Teams from "./Teams";

type PropType = {
  challenge: any;
}

const InfoChallenge = ({ challenge }: PropType) => {
  return (
    <ScrollView style={styles.bloc}>
      <View style={styles.header}>
        <View style={styles.background}>
          <Image
            source={require('../../../../assets/icons/visagehomme.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.texte}>
          <Text style={styles.name}>{challenge.challengeName}</Text>
        </View>
        <View
          key={challenge.id}>
          <Score
            endTime={challenge.endAt}
          />
          <Partenariat />
          <Teams
            teamName={challenge.teamName}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '15%',
    borderColor: "#3B8574",
    backgroundColor: '#3B8574',
    borderTopStartRadius: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  background: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: 'absolute',
    bottom: 40
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: "bold"
  },
  loca: {
    color: 'white',
    fontSize: 12,
  },
  texte: {
    height: 60,
    justifyContent: 'flex-end',
  },
  bloc: {
    width: '60%',
    borderColor: "#3B8574",
    borderWidth: 1,
    borderRadius: 10,
    height: 420
  },

});

export default InfoChallenge