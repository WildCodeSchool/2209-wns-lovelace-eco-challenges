import { gql, useQuery } from "@apollo/client";
import {
  GetChallengeByIdQueryVariables,
  GetChallengeByIdQuery,
} from "@gql/graphql";
import Loader from "@shared/Loader/Loader";
import Image from "next/image";
import List from "@shared/List/List";
import Button from "@shared/Buttons/Button";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import { WHITE } from "@constants/color";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CHALLENGE_DETAIL } from "@api/queries";
import { client } from "@api/apolloClient";
import { useTranslation } from "next-i18next";

import { type ChallengeById } from "@customTypes/challenges";
import { type ChallengeId } from "@customTypes/types";

const Challenge = (props: any) => {
  const { challengeById } = props;
  const { t } = useTranslation("challenge");

  return (
    <>
    <List
      description={challengeById.description}
      title={challengeById.challengeName}
      source={challengeById.img}
      endAt={challengeById.endAt}
      level={challengeById.level}
    />
    <Button
      name={t('challenge.gochallenge')}
      type="button-primary"
      icon={<LaunchChallenge width="20px" height="20px" fill={WHITE} />}
    />
    <div className="block w-11/12">
      <h2 className="text-2xl">{t('challenge.teams')}</h2>
      <div className="flex justify-around">
        {challengeById.teams.map((element, index) => (
          <div className="w-2/5" key={index}>
            <Image src={element.img || "https://picsum.photos/300/150" } alt="" width={300} height={150} />
            <h3>{element.teamName}</h3>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export async function getServerSideProps(context: ChallengeId) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }
  const path = context.params;
  const { id } = path;
  
  if (!id) {
    return {
      notFound: true,
    }
  }

  const { data } = await client.query({
    query: CHALLENGE_DETAIL,
    variables: { id },
  });

  const { challengeById } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["page", "challenge"])),
      challengeById: challengeById ?? [],
      locale,
    },
  }
}

export default Challenge;