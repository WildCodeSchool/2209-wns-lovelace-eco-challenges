import { Link, useNavigate } from "react-router-dom";

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
import { useTranslation } from "react-i18next";

import {
  partnersLogo,
  versionFreeText,
  versionPremiumText,
  cardLogo,
  greenCardLogo,
} from "../../data/HomePageData";

import { PRIMARY } from "../../Shared/Constants/Color";
import TiltedLabel from "../../Shared/TiltedLabel/TiltedLabel";

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
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery<
    GetChallengesQuery,
    GetChallengesQueryVariables
  >(CHALLENGES, {
    variables: { pageNumber, itemsByPage },
    fetchPolicy: "cache-and-network",
  });

  const { t } = useTranslation();

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
              <h2 className="home-title">{t("app.name")}</h2>
              <p className="home-subtitle">{t("home.title")}</p>
              <p className="home-subtitle">{t("home.subtitle")}</p>
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
              {cardLogo.map((element, index) => {
                return (
                  <div className="custom-flex-center" key={index}>
                    <div className="w-20">
                      <img src={element.source} alt="alt" />
                    </div>
                    <div className="font-bold text-lg">
                      <p>{t(element.text)}</p>
                    </div>
                  </div>
                );
              })}
              <div className="custom-flex-center text-center">
                <p className="my-3 xl:text-start">
                  {t("home.whitecard.subtitle")}
                </p>
                <Button type="button-primary" name={t('home.button.discover')} />
              </div>
            </div>
            <div className="green-card">
              <div className="w-11/12">
                <h3 className="subtitle text-white">{t("home.come")}</h3>
                <div className="custom-underline bg-white"></div>
                <p className="green-card-subtext">
                  {t("home.greencard.title")}
                </p>
                <div className="green-card-display">
                  {greenCardLogo.map((element, index) => (
                    <div key={index} className="green-card-box">
                      <div className="w-20">
                        <img src={element.source} alt="alt" />
                      </div>
                      <p className="text-center">{t(element.text)}</p>
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
                    name={t('home.button.startchallenge')}
                    onClickEvent={()=> navigate("/launch-challenge")}
                  />
                </div>
              </div>
            </div>
            <div className="challenge">
              <h3 className="subtitle">{t("home.actualchallenge")}</h3>
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
                  {t("home.seemore")}
                  <i>
                    <ArrowLinkTo width="50px" height="50px" fill={PRIMARY} />
                  </i>
                </h2>
              </Link>
            </div>
            <div className="gray-card">
              <h3 className="subtitle">{t("home.partners")}</h3>
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
                <TiltedLabel>{t("home.free")}</TiltedLabel>
                {versionFreeText.map((element, index) => (
                  <VersionsLine key={index} text={element} />
                ))}
              </div>
              <div className="custom-flex-center">
                <TiltedLabel>{t("home.premium")}</TiltedLabel>
                <p className="versions-subtitle">
                  {t("home.versionsubtitle")}
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
