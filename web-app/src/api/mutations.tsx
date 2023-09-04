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
    $challengeName: String
  ) {
    createUserToTeam(
      teamId: $teamId
      userEmail: $userEmail
      userRole: $userRole
      challengeName: $challengeName
    ) {
        team {
          teamName
          challengeToTeams {
            challenge {
              challengeName
            }
          }
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



export const SIGN_UP = gql`
    mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!, $age: Float!, $desc: String!) {
        signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password, age: $age, desc: $desc) {
            id
            email
            firstName
            lastName
            nickname
            score
            disabled
            city
            country
            img
            hobbies
            isVerified
            desc
            age
        }
    }
`

export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($userId: String!, $newPassword: String!) {
    changePassword(userId: $userId, newPassword: $newPassword) {
        id
        email
        firstName
        lastName
        nickname
        score
        disabled
        city
        country
        isVerified
    }
    }
`

export const ASK_CHANGE_PASSWORD = gql`
    mutation AskChangePassword($email: String!) {
        askChangePassword(email: $email)
    }
`

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;
