import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { client } from "@api/apolloClient";
import { CHALLENGES } from "@api/queries";

import Button from "@shared/Buttons/Button";
import VersionsLine from "@shared/Lines/VersionsLine";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import ArrowLinkTo from "@assets/logos/ArrowLinkTo";
import Partners from "@assets/logos/Partners";
import List from "@shared/List/List";
import TiltedLabel from "@shared/TiltedLabel/TiltedLabel";

import {
  partnersLogo,
  versionFreeText,
  versionPremiumText,
  cardLogo,
  greenCardLogo,
} from "@data/HomePageData";

import { PRIMARY } from "@constants/color";
import { type NextI18NContext } from "@customTypes/types";
import { type Challenge } from "@gql/graphql";
import { type SSRConfig } from "@customTypes/i18next";

const pageNumber = 1;
const itemsByPage = 3;

type Props = {
  challenges: Challenge[];
  locale: string;
  _nextI18Next: SSRConfig;
};

const Index = (props: Props): JSX.Element => {
  const { challenges } = props;
  const router = useRouter();
  const { t } = useTranslation(["home", "page"]);

  return (
    <div className="home-page">
      <div
        className="bg-[url('../src-frontend/assets/images/imageHeader.webp')]
          h-80
          relative
          bg-auto
          bg-no-repeat
          xl:h-[500px]
          bg-[#f8f8f8]
          "
      >
        <div>
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
      </div>
      <div
        className="bg-white flex
          items-center
          justify-center
          flex-col
          flex-wrap
          lg:flex-row
          lg:justify-around
          xl:justify-center"
      >
        <div
          className="flex
            items-center
            justify-center
            flex-col
            border-solid
            border-4
            border-primary
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
              <div
                className="flex
              items-center
              justify-center
              flex-col"
                key={index}
              >
                <div className="w-20">
                  <Image src={element.source} alt="alt" />
                </div>
                <div className="font-bold text-lg">
                  <p>{t(element.text)}</p>
                </div>
              </div>
            );
          })}
          <div
            className="flex
              items-center
              justify-center
              flex-col text-center"
          >
            <p className="my-3 xl:text-start">{t("home.whitecard.subtitle")}</p>
            <Button type="button-primary" name={t("home.button.discover")} />
          </div>
        </div>
        <div
          className="flex
            items-center
            justify-center
            flex-col
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
            <h3
              className="mb-1
                font-bold
                text-2xl text-white"
            >
              {t("home.come")}
            </h3>
            <div
              className="h-2
                w-20
                mb-7"
            ></div>
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
                  className="flex
                    items-center
                    justify-center
                    flex-col
                    bg-white
                    rounded-lg
                    p-5
                    m-5
                    shadow-xl
                    flex-[33%]
                    lg:flex-[34%]"
                >
                  <div className="w-20">
                    <Image src={element.source} alt="alt" />
                  </div>
                  <p className="text-center">{t(element.text)}</p>
                </div>
              ))}
            </div>
            <div
              className="flex
                items-center
                justify-center
                flex-col"
            >
              <Button
                icon={
                  <LaunchChallenge width="20px" height="20px" fill={PRIMARY} />
                }
                type="button-secondary"
                name={t("home.button.startchallenge")}
                onClickEvent={() => router.push("/launch-challenge")}
              />
            </div>
          </div>
        </div>
        <div
          className="my-7
            w-11/12"
        >
          <h3
            className="mb-1
              font-bold
              text-2xl"
          >
            {t("home.actualchallenge")}
          </h3>
          <div
            className="h-2
              w-20
              mb-7
              bg-primary
              text-center"
          ></div>
          <div
            className="flex
              items-center
              justify-center
              flex-col
              px-4
              flex-wrap
              md:flex-row
              md:justify-around
              md:items-baseline"
          >
            {challenges.map((element, index) => (
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
          <Link href="/challenges">
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
          <h3
            className="mb-1
              font-bold
              text-2xl"
          >
            {t("home.partners")}
          </h3>
          <div
            className="h-2
              w-20
              mb-7
              bg-primary"
          ></div>
          <div
            className="flex
              flex-wrap
              items-center
              justify-around"
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
                <Image src={element.source} alt="alt" />
              </div>
            ))}
          </div>
          <i className="flex justify-end">
            <Partners width="100px" height="100px" fill={PRIMARY} />
          </i>
        </div>
        <div
          className="flex
            items-center
            justify-center
            flex-col
            my-7
            lg:flex-row
            lg:justify-around
            lg:w-full
            xl:items-start"
        >
          <div
            className="mb-4 flex
              items-center
              justify-center
              flex-col"
          >
            <TiltedLabel>{t("home.free")}</TiltedLabel>
            {versionFreeText.map((element, index) => (
              <VersionsLine key={index} text={element} />
            ))}
          </div>
          <div
            className="flex
              items-center
              justify-center
              flex-col"
          >
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
    </div>
  );
};

export async function getServerSideProps(context: NextI18NContext) {
  
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  const { data } = await client.query({
    query: CHALLENGES,
    variables: { itemsByPage, pageNumber },
  });

  const { challenges } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "page"])),
      challenges: challenges ?? [],
      locale,
    },
  };
}

export default Index;
