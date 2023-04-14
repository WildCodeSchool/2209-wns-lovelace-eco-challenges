import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { UserByIdQuery, UserByIdQueryVariables } from "../../gql/graphql";
import { ScrollView } from "react-native";
import React from "react";
import ChallengeCard from "../../Shared/components/challengeNew/ChallengeCard";
import ChallengeCompleted from "../../Shared/components/challengeNew/ChallengeCompleted";

export const GET_USERSBYID = gql`
query userById($Id: String!) {
  userById(id: $Id) {
    id
    lastName
    firstName
    email
    country
    city
    nickname
    score
    userToTeams {
      userRole
      score
      team {
        id
        teamName
        country
        city
        isPublic
        img
        challenges {
          id
          challengeName
          level
          description
          img
          startsAt
          endAt
          category
        }
      }
    }
  }
}
`

export default function MyChallenge() {
  const Id = "05073bb6-652a-4ee4-9168-069fcd170599"
  const { data } = useQuery<UserByIdQuery, UserByIdQueryVariables
  >(GET_USERSBYID, {
    variables: { Id },
    fetchPolicy: "cache-and-network",
  });
  const test = data?.userById.userToTeams
  const challenges = test?.flatMap(userTeam =>
    userTeam.team.challenges?.map(challenge => ({
      teamName: userTeam.team.teamName,
      ...challenge
    }))
  );

  console.log(challenges)

  return (
    <SafeAreaView style={styles.pageCtn}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Mes challenges</Text>
          <Text style={styles.subtitle}>En cours</Text>
        </View>
        <View style={styles.challengeCard}>
          {challenges && challenges.length > 0 && challenges.map((challenge) => (
            <>
              <ChallengeCard
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
          {challenges?.map((challenge, i) => (
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