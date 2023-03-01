import { gql, useQuery } from "@apollo/client";
import {
  GetChallengeByIdQueryVariables,
  GetChallengeByIdQuery,
} from "../../gql/graphql";
import { useParams } from "react-router-dom";
import { CHALLENGE } from "../../gql/query";

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
