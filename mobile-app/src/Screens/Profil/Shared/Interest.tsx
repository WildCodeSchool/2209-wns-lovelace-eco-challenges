import { Image, StyleSheet, Text, View } from "react-native";

export default function Interest() {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.texte}>Interest</Text>
      </View>
      <View style={styles.stickerCtn}>
        <View style={styles.sticker}>
          <Image style={styles.img} source={require('../../../../assets/icons/book.png')} />
          <Image style={styles.img} source={require('../../../../assets/icons/musique.png')} />
          <Image style={styles.img} source={require('../../../../assets/icons/planete.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: 120,
    alignItems: "flex-end",
  },
  texte: {
    fontWeight: "bold",
    fontSize: 12,
  },
  stickerCtn: {
    justifyContent: "center",
    alignItems: "center"
  },
  sticker: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300
  },
  img: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  }
});