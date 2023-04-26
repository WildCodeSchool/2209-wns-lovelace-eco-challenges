import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
  mutation CreateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $img: String) {
    createTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, img: $img) {
      teamName
      city
      country
      isPublic
      img
    }
}
`;