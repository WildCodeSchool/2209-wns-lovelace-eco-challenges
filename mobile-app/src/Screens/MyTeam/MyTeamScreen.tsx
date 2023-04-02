import { Image, StyleSheet, Text, View } from "react-native";
import InfoTeam from '../../Shared/components/team/InfoTeam';
import Friends from '../../Shared/components/team/Friends'
import TeamChallenge from "../../Shared/components/team/TeamChallenge";
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

const MyTeamScreen = () => {
  const Id = "98c27cf1-8b6b-48a0-a7da-1ca47d9424eb"
  const { data, } = useQuery<UserByIdQuery, UserByIdQueryVariables
  >(GET_USERSBYID, {
    variables: { Id },
    fetchPolicy: "cache-and-network",
  });
  const teams = data?.userById.userToTeams;
  return (
    <View style={styles.pageCtn}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <View style={styles.texte}>
            <View style={styles.texteFlex}></View>
            <Text style={styles.title}>Mes teams</Text>
          </View>
          <View style={styles.blocCtn}>
            <View style={styles.bloc}>
              <>
                {teams?.map((team) => (
                  <>
                    <InfoTeam
                      teamName={team.team}
                      key={team.team.id}
                    />
                    <Friends />
                  </>
                ))}
                <View style={styles.separation} />
                {/* {teams && teams.forEach(team => team.team.challenges?.map(challenge =>
                  <TeamChallenge
                    key={challenge.id}
                    challengeName={challenge}
                  />
                ))} */}
                <View style={styles.challengeBloc}>
                  <View style={styles.ctnTxt}>
                    <Text>Challenge en cours</Text>
                  </View>
                  <View style={styles.challenge}>
                    <View style={styles.name}>
                      <Text>Team Barcelone</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.separation} />
                <View style={styles.img}>
                  <Image style={styles.image} source={require('../../../assets/icons/25.png')} />
                  <Image style={styles.image} source={require('../../../assets/icons/10.png')} />
                </View>
              </>
            </View>
          </View>
        </View>
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
    justifyContent: 'space-around',
  },
  texte: {
    width: 102,
    height: 86,
    alignItems: "flex-end",
  },
  texteFlex: {
    width: '30%',
    height: '10%'
  },
  title: {
    fontSize: 13,
    fontWeight: "bold"
  },
  blocCtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  bloc: {
    width: '60%',
    borderColor: "#3B8574",
    borderWidth: 1,
    borderRadius: 10,
    height: 420
  },
  separation: {
    width: 200,
    height: 1,
    backgroundColor: "#7BE07E",
    marginLeft: 22
  },
  img: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10,
    width: '50%',
    justifyContent: "space-around"
  },
  image: {
    width: 50,
    height: 50
  },
  challengeBloc: {
    width: "100%",
    height: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  challenge: {
    height: 65,
    width: 90,
    borderColor: "#3B8574",
    borderWidth: 1,
    borderRadius: 5,
  },
  ctnTxt: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    height: "20%",
    top: 50,
    borderTopColor: "black",
    borderTopWidth: 1,
    borderColor: "#3B8574",
  }
});

export default MyTeamScreen