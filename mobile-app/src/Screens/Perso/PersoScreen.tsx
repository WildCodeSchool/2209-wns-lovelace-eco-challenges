import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { gql, useQuery } from "@apollo/client";
import { UserByIdQuery, UserByIdQueryVariables } from '../../../gql/graphql';


export const GET_USERSBYID = gql`
query UserById($id: String!) {
  userById(id: $id) {
    id
    email
    firstName
    lastName
    nickname
    score
    disabled
    city
    desc
    age
    country
    img
    hobbies
    isVerified
    userToTeams {
      id
      team {
        id
        teamName
        city
        country
        img
        isPublic
        challengeToTeams {
          id
          challenge {
            challengeName
            level
            description
            category
            img
            id
          }
          startsAt
          endAt
        }
      }
      userRole
      score
      disabled
    }
  }
}
`

const PersoScreen = () => {
  const id = "4f76b71f-ae2b-4888-956b-d479069de7c1"
  const { data } = useQuery<UserByIdQuery, UserByIdQueryVariables
  >(GET_USERSBYID, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  const users = data?.userById;
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.img}
            source={require('../../../assets/icons/visagehomme.png')}
          />
        </View>
        <Text style={styles.name}>{users?.firstName} {users?.lastName} </Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Modifier le profil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoCard}>
        {/* Carte d'information */}
        <View style={styles.locationContainer}>
          <Text style={styles.info}>{users?.city}, {users?.country}</Text>
        </View>
        <Text style={styles.description}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
      </View>
      <View style={styles.scoreCard}>
        {/* Carte du score */}
        <Text style={styles.nickname}>{users?.nickname}</Text>
        <View style={styles.profileInfo}>
          <Text style={styles.profileInfoLabel}>Amis</Text>
          <View style={styles.friendContainer}>
            <View style={styles.friendItem}>
              <Image source={require('../../../assets/icons/visagehomme.png')} style={styles.friendIcon} />
              <Text style={styles.friendName}>Mathieu Goulet</Text>
            </View>
            <View style={styles.friendItem}>
              <Image source={require('../../../assets/icons/visagehomme.png')} style={styles.friendIcon} />
              <Text style={styles.friendName}>Samuel Renard</Text>
            </View>
            <View style={styles.friendItem}>
              <Image source={require('../../../assets/icons/visagehomme.png')} style={styles.friendIcon} />
              <Text style={styles.friendName}>Guillaume Cheron</Text>
            </View>
          </View>
        </View>
        <View style={styles.scoreInfo}>
          <Text style={styles.scoreInfoLabel}>Score Total</Text>
          <Text style={styles.score}>{users?.score}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: '#3B8574',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  editProfileButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 16,
  },
  scoreCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileInfoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreInfoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  friendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginLeft: 35
  },
  friendItem: {
    alignItems: 'center',
  },
  friendIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 40,
  },
  friendName: {
    fontSize: 14,
    textAlign: 'center',
  },

});

export default PersoScreen