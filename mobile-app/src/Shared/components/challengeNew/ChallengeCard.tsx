import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type PropType = {
  challenge: any
}

const ChallengeCard = ({ challenge }: PropType) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{challenge.challengeName}</Text>
        <View style={styles.teamContainer}>
          <Image style={styles.teamIcon} />
          <Text style={styles.teamName}>Paris</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.label}>Date de fin:</Text>
          <Text style={styles.value}>18 octobre 2023</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.label}>Ton score est:</Text>
          <Text style={styles.value}>{challenge.score}</Text>
        </View>
      </View>
      <View style={styles.themeContainer}>
        <Text style={styles.label}>Thème du challenge:</Text>
        <Text style={styles.theme}>{challenge?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  teamName: {
    fontSize: 16,
    color: '#888',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  themeContainer: {
    marginBottom: 16,
  },
  theme: {
    fontSize: 16,
    color: '#444',
  },
});

export default ChallengeCard;
