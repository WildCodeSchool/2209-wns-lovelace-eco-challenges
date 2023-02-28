import { StyleSheet, Text, View, Image } from "react-native";

export default function Presentation() {
  return (
    <View>
      <View style={styles.pictureCtn}>
        <View style={styles.picture}>
          <View style={styles.background}>
            <Image
              source={require('../../../../assets/icons/visagehomme.png')}
              style={styles.imageVisage}
            />
          </View>
          <View style={styles.nameLoca}>
            <Text style={styles.name}>PRENOM NOM</Text>
            <Text style={styles.loca}>LOCALISATION</Text>
          </View>
        </View>
        <View style={styles.bio}>
          <Text style={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque autem libero</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pictureCtn: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 230,
  },
  nameLoca: {
    height: 95,
    width: 120,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  picture: {
    borderRadius: 10,
    backgroundColor: "#3B8574",
    height: 135,
    width: 180,
    alignItems: "center"
  },
  background: {
    width: 85,
    height: 85,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: 'absolute',
    bottom: 90
  },
  imageVisage: {
    width: 65,
    height: 65
  },
  name: {
    color: "white",
    fontSize: 12
  },
  loca: {
    color: "white",
    fontSize: 10
  },
  bio: {
    alignItems: 'center',
    width: 190,
    textAlign: "left"
  },
  txt: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "600",
    width: 220,
    marginLeft: 20,
  }
});