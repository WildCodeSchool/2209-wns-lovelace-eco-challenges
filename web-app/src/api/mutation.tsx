import { gql } from "@apollo/client";

export const SIGN_UP = gql`
    mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!) {
        signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password) {
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