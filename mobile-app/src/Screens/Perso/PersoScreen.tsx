import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Notifs from '../../Shared/components/perso/Notifcations/Notifs';
import Space from '../../Shared/components/perso/Space/Space';
import { gql, useQuery } from "@apollo/client";
import { UserByIdQuery, UserByIdQueryVariables } from "../../gql/graphql";
import Challenge from '../../Shared/components/perso/Challenge/Challenge';

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

const PersoScreen = () => {
  const Id = "42924e77-b6bd-48ec-abd9-6b6ffe4cef67"
  const { data } = useQuery<UserByIdQuery, UserByIdQueryVariables
  >(GET_USERSBYID, {
    variables: { Id },
    fetchPolicy: "cache-and-network",
  });
  const users = data?.userById;
  return (
    <View style={styles.pageCtn}>
      <View style={styles.pages}>
        <View style={styles.flex}>
          <>
            <Space
              name={users?.firstName}
              lastName={users?.lastName}
            />
            <Notifs />
            <Challenge />
          </>
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

export default PersoScreen