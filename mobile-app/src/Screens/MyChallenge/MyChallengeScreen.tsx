import { StyleSheet, Text, View } from "react-native";
import InfoChallenge from './Shared/InfoChallenge'
import Theme from './Shared/Theme'
import CompletedChallenge from './Shared/CompletedChallenge'
import { gql, useQuery } from "@apollo/client";
import { UserByIdQuery, UserByIdQueryVariables } from "../../gql/graphql";

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
  const Id = "436b2e94-6df5-44b4-8c72-077eb608c0e3"
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
    <View style={styles.pageCtn}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <View style={styles.texte}>
            <Text style={styles.title}>Mes challenges</Text>
            <Text style={styles.subtitle}>En cours</Text>
            <View style={styles.separation} />
          </View>
          <View style={styles.blocCtn}>
            {/* <View style={styles.bloc}> */}
            <View>
              {challenges && challenges.length > 0 && challenges.map((challenge) => (
                <>
                  <InfoChallenge
                    challenge={challenge}
                    key={challenge?.id}
                  />
                </>
              ))}
              <Theme />
            </View>
            {/* </View> */}
          </View>
        </View>
        {/* {teams?.map((team) => (
          <CompletedChallenge
            teamName={team?.team}
          />
        ))} */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageCtn: {
    flex: 1,
    justifyContent: 'space-around',
  },
  pages: {
    height: '100%',
  },
  flex: {
    height: '79%',
    justifyContent: 'space-around',
  },
  texte: {
    width: 130,
    height: 70,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 52
  },
  separation: {
    width: 60,
    height: 2,
    backgroundColor: "#7BE07E",
    marginRight: 45
  },
  blocCtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});