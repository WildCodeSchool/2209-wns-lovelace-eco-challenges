import { StyleSheet, View } from "react-native";
import Friends from "./Shared/Friends";
import Interest from "./Shared/Interest";
import Presentation from "./Shared/Presentation";

export default function Profil() {
  return (
    <View style={styles.container}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <Presentation />
          <Interest />
          <Friends />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  pages: {
    height: '85%'
  },
  flex: {
    justifyContent: 'space-between',
    height: '100%'
  }
});