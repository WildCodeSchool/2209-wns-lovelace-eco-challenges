import { Image, StyleSheet, Text, View } from "react-native";

export default function Friends() {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.texte}>Friends</Text>
      </View>
      <View style={styles.stickerCtn}>
        <View style={styles.sticker}>
          <Image style={styles.img} source={require('../../../../assets/icons/bradpt.png')} />
          <Image style={styles.img} source={require('../../../../assets/icons/visagefemme.png')} />
          <Image style={styles.img} source={require('../../../../assets/icons/visagehomme.png')} />
          {/* <Image style={styles.img} source={require('../../../../assets/icons/visagefemme2.png')} /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: 117,
    alignItems: "flex-end"
  },
  texte: {
    fontWeight: "bold",
    fontSize: 12
  },
  sticker: {
    display: "flex",
    height: 150,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  stickerCtn: {
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 35
  }
});