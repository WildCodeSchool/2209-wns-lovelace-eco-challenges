import { gql } from "@apollo/client";

export const CHALLENGES = gql`
  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {
    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
      id
      challengeName
      description
      level
      category
      startsAt
      endAt
      img
      teams {
        id
        teamName
        city
        country
        isPublic
        img
        userToTeams {
          userRole
          user {
            nickname
          }
        }
      }
    }
  }
`;

export const CHALLENGE = gql`
  query GetChallengeById($id: String!) {
    challengeById(id: $id) {
      id
      challengeName
      description
      category
      level
      startsAt
      endAt
      teams {
        id
        teamName
        userToTeams {
          userRole
          user {
            nickname
          }
        }
      }
    }
  }
`;