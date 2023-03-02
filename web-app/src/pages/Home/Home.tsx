import { Link } from "react-router-dom";

import {
  GetChallengesQuery,
  GetChallengesQueryVariables,
} from "../../gql/graphql";
import { gql, useQuery } from "@apollo/client";

import Button from "../../Shared/Buttons/Button";
import VersionsLine from "../../Shared/Lines/VersionsLine";
import LaunchChallenge from "../../assets/logos/LaunchChallenge";
import ArrowLinkTo from "../../assets/logos/ArrowLinkTo";
import Partners from "../../assets/logos/Partners";
import List from "../../Shared/List/List";
import Loader from "../../Shared/Loader/Loader";

import {
  partnersLogo,
  versionFreeText,
  versionPremiumText,
  cardLogo,
  greenCardLogo,
} from "../../data/HomePageData";

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
const itemsByPage = 3;

const Home = () => {
  const { data, loading, error, refetch } = useQuery<
    GetChallengesQuery,
    GetChallengesQueryVariables
  >(CHALLENGES, {
    variables: { pageNumber, itemsByPage },
    fetchPolicy: "cache-and-network",
  });

  return (
    <div className="home-page">
      {loading ? (
        <div className="custom-flex-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="home-image">
            <div className="home-text">
              <h2 className="home-title">Eco Playground</h2>
              <p className="home-subtitle">
                le premier réseau social et plateforme de jeu écolo
              </p>
              <p className="home-subtitle">
                Inscrivez-vous gratuitement, créez des groupes, invitez vos
                amis, lancez des challenges écologiques et jouez !
              </p>
              <div className="buttons">
                <Button
                  type="button-primary"
                  name="S'inscrire"
                  size="min-w-[140px]"
                />
                <Button
                  type="button-primary"
                  name="Se connecter"
                  size="min-w-[140px]"
                />
              </div>
            </div>
          </div>
          <div className="home-page">
            <div className="card">
              {cardLogo.map((element, index) => (
                <div className="custom-flex-center" key={index}>
                  <div className="w-20">
                    <img src={element.source} alt="alt" />
                  </div>
                  <div className="font-bold text-lg">
                    <p>{element.text}</p>
                  </div>
                </div>
              ))}
              <div className="custom-flex-center text-center">
                <p className="my-3 xl:text-start">
                  Nous vous proposons des challenges écologiques à partager avec
                  vos amis et/ou inconnus, que le meilleur gagne, avec un
                  maximum de points !
                </p>
                <Button type="button-primary" name="Découvrir le concept" />
              </div>
            </div>
            <div className="green-card">
              <div className="w-11/12">
                <h3 className="subtitle text-white">Venez comme vous êtes !</h3>
                <div className="custom-underline bg-white"></div>
                <p className="green-card-subtext">
                  Association, entreprises ou bien particuliers, venez donc
                  créer un groupe et un challenge afin de jouer immédiatemment
                  avec vos amis !
                </p>
                <div className="green-card-display">
                  {greenCardLogo.map((element, index) => (
                    <div key={index} className="green-card-box">
                      <div className="w-20">
                        <img src={element.source} alt="alt" />
                      </div>
                      <p className="text-center">{element.text}</p>
                    </div>
                  ))}
                </div>
                <div className="custom-flex-center">
                  <Button
                    icon={
                      <LaunchChallenge
                        width="20px"
                        height="20px"
                        fill={PRIMARY}
                      />
                    }
                    type="button-secondary"
                    name="Lancer un challenge"
                  />
                </div>
              </div>
            </div>
            <div className="challenge">
              <h3 className="subtitle">Challenges en cours</h3>
              <div className="custom-underline bg-primary text-center"></div>
              <div className="challenge-box">
                {data?.challenges?.map((element, index) => (
                  <List
                    key={index}
                    id={element.id}
                    description={element.description}
                    title={element.challengeName}
                    source={element.img}
                    endAt={element.endAt}
                    level={element.level}
                  />
                ))}
              </div>
              <Link to="/challenges">
                <h2 className="see-more-title">
                  Voir les autres challenges en cours
                  <i>
                    <ArrowLinkTo width="50px" height="50px" fill={PRIMARY} />
                  </i>
                </h2>
              </Link>
            </div>
            <div className="gray-card">
              <h3 className="subtitle">Nos partenaires</h3>
              <div className="custom-underline bg-primary"></div>
              <div className="gray-card-partners">
                {partnersLogo.map((element, index) => (
                  <div key={index} className="gray-card-logos">
                    <img src={element.source} alt="alt" />
                  </div>
                ))}
              </div>
              <i className="flex justify-end">
                <Partners width="100px" height="100px" fill={PRIMARY} />
              </i>
            </div>
            <div className="versions">
              <div className="mb-4 custom-flex-center">
                <p className="versions-title">Version 100% gratuite</p>
                {versionFreeText.map((element, index) => (
                  <VersionsLine key={index} text={element} />
                ))}
              </div>
              <div className="custom-flex-center">
                <p className="versions-title">Version Premium</p>
                <p className="versions-subtitle">
                  Créée et pensée pour répondre aux besoins spécifiques des
                  entreprises
                </p>
                {versionPremiumText.map((element, index) => (
                  <VersionsLine key={index} text={element} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
