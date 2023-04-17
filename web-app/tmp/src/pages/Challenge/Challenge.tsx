import { gql, useQuery } from "@apollo/client";
import {
  GetChallengeByIdQueryVariables,
  GetChallengeByIdQuery,
} from "../../gql/graphql";
import { useParams } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import Image from "../../Shared/Images/Image";
import List from "../../Shared/List/List";
import Button from "../../Shared/Buttons/Button";
import LaunchChallenge from "../../assets/logos/LaunchChallenge";
import { WHITE } from "../../Shared/Constants/Color";

export const CHALLENGE = gql`
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
      teams {
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
`;

const Challenge = () => {
  const id = useParams().id as string;

  const { data, loading, error, refetch } = useQuery<
    GetChallengeByIdQuery,
    GetChallengeByIdQueryVariables
  >(CHALLENGE, { variables: { id }, fetchPolicy: "cache-and-network" });

  if (null === data || undefined === data) {
    return (
      <div className="custom-flex-center">
        <Loader />
      </div>
    );
  }

  const { challengeById } = data;

  console.log(challengeById?.teams?.map((element) => element.img));

  return (
    <div className="custom-flex-center my-10">
      {loading ? (
        <div className="custom-flex-center">
          <Loader />
        </div>
      ) : (
        <>
          <List
            description={challengeById?.description}
            title={challengeById?.challengeName}
            source={challengeById?.img}
            endAt={challengeById?.endAt}
            level={challengeById?.level}
          />
          <Button
            name="Lancer le challenge"
            type="button-primary"
            icon={<LaunchChallenge width="20px" height="20px" fill={WHITE} />}
          />
          <div className="block w-11/12">
            <h2 className="text-2xl">Teams</h2>
            <div className="flex justify-around">
              {challengeById?.teams?.map((element, index) => (
                <div className="w-2/5" key={index}>
                  <Image source={element.img} />
                  <h3>{element.teamName}</h3>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Challenge;
