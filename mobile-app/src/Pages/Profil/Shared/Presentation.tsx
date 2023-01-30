import { StyleSheet, Text, View, Image, TouchableWithoutFeedbackComponent } from "react-native";

export default function Presentation() {
  return (
    <View>
      <View style={styles.pictureCtn}>
        <View style={styles.picture}>
          <Image
            source={require('../../../Shared/Space/visageIcone.png')}
            style={styles.imageVisage}
          />
          <Text style={styles.name}>PRENOM NOM</Text>
          <Text style={styles.loca}>LOCALISATION</Text>
        </View>
        <View style={styles.bio}>
          <Text style={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque autem libero, sequi et soluta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pictureCtn: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  picture: {
    borderRadius: 10,
    backgroundColor: "#3B8574",
    height: 165,
    width: 280,
    alignItems: "center"
  },
  imageVisage: {
    width: 65,
    height: 65
  },
  name: {
    color: "white"
  },
  loca: {
    color: "white",
  },
  bio: {
    marginTop: 30,
    width: 315,
    textAlign: "left"
  },
  txt: {
    lineHeight: 20,
    fontWeight: "600"
  }
});