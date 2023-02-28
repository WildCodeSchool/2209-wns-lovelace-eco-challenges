import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Notifs from './Shared/Notifcations/Notifs';
import Challenge from './Shared/Challenge/Challenge';
import Space from './Shared/Space/Space';

export default function PersoScreenPerso() {
  return (
    <View style={styles.pageCtn}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <Space />
          <Notifs />
          <Challenge />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  pageCtn: {
    flex: 1,
    justifyContent: 'space-around',
  },
  pages: {
    height: '95%'
  },
  flex: {
    justifyContent: 'space-between',
    height: '100%'
  }
});