import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { ScrollView } from "react-native";
import ChallengeCard from "../../Shared/components/challengeNew/ChallengeCard";
import ChallengeCompleted from "../../Shared/components/challengeNew/ChallengeCompleted";
import { UserByIdQuery, UserByIdQueryVariables } from "../../../gql/graphql";


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

export default function MyChallenge() {
  const id = "4f76b71f-ae2b-4888-956b-d479069de7c1"
  const { data } = useQuery<UserByIdQuery, UserByIdQueryVariables
  >(GET_USERSBYID, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  const userToTeams = data?.userById.userToTeams
  const test = data?.userById.userToTeams
  const challenges = test?.flatMap(userTeam =>
    userTeam.team.challengeToTeams?.map(challenge => ({
      teamName: userTeam.team.teamName,
      ...challenge
    }))
  )

  return (
    <SafeAreaView style={styles.pageCtn}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Mes challenges</Text>
          <Text style={styles.title}>En cours</Text>
        </View>
        <View style={styles.challengeCard}>
          {challenges && challenges.length > 0 && challenges.map((challenge) => (
            <>
              <ChallengeCard
                userToTeams={userToTeams}
                challenge={challenge}
                key={challenge?.id} />
            </>
          ))}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Terminé</Text>
          <View style={styles.separator} />
        </View>
        <View>
          {challenges?.map((challenge) => (
            <ChallengeCompleted
              key={challenge?.id}
              challenge={challenge}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageCtn: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 30,
  },
  header: {
    justifyContent: "space-around",
    height: 70,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  challengeCard: {
    marginTop: 25
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#7BE07E',
  },
});