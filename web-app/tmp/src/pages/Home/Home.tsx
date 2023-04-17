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
          <div
            className="bg-[url('../assets/images/imageHeader3.webp')]
              h-80
              relative
              bg-auto
              bg-no-repeat
              xl:h-[500px]
              bg-[#f8f8f8]
              "
          >
            <div
              className="text-white
                absolute
                left-1/2
                top-1/2
                w-11/12
                bg-transparent
                rounded-xl
                -translate-x-2/4
                -translate-y-2/4"
            >
              <h2
                className="text-2xl
                  text-center
                  font-bold
                  text-primary
                  xl:text-6xl"
              >
                {t("app.name")}
              </h2>
              <p
                className="text-center
                  text-primary
                  md:text-xl
                  xl:text-2xl"
              >
                {t("home.title")}
              </p>
              <p
                className="text-center
                  text-primary
                  md:text-xl
                  xl:text-2xl
                  mix-blend-difference"
              >
                {t("home.subtitle")}
              </p>
              <div
                className="m-3
                  flex
                  justify-around
                  md:hidden"
              >
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
          <div
            className="custom-flex-center
              flex-wrap
              lg:flex-row
              lg:justify-around
              xl:justify-center"
          >
            <div
              className="custom-flex-center
                custom-border-primary
                w-3/4
                p-2
                rounded-lg
                my-7
                shadow-xl
                sm:w-2/3
                lg:w-5/12
                lg:h-[570px]
                lg:justify-between
                xl:w-1/3
                xl:mr-10"
            >
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
                <Button
                  type="button-primary"
                  name={t("home.button.discover")}
                />
              </div>
            </div>
            <div
              className="custom-flex-center
                bg-primary
                py-7
                w-full
                shadow-xl
                justify-between
                lg:w-5/12
                lg:rounded-lg
                lg:p-2
                lg:bg-primary
                lg:h-[570px]
                xl:justify-end
                xl:w-1/3
                xl:ml-10"
            >
              <div className="w-11/12">
                <h3 className="subtitle text-white">{t("home.come")}</h3>
                <div className="custom-underline bg-white"></div>
                <p
                  className="text-center
                    text-white
                    xl:text-start"
                >
                  {t("home.greencard.title")}
                </p>
                <div
                  className="flex
                    flex-wrap
                    justify-around"
                >
                  {greenCardLogo.map((element, index) => (
                    <div
                      key={index}
                      className="custom-flex-center
                        bg-white
                        rounded-lg
                        p-5
                        m-5
                        shadow-xl
                        flex-[33%]
                        lg:flex-[34%]"
                    >
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
                    name={t("home.button.startchallenge")}
                    onClickEvent={() => navigate("/launch-challenge")}
                  />
                </div>
              </div>
            </div>
            <div
              className="my-7
                w-11/12"
            >
              <h3 className="subtitle">{t("home.actualchallenge")}</h3>
              <div className="custom-underline bg-primary text-center"></div>
              <div
                className="custom-flex-center
                  px-4
                  flex-wrap
                  md:flex-row
                  md:justify-around
                  md:items-baseline"
              >
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
                <h2
                  className="font-bold
                    text-center
                    text-xl
                    flex
                    justify-center
                    items-center
                    pt-2
                    xl:justify-start"
                >
                  {t("home.seemore")}
                  <i>
                    <ArrowLinkTo width="50px" height="50px" fill={PRIMARY} />
                  </i>
                </h2>
              </Link>
            </div>
            <div
              className="bg-gray-100
                rounded-lg
                w-11/12
                px-7
                pt-7
                shadow-xl"
            >
              <h3 className="subtitle">{t("home.partners")}</h3>
              <div className="custom-underline bg-primary"></div>
              <div
                className="flex
                  flex-wrap
                  items-center
                  justify-arounds"
              >
                {partnersLogo.map((element, index) => (
                  <div
                    key={index}
                    className="w-1/4
                      m-4
                      md:w-1/6
                      lg:w-1/12
                      xl:w-[5%]"
                  >
                    <img src={element.source} alt="alt" />
                  </div>
                ))}
              </div>
              <i className="flex justify-end">
                <Partners width="100px" height="100px" fill={PRIMARY} />
              </i>
            </div>
            <div
              className="custom-flex-center
                my-7
                lg:flex-row
                lg:justify-around
                lg:w-full
                xl:items-start"
            >
              <div className="mb-4 custom-flex-center">
                <TiltedLabel>{t("home.free")}</TiltedLabel>
                {versionFreeText.map((element, index) => (
                  <VersionsLine key={index} text={element} />
                ))}
              </div>
              <div className="custom-flex-center">
                <TiltedLabel>{t("home.premium")}</TiltedLabel>
                <p
                  className="text-center
                    mb-5"
                >
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
