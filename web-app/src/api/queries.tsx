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
export const GET_USERSBYID = gql`
query userById($id: String!) {
  userById(id: $id) {
    id
    lastName
    firstName
    email
    country
    desc
    age
    city
    nickname
    score
    hobbies
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
        challengeToTeams {
          challenge {
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
}
`;


export const GET_PROFILE = gql`
  query MyProfile {
    myProfile {
      nickname
      city
      country
      email
      firstName
      hobbies
      id
      img
      isVerified
      lastName
      score
      userToTeams {
        team {
          city
          country
          id
          teamName
          challengeToTeams {
            challenge {
              challengeName
              category
              img
            }
            startsAt
            endAt
          }
        }
      }
    }
  }
`