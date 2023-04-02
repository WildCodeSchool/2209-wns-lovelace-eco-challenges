import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import InfoChallenge from '../../Shared/components/challenge/InfoChallenge'
import CompletedChallenge from '../../Shared/components/challenge/CompletedChallenge'
import { gql, useQuery } from "@apollo/client";
import { UserByIdQuery, UserByIdQueryVariables } from "../../gql/graphql";
import { ScrollView } from "react-native";
import Theme from "../../Shared/components/challenge/Theme";

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
  const Id = "c0ba612a-4ec8-49a2-add3-d646b8763354"
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
        <View style={styles.container}>
          <View style={styles.bloc}>
            {challenges && challenges.length > 0 && challenges.map((challenge) => (
              <>
                <InfoChallenge
                  challenge={challenge}
                  key={challenge?.id}
                />
                <Theme
                  challenge={challenge} />
              </>
            ))}
          </View>
        </View>
        <View style={styles.completed}>
          {challenges?.map((team, i) => (
            <CompletedChallenge
              key={i}
              name={team?.teamName}
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
    marginHorizontal: 10,
  },
  header: {
    justifyContent: "space-around",
    height: 70,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  container: {
    marginTop: 50
  },
  bloc: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 750,
  },
  completed: {
    height: 200,
    overflow: "hidden",
    marginLeft: 12,
  }
});