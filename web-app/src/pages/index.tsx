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
import { type SSRConfig } from "next-i18next";

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
    <div className="index">
      <div className="index-header">
        <div>
          <div className="header-div">
            <h2 className="header-title">{t("app.name")}</h2>
            <p className="header-subtitle">{t("home.title")}</p>
            <p className="header-subtitle">{t("home.subtitle")}</p>
            <div className="header-buttons">
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
      <div className="main-section">
        <div className="concept-section">
          {cardLogo.map((element, index) => (
            <div className="concept-card" key={index}>
              <div className="w-20">
                <Image src={element.source} alt="alt" />
              </div>
              <div className="font-bold text-lg">
                <p>{t(element.text)}</p>
              </div>
            </div>
          ))}
          <div className="concept-card text-center">
            <p className="my-3 xl:text-start">{t("home.whitecard.subtitle")}</p>
            <Button type="button-primary" name={t("home.button.discover")} />
          </div>
        </div>
        <div className="presentation-section">
          <div className="w-11/12">
            <h3 className="presentation-come">{t("home.come")}</h3>
            <p className="presentation-title">{t("home.greencard.title")}</p>
            <div className="flex flex-wrap justify-around">
              {greenCardLogo.map((element, index) => (
                <div className="presentation-card" key={index}>
                  <div className="w-20 relative">
                    <Image src={element.source} alt="alt" />
                  </div>
                  <p className="text-center">{t(element.text)}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center flex-col">
              <Button
                icon={
                  <LaunchChallenge width="20px" height="20px" fill={PRIMARY} />
                }
                type="button-secondary"
                name={t("home.button.startchallenge")}
                onClickEvent={() => router.push("/formlaunchchallenge")}
              />
            </div>
          </div>
        </div>
        <div className="challenges-section">
          <h3 className="mb-1 font-bold text-2xl">
            {t("home.actualchallenge")}
          </h3>
          <div className="h-2 w-20 mb-7 bg-primary text-center"></div>
          <div className="flex items-center justify-around flex-wrap">
            <List src={challenges} />
          </div>
          <Link href="/challenges">
            <h2 className="challenges-seemore">
              {t("home.seemore")}
              <i>
                <ArrowLinkTo width="50px" height="50px" fill={PRIMARY} />
              </i>
            </h2>
          </Link>
        </div>
        <div className="partners-section">
          <h3 className="mb-1 font-bold text-2xl">{t("home.partners")}</h3>
          <div className="h-2 w-20 mb-7 bg-primary"></div>
          <div className="flex flex-wrap items-center justify-around">
            {partnersLogo.map((element, index) => (
              <div
                className="w-1/4 m-4 md:w-1/6 lg:w-1/12 xl:w-[5%]"
                key={index}
              >
                <Image src={element.source} alt="alt" />
              </div>
            ))}
          </div>
          <i className="flex justify-end">
            <Partners width="100px" height="100px" fill={PRIMARY} />
          </i>
        </div>
        <div className="versions-section">
          <div className="mb-4 flex items-center justify-center flex-col">
            <TiltedLabel>{t("home.free")}</TiltedLabel>
            {versionFreeText.map((element, index) => (
              <VersionsLine key={index} text={element} />
            ))}
          </div>
          <div className="flex items-center justify-center flex-col">
            <TiltedLabel>{t("home.premium")}</TiltedLabel>
            <p className="text-center mb-5">{t("home.versionsubtitle")}</p>
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
