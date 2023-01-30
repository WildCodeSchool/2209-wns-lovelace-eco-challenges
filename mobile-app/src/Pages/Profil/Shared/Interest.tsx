import { Image, StyleSheet, Text, View } from "react-native";

export default function Interest() {
  return (
    <View>
      <View style={styles.title}>
        <Text>Interest</Text>
      </View>
      <View style={styles.sticker}>
        <Image style={styles.img} source={require('../../../../assets/icons/book.png')} />
        <Image style={styles.img} source={require('../../../../assets/icons/musique.png')} />
        <Image style={styles.img} source={require('../../../../assets/icons/planete.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: 75,
    alignItems: "flex-end"
  },
  sticker: {
    display: "flex",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  img: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  }
});