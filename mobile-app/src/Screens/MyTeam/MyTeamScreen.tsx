import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
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

const MyTeamScreen = () => {
  const id = "4f76b71f-ae2b-4888-956b-d479069de7c1"
  const { data } = useQuery<UserByIdQuery, UserByIdQueryVariables
  >(GET_USERSBYID, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  const teams = data?.userById.userToTeams;
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Les équipes</Text>
      <View style={styles.teamCard}>
        <Image source={require('../../../assets/icons/visagehomme.png')} style={styles.teamImage} />
        <View style={styles.teamInfo}>
          {teams?.map((team) => (
            <>
              <Text style={styles.teamName}>{team.team.teamName}</Text>
              <Text style={styles.teamLocation}>{team.team.city}, {team.team.country}</Text>
              <Text style={styles.teamType}>{team.team.isPublic} Public ou privé</Text>
              <Text style={styles.teamMembers}>Nombre de membres : 10</Text>
            </>
          ))}
          <>
          </>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 60,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 80,
  },
  teamCard: {
    marginTop: 25,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  teamInfo: {
    height: 120,
    marginTop: 20
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  teamLocation: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  teamType: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  teamMembers: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MyTeamScreen;
