import { Image, StyleSheet, View } from "react-native";

export default function Naviguate() {
  return (
    <View style={styles.nav}>
      <View style={styles.icone}>
        <Image
          source={require('../../assets/icons/maison.png')}
          style={styles.img}
        />
        <Image
          source={require('../../assets/icons/iconeProfil.png')}
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 428,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  icone: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: 228,
  },
  img: {
    width: 50,
    height: 50
  }
})