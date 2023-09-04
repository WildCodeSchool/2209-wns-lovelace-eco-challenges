import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PropType = {
  challenge: any
}

const ChallengeCompleted = ({ challenge }: PropType) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.challengeName}>{challenge.challenge.challengeName}</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>Terminé</Text>
          </View>
        </View>
        <Text style={styles.teamName}>Team: Paris</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.scoreText}>Score atteint: score</Text>
          <Text style={styles.dateText}>Date de fin: fin</Text>
        </View>
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
  cardContainer: {
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  badgeContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  teamName: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    marginTop: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreText: {
    fontSize: 14,
    color: '#444',
  },
  dateText: {
    fontSize: 14,
    color: '#444',
  },
});

export default ChallengeCompleted
