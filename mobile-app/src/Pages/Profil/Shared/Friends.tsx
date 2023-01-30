import { Image, StyleSheet, Text, View } from "react-native";

export default function Friends() {
  return (
    <View>
      <View style={styles.title}>
        <Text>Friends</Text>
      </View>
      <View style={styles.stickers}>
        <Image style={styles.img} source={require('../../../../assets/icons/bradpt.png')} />
        <Image style={styles.img} source={require('../../../../assets/icons/visagefemme.png')} />
        <Image style={styles.img} source={require('../../../../assets/icons/visagehomme.png')} />
        <Image style={styles.img} source={require('../../../../assets/icons/visagefemme2.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: 75,
    alignItems: "flex-end"
  },
  stickers: {
    display: "flex",
    height: 150,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  img: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 35
  }
});