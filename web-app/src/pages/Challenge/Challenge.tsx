import { gql, useQuery } from "@apollo/client";
import {
  GetChallengeByIdQueryVariables,
  GetChallengeByIdQuery,
} from "../../gql/graphql";
import { useParams } from "react-router-dom";

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

const Challenge = () => {
  const id = useParams().id as string;

  const { data, loading, error, refetch } = useQuery<
    GetChallengeByIdQuery,
    GetChallengeByIdQueryVariables
  >(CHALLENGE, { variables: { id }, fetchPolicy: "cache-and-network" });

  return (
    <>
      <h2>{data?.challengeById.challengeName}</h2>
    </>
  );
};

export default Challenge;
