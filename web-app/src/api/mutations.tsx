import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
  mutation CreateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $img: String) {
    createTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, img: $img) {
      id
      teamName
    }
}
`;

export const UPDATE_CHALLENGE = gql`
  mutation UpdateDatesChallenge($id: ID!, $startsAt: DateTime!, $endAt: DateTime) {
    updateDatesChallenge(id: $id, startsAt: $startsAt, endAt: $endAt) {
      id
      startsAt
      endAt
    }
  }
`;

export const ADD_CHALLENGE_TO_TEAM = gql`
  mutation AddChallengeToTeam($challengeId: String!, $teamId: String!) {
    addChallengeToTeam(challengeId: $challengeId, teamId: $teamId) {
      teamName
      challenges {
        challengeName
      }
    }
  }
`;