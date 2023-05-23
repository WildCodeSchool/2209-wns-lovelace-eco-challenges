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
    }
  }
`;

export const CHALLENGE_DETAIL = gql`
  query GetChallengeById($id: String!) {
    challengeById(id: $id) {
      id
      img
      challengeName
      description
      category
      level
      startsAt
      endAt
      challengeToTeams {
        startsAt
        endAt
        team {
          id
          teamName
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
  }
`;

export const CHALLENGES_LIGHT = gql`
  query GetChallengesLight {
    challengesLight {
      challengeName
      id
      level
      category
    }
  }
`;
