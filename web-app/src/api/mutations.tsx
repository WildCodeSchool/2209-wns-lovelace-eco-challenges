import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
  mutation CreateTeam(
    $teamName: String!
    $city: String!
    $country: String!
    $isPublic: Boolean!
    $img: String
  ) {
    createTeam(
      teamName: $teamName
      city: $city
      country: $country
      isPublic: $isPublic
      img: $img
    ) {
      id
      teamName
    }
  }
`;

export const CREATE_USER_TO_TEAM = gql`
  mutation CreateUserToTeam(
    $teamId: ID!
    $userEmail: String!
    $userRole: UserRole!
  ) {
    createUserToTeam(
      teamId: $teamId
      userEmail: $userEmail
      userRole: $userRole
    ) {
      team {
        teamName
      }
      userRole
      user {
        email
      }
    }
  }
`;

export const ADD_CHALLENGE_TO_TEAM = gql`
  mutation CreateChallengeToTeam(
    $teamId: ID!
    $challengeId: ID!
    $startsAt: DateTime!
    $endAt: DateTime!
  ) {
    createChallengeToTeam(
      teamId: $teamId
      challengeId: $challengeId
      startsAt: $startsAt
      endAt: $endAt
    ) {
      id
      challenge {
        challengeName
      }
      startsAt
      endAt
      team {
        teamName
      }
    }
  }
`;
