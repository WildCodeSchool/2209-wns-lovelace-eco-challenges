import {
  GetChallengesQuery,
  GetChallengesQueryVariables,
} from "../../gql/graphql";
import { gql, useQuery } from "@apollo/client";

import Button from "../../Shared/Buttons/Button";
import DownArrow from "../../assets/logos/DownArrow";
import List from "../../Shared/List/List";
import Loader from "../../Shared/Loader/Loader";

import { PRIMARY } from "../../Shared/Constants/Color";

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

const pageNumber = 1;
const itemsByPage = 6;

const Challenges = () => {
  const { data, loading, error, refetch } = useQuery<
    GetChallengesQuery,
    GetChallengesQueryVariables
  >(CHALLENGES, {
    variables: { itemsByPage, pageNumber },
    fetchPolicy: "cache-and-network",
  });

  return (
    <div className="my-7
    custom-flex-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-11/12">
            <h2 className="subtitle">Les challenges</h2>
            <div className="custom-underline bg-primary"></div>
            <p className="text-center xl:text-start">
              Trouver votre prochain challenge parmis une large sélection/nos
              propositions, thèmes variés, en fonction des saisons, de vos
              objectifs et aspirations.{" "}
            </p>
            <p className="text-center xl:text-start">
              Créez vos propres challenges avec notre version premium !{" "}
              <span className="text-blue-600">En savoir plus</span>
            </p>
          </div>
          <div className="w-11/12
      m-7
      text-center
      xl:text-start">
            <input
              className="search"
              type="text"
              placeholder="TODO..."
            />
          </div>
          <div className="ustom-flex-center
      w-11/12
      flex-wrap
      md:flex-row
      md:justify-around
      md:items-baseline">
            {data?.challenges?.map((element, index) => (
              <List
                key={index}
                title={element.challengeName}
                source={element.img}
                description={element.description}
                endAt={element.endAt}
                level={element.level}
                id={element.id}
              />
            ))}
          </div>
          <div className="custom-flex-center m-7">
            <Button
              name="Plus de challenges"
              type="button-secondary"
              icon={<DownArrow width="20px" height="20px" fill={PRIMARY} />}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Challenges;
