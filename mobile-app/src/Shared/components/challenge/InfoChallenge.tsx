import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Challenge } from "../../../gql/graphql";
import Partenariat from "./Partenariat";
import Score from "./Score";
import Teams from "./Teams";
import Theme from "./Theme";

type PropType = {
  challenge: any
}

const InfoChallenge = ({ challenge }: PropType) => {
  return (
    <View style={styles.bloc}>
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
      </View>
      <View style={styles.bas}>
        <Teams
          teamName={challenge}
        />
        <View
          key={challenge.id}
        >
          <Score
            endTime={challenge}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bloc: {
    width: '60%',
    borderColor: "#3B8574",
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  header: {
    height: '15%',
    borderColor: "#3B8574",
    backgroundColor: '#3B8574',
    borderTopStartRadius: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  texte: {
    height: 60,
    justifyContent: 'flex-end',
  },
  name: {
    top: 5,
    fontSize: 14,
    fontWeight: "bold"
  },
  bas: {
    marginTop: 30
  },
  background: {
    width: 55,
    height: 55,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

});

export default InfoChallenge