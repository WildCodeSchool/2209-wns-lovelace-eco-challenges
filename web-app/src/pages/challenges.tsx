import { type Challenge } from "@gql/graphql";
import { CHALLENGES } from "@api/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { client } from "@api/apolloClient";
import { useTranslation } from "next-i18next";

import DownArrow from "@assets/logos/DownArrow";
import List from "@shared/List/List";

import { PRIMARY } from "@constants/color";
import { type NextI18NContext } from "@customTypes/types";
import { type SSRConfig } from "next-i18next";
import ButtonExpend from "@shared/Buttons/ButtonExpend";

const pageNumber = 1;
const itemsByPage = 6;

type Props = {
  challenges: Challenge[];
  locale: string;
  _nextI18next: SSRConfig;
};

const Challenges = (props: Props): JSX.Element => {
  const { challenges } = props;
  const { t } = useTranslation("challenges");

  const challenge = challenges[0];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-11/12">
        <h2>{t("challenges.title")}</h2>
        <div className="custom-underline bg-primary"></div>
        <p className="text-center xl:text-start">{t("challenges.subtitle")}</p>
        <p className="text-center xl:text-start">
          {t("challenges.proposal")}
          <span className="text-blue-600">{t("challenges.seemore")}</span>
        </p>
      </div>
      <div className="default-width m-7 text-center xl:text-start">
        <input className="search" type="text" placeholder="TODO..." />
      </div>
      <List src={challenges} />
      <div className="flex-center-center flex-col m-7">
        <ButtonExpend
          name={t("challenges.morechallenges")}
          type="button-secondary"
          icon={<DownArrow width="20px" height="20px" fill={PRIMARY} />}
          img={challenge.img || "https://picsum.photos/400/250"}
          challengeName={challenge.challengeName}
          date={challenge.endAt}
          desc={challenge.description}
        />
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
    variables: { pageNumber, itemsByPage },
  });

  const { challenges } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["challenges", "page"])),
      challenges: challenges ?? [],
      locale,
    },
  };
}

export default Challenges;
