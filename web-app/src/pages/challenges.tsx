import { useState } from "react";
import { type Challenge } from "@gql/graphql";
import { CHALLENGES } from "@api/queries";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SSRConfig, useTranslation } from "next-i18next";
import List from "@shared/List/List";
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import Button from "@shared/Buttons/Button";
import { useQuery } from "@apollo/client";
import { GetChallengesQuery } from "@gql/graphql";

type Props = {
  challenges: Challenge[];
  locale: string;
  _nextI18next: SSRConfig;
};

const Challenges = (props: Props): JSX.Element => {
  const { t } = useTranslation("challenges");

  const pageNumber = 1;
  const itemsByPage = 9;

  const [itemsShown, setItemsShown] = useState(6);

  const { data, error, refetch } = useQuery<GetChallengesQuery>(CHALLENGES, {
    variables: { pageNumber, itemsByPage },
  });

  const challenges = data?.challenges || [];

  return (
    <div className="flex items-center flex-col">
      <div className="w-11/12">
        <h2 className="challenges-title">{t("challenges.title")}</h2>
        <div className="custom-underline bg-primary"></div>
        <p className="py-5 text-center xl:text-start">
          {t("challenges.subtitle")}
        </p>
        <p className="py-5 text-center xl:text-start">
          {t("challenges.proposal")}
          <span className="text-blue-600">{t("challenges.seemore")}</span>
        </p>
      </div>
      <div className="challenges-list">
        <List src={challenges} itemsPerPage={itemsShown} />
      </div>
      <div className="flex-center-center flex-col m-7">
        <Button
          name={t("challenges.morechallenges")}
          type="button-secondary"
          onClickEvent={() => setItemsShown(itemsShown + 3)}
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

  return {
    props: {
      ...(await serverSideTranslations(locale, ["challenges", "page"])),
      locale,
    },
  };
}

export default Challenges;
